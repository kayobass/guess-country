import requests
import random

class Country:    
    def __init__(self, code, name):
        self.code = code
        self.name = name
        self.dependent = None
        self.capital = []
        self.continent = None
        self.area = None
        self.population = None
        self.timezone = None
        self.currencies_symbol = []
        self.idioms = []
        self.hdi = None
        self.gdp = None
        self.density = None
        self.borders = []
        self.flag = None
        self.__implement_data()

    def __implement_data(self):
        data = self.__get_data()
        if data:
            self.dependent = data.get('independent')
            
            capital_list = data.get('capital')
            self.capital = capital_list if isinstance(capital_list, list) else ([] if capital_list is None else [capital_list])
            
            self.continent = data.get('region')
            self.area = data.get('area')
            self.population = data.get('population')
            
            timezone_list = data.get('timezones')
            self.timezone = timezone_list[0] if isinstance(timezone_list, list) and timezone_list else None
            
            currencies_data = data.get('currencies')
            if isinstance(currencies_data, list):
                self.currencies_symbol = [c.get("symbol") for c in currencies_data if isinstance(c, dict) and c.get("symbol")]
            else:
                self.currencies_symbol = []

            data_languages = data.get("languages", [])
            data_languages = data_languages.values() if isinstance(data_languages, dict) else data_languages
            if data_languages:
                for item in data_languages:
                    native_name = item.get("name") if isinstance(item, dict) else item
                    if native_name: 
                        self.idioms.append(native_name[0] if isinstance(native_name, list) else native_name)

            self.hdi = data.get("hdi")
            
            gdp_data = data.get("gdp")
            self.gdp = gdp_data.get("total") if isinstance(gdp_data, dict) else None
            
            self.density = data.get("density")
            
            borders_list = data.get("borders")
            self.borders = borders_list if isinstance(borders_list, list) else []

            flag_data = data.get("flag")
            self.flag = flag_data.get("emoji") if isinstance(flag_data, dict) else None

    def __get_data(self):
        try:
            url = f"https://restcountries.com/v4/alpha/{self.code}"
            response = requests.get(url)
            if response.status_code == 200:
                return response.json()[0]
            return None
        except Exception as error:
            print(f"Erro ao obter dados para o país {self.name}: {error}")
            return None
        
    def get_tips(self, level):

        area_formatted = f"{self.area:,}".replace(",", ".") if self.area else "Não informado"

        population_formatted = f"{self.population:,}".replace(",", ".") if self.population else "Não informado"

        density_formatted = f"{self.density:.2f}".replace(".", ",") if self.density else "Não informado"

        timezone_text = self.timezone if self.timezone else "Não informado"

        dependency_status = "Sim" if self.dependent else "Não (País Soberano)"

        continent_text = self.continent if self.continent else "Não informado"

        currencies_text = ", ".join(self.currencies_symbol) if self.currencies_symbol else "Não informado"

        hdi_formatted = f"{self.hdi}".replace(".", ",") if self.hdi else "Não informado"

        gdp_formatted = f"US$ {self.gdp:,.2f}".replace(",", "X").replace(".", ",").replace("X", ".") if self.gdp else "Não informado"

        languages_text = ", ".join(self.idioms) if self.idioms else "Não informado"
        
        capitals_text = ", ".join(self.capital) if self.capital else "Não informado"

        borders_text = ", ".join(self.borders) if self.borders else "Sem Fronteiras (Ilha)"
        
        flag_emoji = self.flag if self.flag else "Não informado"

        if level == 1:
            tips = [
                f"A área do país é de: \n {area_formatted} km²", 
                f"A população do país é de: \n {population_formatted} habitantes", 
                f"A densidade demográfica é de: \n {density_formatted} hab/km²", 
                f"Este país fica no fuso horário: \n {timezone_text}", 
                f"Este país é independente? \n {dependency_status}"
            ]

            ready_tips = list(filter(lambda tip: "Não informado" not in tip, tips))
            return random.choice(ready_tips)
            
        elif level == 2:
            tips = [
                f"Este país está localizado no continente: \n {continent_text}",  
                f"O símbolo da moeda deste país é: \n {currencies_text}", 
                f"O IDH aproximado deste país é: \n {hdi_formatted}", 
                f"O PIB total deste país é de: \n {gdp_formatted}"
            ]

            ready_tips = list(filter(lambda tip: "Não informado" not in tip, tips))
            return random.choice(ready_tips)

        elif level == 3:
            tips = [
                f"Os idiomas falados neste país são: \n {languages_text}", 
                f"A capital deste país é: \n {capitals_text}", 
                f"As fronteiras deste país são: \n {borders_text}",
                f"O bandeira deste país é: \n {flag_emoji}"
            ]

            ready_tips = list(filter(lambda tip: "Não informado" not in tip, tips))
            return random.choice(ready_tips)
            
        return "Nível de dica inválido."
        
    def __str__(self):
        languages_text = ", ".join(self.idioms) if self.idioms else "Não informado"
        capitals_text = ", ".join(self.capital) if self.capital else "Não informado"
        currencies_text = ", ".join(self.currencies_symbol) if self.currencies_symbol else "Não informado"
        borders_text = ", ".join(self.borders) if self.borders else "Nenhuma (Ilha)"
        
        population_formatted = f"{self.population:,}".replace(",", ".") if self.population else "Não informado"
        area_formatted = f"{self.area:,}".replace(",", ".") if self.area else "Não informado"
        density_formatted = f"{self.density:.2f}".replace(".", ",") if self.density else "Não informado"
        gdp_formatted = f"US$ {self.gdp:,.2f}".replace(",", "X").replace(".", ",").replace("X", ".") if self.gdp else "Não informado"
        hdi_formatted = f"{self.hdi}".replace(".", ",") if self.hdi else "Não informado"
        
        dependency_status = "Sim" if self.dependent else "Não (País Soberano)"
        flag_emoji = self.flag if self.flag else "🏳️"

        return (
            f"\n"
            f"{'='*40}\n"
            f" 🌍 INFORMAÇÕES SOBRE: {self.name.upper()} ({self.code}) - {flag_emoji}\n"
            f"{'='*40}\n"
            f"🔹 Capital: {capitals_text}\n"
            f"🔹 Continente: {self.continent or 'Não informado'}\n"
            f"🔹 É Dependente? {dependency_status}\n"
            f"--- Geografia e População ---\n"
            f" 📐 Área: {area_formatted} km²\n"
            f" 👥 População: {population_formatted} habitantes\n"
            f" 📉 Densidade Demográfica: {density_formatted} hab/km²\n"
            f"--- Dados Culturais e Econômicos ---\n"
            f" 🗣️ Idiomas: {languages_text}\n"
            f" 🪙 Símbolo da Moeda: {currencies_text}\n"
            f" 🕒 Fuso Horário (Timezone): {self.timezone or 'Não informado'}\n"
            f" 📊 IDH: {hdi_formatted}\n"
            f" 💰 PIB Total: {gdp_formatted}\n"
            f"--- Geopolítica ---\n"
            f" 🗺️ Fronteiras: {borders_text}\n"
            f"{'='*40}"
        )
    
if __name__ == "__main__":
    print("Testando a classe Country diretamente...")
    sample_country = Country("bra", "Brasil")
    print(sample_country)