import random
from country import Country
import constants

class Game:

    def get_random_country_node(self):
        chosen_node = random.choice(constants.COUNTRIES_DATABASE)
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

    def normalize_guess(self, guess: str) -> str:
        import unicodedata
        nfkd = unicodedata.normalize('NFKD', guess)
        return "".join([c for c in nfkd if not unicodedata.combining(c)]).lower().strip()

    def start(self):
        self.start_screen()
        code, name = self.get_random_country_node()
        country = Country(code, name)

        normalized_correct = self.normalize_guess(country.name)

        try:
            for tip_level in range(1, 4):
                tip = country.get_tips(tip_level)
                print(f"💡 DICA {tip_level}: {tip}")
                print("-" * 50)

                for attempt in range(2):
                    life_bar = self.get_life_bar(attempt)
                    print(f"❤️  Vida: {life_bar}")
                    
                    guess = input("⌨️  Digite o nome do país: ").strip()
                    normalized_guess = self.normalize_guess(guess)

                    if normalized_guess == normalized_correct:
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