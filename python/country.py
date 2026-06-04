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

        first_tips = []

        area_formatted = f"{self.area:,}".replace(",", ".") if self.area else "Não informado"
        first_tips.append(f"A área do país é de: \n {area_formatted} km²") if area_formatted != "Não informado" else None

        population_formatted = f"{self.population:,}".replace(",", ".") if self.population else "Não informado"
        first_tips.append(f"A população do país é de: \n {population_formatted} habitantes") if population_formatted != "Não informado" else None

        density_formatted = f"{self.density:.2f}".replace(".", ",") if self.density else "Não informado"
        first_tips.append(f"A densidade demográfica do país é de: \n {density_formatted} hab/km²") if density_formatted != "Não informado" else None

        timezone_text = self.timezone if self.timezone else "Não informado"
        first_tips.append(f"Este país fica no fuso horário: \n {timezone_text}") if timezone_text != "Não informado" else None

        dependency_status = "Sim" if self.dependent else "Não (País Soberano)"
        first_tips.append(f"Este país é independente? \n {dependency_status}")

        second_tips = []

        continent_text = self.continent if self.continent else "Não informado"
        second_tips.append(f"Este país está localizado no continente: \n {continent_text}") if continent_text != "Não informado" else None

        currencies_text = ", ".join(self.currencies_symbol) if self.currencies_symbol else "Não informado"
        second_tips.append(f"Moedas adotadas no país: \n {currencies_text}") if currencies_text != "Não informado" else None

        hdi_formatted = f"{self.hdi}".replace(".", ",") if self.hdi else "Não informado"
        second_tips.append(f"O IDH aproximado deste país é: \n {hdi_formatted}") if hdi_formatted != "Não informado" else None

        gdp_formatted = f"US$ {self.gdp:,.2f}".replace(",", "X").replace(".", ",").replace("X", ".") if self.gdp else "Não informado"
        second_tips.append(f"O PIB total deste país é de: \n {gdp_formatted}") if gdp_formatted != "Não informado" else None

        
        third_tips = []

        languages_text = ", ".join(self.idioms) if self.idioms else "Não informado"
        third_tips.append(f"Os idiomas falados neste país são: \n {languages_text}") if languages_text != "Não informado" else None

        capitals_text = ", ".join(self.capital) if self.capital else "Não informado"
        third_tips.append(f"A capital deste país é: \n {capitals_text}") if capitals_text != "Não informado" else None

        borders_text = ", ".join(self.borders) if self.borders else "Sem Fronteiras (Ilha)"
        third_tips.append(f"As fronteiras deste país são: \n {borders_text}")
        
        flag_emoji = self.flag if self.flag else "Não informado"
        third_tips.append(f"A bandeira deste país é: \n {flag_emoji}") if flag_emoji != "Não informado" else None

        if level == 1:

            return random.choice(first_tips) if first_tips else "Nenhuma dica disponível para este nível."
            
        elif level == 2:
            
            return random.choice(second_tips) if second_tips else "Nenhuma dica disponível para este nível."
            
        elif level == 3:
            return random.choice(third_tips) if third_tips else "Nenhuma dica disponível para este nível."
            
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