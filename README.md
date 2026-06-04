# Guess the Country

Projeto simples com duas formas de jogar "Guess the Country":

- Jogo de linha de comando (CLI) em Python.
- Versão frontend (HTML/JS) para jogar no navegador.

**Resumo**

O jogo sorteia um país e fornece dicas em três níveis. O jogador tem 2 tentativas por dica para adivinhar o país secreto.

**Estrutura principal**

- `game.py` — jogo CLI (entrada pelo terminal).
- `country.py` — classe que obtém e formata dados da API `restcountries`.
- `index.html` — versão web (na raiz ou em `frontend/index.html`, dependendo de onde você abriu o projeto).

**Pré-requisitos**

- Python 3.8+ (recomendado usar um virtualenv).
- Pacote `requests` para o jogo CLI.
- Navegador moderno para a versão web.
- Conexão com a internet (a aplicação consulta https://restcountries.com).

**Instalação (CLI)**

1. (Opcional) Crie e ative um virtualenv:

```bash
python -m venv .venv
\.venv\Scripts\activate   # Windows PowerShell
```

2. Instale dependências:

```bash
pip install requests
```

3. Rode o jogo CLI:

```bash
python game.py
```

Ou, se você estiver fora da subpasta `python/`:

```bash
python python/game.py
```

**Comportamento esperado**

- O jogo fornece uma dica por vez (3 níveis) e dá 2 tentativas por dica.
- Ao vencer ou esgotar as dicas, a tela de resultados mostra informações do país retiradas da API.

**Soluções de problemas**

- Erro ao buscar dados: verifique sua conexão e se `https://restcountries.com` está acessível.
- Se o CLI apresentar erro de importação, confirme que está executando o `game.py` correto (ex.: `python game.py` na raiz ou `python python/game.py` se estiver na subpasta).
- Para depurar o frontend, abra o Console do navegador (F12) e verifique mensagens de erro de rede/JS.
