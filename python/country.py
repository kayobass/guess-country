import requests
import random
import constants
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
        self.driving_side = None
        self.currencies_symbol = []
        self.idioms = []
        self.density = None
        self.borders = []
        self.flag = None
        self.__implement_data()
        self.__map_countries = {}
        for item in constants.COUNTRIES_DATABASE:
            for codigo, nome in item.items():
                self.__map_countries[codigo] = nome

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
            self.timezone = ", ".join(timezone_list) if isinstance(timezone_list, list) and timezone_list else None

            cars_data = data.get('cars')
            if isinstance(cars_data, dict):
                driving_side = cars_data.get('driving_side')
                if driving_side == 'left':
                    self.driving_side = 'Esquerda'
                elif driving_side == 'right':
                    self.driving_side = 'Direita'
                else:
                    self.driving_side = None
            else:
                self.driving_side = None
            
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

            if self.area and self.population:
                self.density = self.population / self.area
            else:
                self.density = None
            
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

        driving_side_text = self.driving_side if self.driving_side else "Não informado"

        dependency_status = "Sim" if self.dependent else "Não (País Soberano)"

        continent_text = self.continent if self.continent else "Não informado"

        currencies_text = ", ".join(self.currencies_symbol) if self.currencies_symbol else "Não informado"

        languages_text = ", ".join(self.idioms) if self.idioms else "Não informado"

        capitals_text = ", ".join(self.capital) if self.capital else "Não informado"

        nomes_fronteiras = []
        for codigo in self.borders:
            codigo_lower = codigo.lower()
            nome = self.__map_countries.get(codigo_lower, codigo)
            nomes_fronteiras.append(nome)
        borders_text = ", ".join(nomes_fronteiras) if self.borders else "Sem Fronteiras (Ilha)"
        
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
                f"O símbolo da moeda deste país é: \n {currencies_text}"
            ]

            ready_tips = list(filter(lambda tip: "Não informado" not in tip, tips))
            return random.choice(ready_tips)

        elif level == 3:
            tips = [
                f"Os idiomas falados neste país são: \n {languages_text}", 
                f"A capital deste país é: \n {capitals_text}", 
                f"O lado de direção neste país é: \n {driving_side_text}",
                f"As fronteiras deste país são: \n {borders_text}",
                f"A bandeira deste país é: \n {flag_emoji}"
            ]

            ready_tips = list(filter(lambda tip: "Não informado" not in tip, tips))
            return random.choice(ready_tips)
            
        return "Nível de dica inválido."
        
    def __str__(self):
        languages_text = ", ".join(self.idioms) if self.idioms else "Não informado"
        capitals_text = ", ".join(self.capital) if self.capital else "Não informado"
        currencies_text = ", ".join(self.currencies_symbol) if self.currencies_symbol else "Não informado"
        driving_side_text = self.driving_side if self.driving_side else "Não informado"
        
        nomes_fronteiras = []
        for codigo in self.borders:
            codigo_lower = codigo.lower()
            nome = self.__map_countries.get(codigo_lower, codigo)
            nomes_fronteiras.append(nome)
        borders_text = ", ".join(nomes_fronteiras) if self.borders else "Sem Fronteiras (Ilha)"
        
        population_formatted = f"{self.population:,}".replace(",", ".") if self.population else "Não informado"
        area_formatted = f"{self.area:,}".replace(",", ".") if self.area else "Não informado"
        density_formatted = f"{self.density:.2f}".replace(".", ",") if self.density else "Não informado"
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
            f" 🚗 Lado de Direção: {driving_side_text}\n"
            f"--- Geopolítica ---\n"
            f" 🗺️ Fronteiras: {borders_text}\n"
            f"{'='*40}"
        )
    
if __name__ == "__main__":
    print("Testando a classe Country diretamente...")
    sample_country = Country("bra", "Brasil")
    print(sample_country)