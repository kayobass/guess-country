import random
from country import Country

class Game:
    COUNTRIES_DATABASE = [
        {'afg': 'Afeganistão'}, {'alb': 'Albânia'}, {'dza': 'Argélia'}, {'and': 'Andorra'},
        {'ago': 'Angola'}, {'atg': 'Antígua e Barbuda'}, {'arg': 'Argentina'}, {'arm': 'Armênia'},
        {'aus': 'Austrália'}, {'aut': 'Áustria'}, {'aze': 'Azerbaijão'}, {'bhs': 'Bahamas'},
        {'bhr': 'Bahrein'}, {'bgd': 'Bangladesh'}, {'brb': 'Barbados'}, {'blr': 'Bielorrússia'},
        {'bel': 'Bélgica'}, {'blz': 'Belize'}, {'ben': 'Benim'},
        {'bol': 'Bolívia'}, {'bih': 'Bósnia e Herzegovina'}, {'bwa': 'Botsuana'}, {'bra': 'Brasil'},
        {'brn': 'Brunei'}, {'bgr': 'Bulgária'}, {'bfa': 'Burkina Faso'}, {'bdi': 'Burundi'},
        {'cpv': 'Cabo Verde'}, {'khm': 'Camboja'}, {'cmr': 'Camarões'}, {'can': 'Canadá'},
        {'caf': 'República Centro-Africana'}, {'tcd': 'Chade'}, {'chl': 'Chile'}, {'chn': 'China'},
        {'col': 'Colômbia'}, {'com': 'Comores'}, {'cog': 'Congo'}, {'cod': 'República Democrática do Congo'},
        {'cri': 'Costa Rica'}, {'hrv': 'Croácia'}, {'cub': 'Cuba'}, {'cyp': 'Chipre'},
        {'cze': 'República Tcheca'}, {'dnk': 'Dinamarca'}, {'dji': 'Djibuti'}, {'dma': 'Dominica'},
        {'dom': 'República Dominicana'}, {'ecu': 'Equador'}, {'egy': 'Egito'}, {'slv': 'El Salvador'},
        {'gnq': 'Guiné Equatorial'}, {'eri': 'Eritreia'}, {'est': 'Estônia'}, {'swz': 'Eswatini'},
        {'eth': 'Etiópia'}, {'fji': 'Fiji'}, {'fin': 'Finlândia'}, {'fra': 'França'},
        {'gab': 'Gabão'}, {'gmb': 'Gâmbia'}, {'geo': 'Geórgia'}, {'deu': 'Alemanha'},
        {'gha': 'Gana'}, {'grc': 'Grécia'}, {'grd': 'Granada'}, {'gtm': 'Guatemala'},
        {'gin': 'Guiné'}, {'gnb': 'Guiné-Bissau'}, {'guy': 'Guiana'}, {'hti': 'Haiti'},
        {'hnd': 'Honduras'}, {'hun': 'Hungria'}, {'isl': 'Islândia'}, {'ind': 'Índia'},
        {'idn': 'Indonésia'}, {'irn': 'Irã'}, {'irq': 'Iraque'}, {'irl': 'Irlanda'},
        {'isr': 'Israel'}, {'ita': 'Itália'}, {'jam': 'Jamaica'}, {'jpn': 'Japão'},
        {'jor': 'Jordânia'}, {'kaz': 'Cazaquistão'}, {'ken': 'Quênia'}, {'kir': 'Quirguistão'},
        {'prk': 'Coreia do Norte'}, {'kor': 'Coreia do Sul'}, {'kwt': 'Kuwait'}, {'kgz': 'Quirguistão'},
        {'lao': 'Laos'}, {'lva': 'Letônia'}, {'lbn': 'Líbano'}, {'lso': 'Lesoto'},
        {'lbr': 'Libéria'}, {'lby': 'Líbia'}, {'lie': 'Liechtenstein'}, {'ltu': 'Lituânia'},
        {'lux': 'Luxemburgo'}, {'mdg': 'Madagascar'}, {'mwi': 'Malawi'}, {'mys': 'Malásia'},
        {'mdv': 'Maldivas'}, {'mli': 'Mali'}, {'mlt': 'Malta'}, {'mhl': 'Ilhas Marshall'},
        {'mrt': 'Mauritânia'}, {'mus': 'Maurício'}, {'mex': 'México'}, {'fsm': 'Micronésia'},
        {'mda': 'Moldávia'}, {'mco': 'Mônaco'}, {'mng': 'Mongólia'}, {'mne': 'Montenegro'},
        {'mar': 'Marrocos'}, {'moz': 'Moçambique'}, {'mmr': 'Mianmar'}, {'nam': 'Namíbia'},
        {'nru': 'Nauru'}, {'npl': 'Nepal'}, {'nld': 'Países Baixos'}, {'nzl': 'Nova Zelândia'},
        {'nic': 'Nicarágua'}, {'ner': 'Níger'}, {'nga': 'Nigéria'}, {'mkd': 'Macedônia do Norte'},
        {'nor': 'Noruega'}, {'omn': 'Omã'}, {'pak': 'Paquistão'}, {'plw': 'Palau'},
        {'pan': 'Panamá'}, {'png': 'Papua-Nova Guiné'}, {'pry': 'Paraguai'}, {'per': 'Peru'},
        {'phl': 'Filipinas'}, {'pol': 'Polônia'}, {'prt': 'Portugal'}, {'qat': 'Catar'},
        {'rou': 'Romênia'}, {'rus': 'Rússia'}, {'rwa': 'Ruanda'}, {'kna': 'São Cristóvão e Neves'},
        {'lca': 'Santa Lúcia'}, {'vct': 'São Vicente e Granadinas'}, {'wsm': 'Samoa'},
        {'smr': 'San Marino'}, {'stp': 'São Tomé e Príncipe'}, {'sau': 'Arábia Saudita'},
        {'sen': 'Senegal'}, {'srb': 'Sérvia'}, {'syc': 'Seicheles'}, {'sle': 'Serra Leoa'},
        {'sgp': 'Singapura'}, {'svk': 'Eslováquia'}, {'svn': 'Eslovênia'}, {'slb': 'Ilhas Salomão'},
        {'som': 'Somália'}, {'zaf': 'África do Sul'}, {'ssd': 'Sudão do Sul'}, {'esp': 'Espanha'},
        {'lka': 'Sri Lanka'}, {'sdn': 'Sudão'}, {'sur': 'Suriname'}, {'swe': 'Suécia'},
        {'che': 'Suíça'}, {'syr': 'Síria'}, {'twn': 'Taiwan'}, {'tjk': 'Tajiquistão'},
        {'tza': 'Tanzânia'}, {'tha': 'Tailândia'}, {'tls': 'Timor-Leste'}, {'tgo': 'Togo'},
        {'ton': 'Tonga'}, {'tto': 'Trinidad e Tobago'}, {'tun': 'Tunísia'}, {'tur': 'Turquia'},
        {'tkm': 'Turcomenistão'}, {'tuv': 'Tuvalu'}, {'uga': 'Uganda'}, {'ukr': 'Ucrânia'},
        {'are': 'Emirados Árabes Unidos'}, {'gbr': 'Reino Unido'}, {'usa': 'Estados Unidos'},
        {'ury': 'Uruguai'}, {'uzb': 'Uzbequistão'}, {'vut': 'Vanuatu'}, {'vat': 'Vaticano'},
        {'ven': 'Venezuela'}, {'vnm': 'Vietnã'}, {'yem': 'Iêmen'}, {'zmb': 'Zâmbia'},
        {'zwe': 'Zimbábue'}, {'pse': 'Palestina'}, {'kos': 'Kosovo'}
    ]

    def get_random_country_node(self):
        chosen_node = random.choice(self.COUNTRIES_DATABASE)
        code = list(chosen_node.keys())[0]
        name = list(chosen_node.values())[0]
        return code, name
    
    def get_life_bar(self, current_attempt, total_attempts=2):
        remaining_lives = total_attempts - current_attempt
        filled_blocks = "=" * remaining_lives
        empty_blocks = " " * current_attempt
        return f"[{filled_blocks}{empty_blocks}] ({remaining_lives}/{total_attempts})"

    def start_screen(self):
        print("\n" + "="*50)
        print(" 🗺️  GUESS THE COUNTRY GAME  🗺️ ".center(50))
        print("="*50)
        print(" Tente adivinhar o país secreto com as dicas!".center(50))
        print(" Você tem exatamente 2 chances por dica.".center(50))
        print("="*50 + "\n")

    def start(self):
        self.start_screen()
        code, name = self.get_random_country_node()
        country = Country(code, name)

        try:
            for tip_level in range(1, 4):
                tip = country.get_tips(tip_level)
                print(f"💡 DICA {tip_level}: {tip}")
                print("-" * 50)

                for attempt in range(2):
                    life_bar = self.get_life_bar(attempt)
                    print(f"❤️  Vida: {life_bar}")
                    
                    guess = input("⌨️  Digite o nome do país: ").strip()

                    if guess.lower() == country.name.lower():
                        print("\n" + "🎉"*15)
                        print(" PARABÉNS! Você acertou o país! ".center(45))
                        print("🎉"*15)
                        print(country)
                        return

                    print("\n❌ Resposta incorreta!")
                    print("-" * 50)

            print("\n" + "💀"*15)
            print(f" GAME OVER! O país era: {country.name} ".center(45))
            print("💀"*15)
            print(country)

        except KeyboardInterrupt:
            print("\n\n👋 Jogo interrompido pelo usuário!")
            print(f"O país secreto era: {country.name}")
            print(country)

if __name__ == "__main__":
    game = Game()
    game.start()