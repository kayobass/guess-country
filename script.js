// Função para remover acentos
function removeAcentos(str) {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function nomesIguais(nome1, nome2) {
  const normalizar = (s) => removeAcentos(s).toLowerCase().trim();
  return normalizar(nome1) === normalizar(nome2);
}

const COUNTRIES_DATABASE = [
  { abw: "Aruba" },
  { afg: "Afeganistão" },
  { ago: "Angola" },
  { aia: "Anguilla" },
  { ala: "Ilhas Åland" },
  { alb: "Albânia" },
  { and: "Andorra" },
  { are: "Emirados Árabes Unidos" },
  { arg: "Argentina" },
  { arm: "Armênia" },
  { asm: "Samoa Americana" },
  { ata: "Antártida" },
  { atf: "Territórios Franceses do Sul" },
  { atg: "Antígua e Barbuda" },
  { aus: "Austrália" },
  { aut: "Áustria" },
  { aze: "Azerbaijão" },
  { bdi: "Burundi" },
  { bel: "Bélgica" },
  { ben: "Benim" },
  { bfa: "Burkina Faso" },
  { bgd: "Bangladesh" },
  { bgr: "Bulgária" },
  { bhr: "Bahrein" },
  { bhs: "Bahamas" },
  { bih: "Bósnia e Herzegovina" },
  { blm: "São Bartolomeu" },
  { blr: "Bielorrússia" },
  { blz: "Belize" },
  { bmu: "Bermuda" },
  { bol: "Bolívia" },
  { bra: "Brasil" },
  { brb: "Barbados" },
  { brn: "Brunei" },
  { btn: "Butão" },
  { bvt: "Ilha Bouvet" },
  { bwa: "Botsuana" },
  { caf: "República Centro-Africana" },
  { can: "Canadá" },
  { che: "Suíça" },
  { chl: "Chile" },
  { chn: "China" },
  { civ: "Costa do Marfim" },
  { cmr: "Camarões" },
  { cod: "República Democrática do Congo" },
  { cog: "Congo" },
  { cok: "Ilhas Cook" },
  { col: "Colômbia" },
  { com: "Comores" },
  { cpv: "Cabo Verde" },
  { cri: "Costa Rica" },
  { cub: "Cuba" },
  { cuw: "Curaçao" },
  { cxr: "Ilha Christmas" },
  { cyp: "Chipre" },
  { cze: "República Tcheca" },
  { deu: "Alemanha" },
  { dji: "Djibuti" },
  { dma: "Dominica" },
  { dnk: "Dinamarca" },
  { dom: "República Dominicana" },
  { dza: "Argélia" },
  { ecu: "Equador" },
  { egy: "Egito" },
  { eri: "Eritreia" },
  { esp: "Espanha" },
  { est: "Estônia" },
  { eth: "Etiópia" },
  { fin: "Finlândia" },
  { fji: "Fiji" },
  { fra: "França" },
  { fro: "Ilhas Faroé" },
  { fsm: "Micronésia" },
  { gab: "Gabão" },
  { gbr: "Reino Unido" },
  { geo: "Geórgia" },
  { ggy: "Guernsey" },
  { gha: "Gana" },
  { gib: "Gibraltar" },
  { gin: "Guiné" },
  { gmb: "Gâmbia" },
  { gnb: "Guiné-Bissau" },
  { gnq: "Guiné Equatorial" },
  { grc: "Grécia" },
  { grd: "Granada" },
  { grl: "Groenlândia" },
  { gtm: "Guatemala" },
  { guf: "Guiana Francesa" },
  { guy: "Guiana" },
  { hnd: "Honduras" },
  { hrv: "Croácia" },
  { hti: "Haiti" },
  { hun: "Hungria" },
  { idn: "Indonésia" },
  { ind: "Índia" },
  { irl: "Irlanda" },
  { irn: "Irã" },
  { irq: "Iraque" },
  { isl: "Islândia" },
  { isr: "Israel" },
  { ita: "Itália" },
  { jam: "Jamaica" },
  { jey: "Jersey" },
  { jor: "Jordânia" },
  { jpn: "Japão" },
  { kaz: "Cazaquistão" },
  { ken: "Quênia" },
  { kgz: "Quirguistão" },
  { khm: "Camboja" },
  { kir: "Quirguistão" },
  { kna: "São Cristóvão e Neves" },
  { kor: "Coreia do Sul" },
  { kos: "Kosovo" },
  { kwt: "Kuwait" },
  { lao: "Laos" },
  { lbn: "Líbano" },
  { lbr: "Libéria" },
  { lby: "Líbia" },
  { lca: "Santa Lúcia" },
  { lie: "Liechtenstein" },
  { lka: "Sri Lanka" },
  { lso: "Lesoto" },
  { ltu: "Lituânia" },
  { lux: "Luxemburgo" },
  { lva: "Letônia" },
  { maf: "São Martinho" },
  { mar: "Marrocos" },
  { mco: "Mônaco" },
  { mda: "Moldávia" },
  { mdg: "Madagascar" },
  { mdv: "Maldivas" },
  { mex: "México" },
  { mhl: "Ilhas Marshall" },
  { mkd: "Macedônia do Norte" },
  { mli: "Mali" },
  { mlt: "Malta" },
  { mmr: "Mianmar" },
  { mne: "Montenegro" },
  { mng: "Mongólia" },
  { moz: "Moçambique" },
  { mrt: "Mauritânia" },
  { mtq: "Martinica" },
  { mus: "Maurício" },
  { mwi: "Malawi" },
  { mys: "Malásia" },
  { nam: "Namíbia" },
  { ncl: "Nova Caledônia" },
  { ner: "Níger" },
  { nga: "Nigéria" },
  { nic: "Nicarágua" },
  { niu: "Niue" },
  { nld: "Países Baixos" },
  { nor: "Noruega" },
  { npl: "Nepal" },
  { nru: "Nauru" },
  { nzl: "Nova Zelândia" },
  { omn: "Omã" },
  { pak: "Paquistão" },
  { pan: "Panamá" },
  { per: "Peru" },
  { phl: "Filipinas" },
  { plw: "Palau" },
  { png: "Papua-Nova Guiné" },
  { pol: "Polônia" },
  { pri: "Porto Rico" },
  { prk: "Coreia do Norte" },
  { prt: "Portugal" },
  { pry: "Paraguai" },
  { pse: "Palestina" },
  { qat: "Catar" },
  { rou: "Romênia" },
  { rus: "Rússia" },
  { rwa: "Ruanda" },
  { sau: "Arábia Saudita" },
  { sdn: "Sudão" },
  { sen: "Senegal" },
  { sgp: "Singapura" },
  { slb: "Ilhas Salomão" },
  { sle: "Serra Leoa" },
  { slv: "El Salvador" },
  { smr: "San Marino" },
  { som: "Somália" },
  { srb: "Sérvia" },
  { ssd: "Sudão do Sul" },
  { stp: "São Tomé e Príncipe" },
  { sur: "Suriname" },
  { svk: "Eslováquia" },
  { svn: "Eslovênia" },
  { swe: "Suécia" },
  { swz: "Eswatini" },
  { syc: "Seicheles" },
  { syr: "Síria" },
  { tcd: "Chade" },
  { tgo: "Togo" },
  { tha: "Tailândia" },
  { tjk: "Tajiquistão" },
  { tkl: "Tokelau" },
  { tkm: "Turcomenistão" },
  { tls: "Timor-Leste" },
  { ton: "Tonga" },
  { tto: "Trinidad e Tobago" },
  { tun: "Tunísia" },
  { tur: "Turquia" },
  { tuv: "Tuvalu" },
  { twn: "Taiwan" },
  { tza: "Tanzânia" },
  { uga: "Uganda" },
  { ukr: "Ucrânia" },
  { ury: "Uruguai" },
  { usa: "Estados Unidos" },
  { uzb: "Uzbequistão" },
  { vat: "Vaticano" },
  { vct: "São Vicente e Granadinas" },
  { ven: "Venezuela" },
  { vir: "Ilhas Virgens" },
  { vnm: "Vietnã" },
  { vut: "Vanuatu" },
  { wsm: "Samoa" },
  { yem: "Iêmen" },
  { zaf: "África do Sul" },
  { zmb: "Zâmbia" },
  { zwe: "Zimbábue" },
];

const codeToCountryName = {};
COUNTRIES_DATABASE.forEach((item) => {
  const code = Object.keys(item)[0];
  const name = Object.values(item)[0];
  codeToCountryName[code] = name;
});

const allCountryNames = COUNTRIES_DATABASE.map(
  (item) => Object.values(item)[0],
);

// ---------- INJEÇÃO DE CSS PARA O AUTOCOMPLETE ----------
const style = document.createElement("style");
style.textContent = `
  .autocomplete-container {
    flex: 1;
    position: relative;
  }
  .suggestions-box {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background-color: var(--card-bg);
    border: 1px solid var(--border);
    border-radius: 12px;
    max-height: 280px;
    overflow-y: auto;
    z-index: 1000;
    box-shadow: 0 8px 20px rgba(0,0,0,0.3);
    margin-top: 4px;
    width: 100%;
  }
  .suggestion-item {
    padding: 10px 14px;
    cursor: pointer;
    transition: background 0.15s;
    font-size: 0.95rem;
    border-bottom: 1px solid rgba(255,255,255,0.05);
  }
  .suggestion-item:last-child {
    border-bottom: none;
  }
  .suggestion-item:hover,
  .suggestion-item.selected {
    background-color: var(--primary);
    color: white;
  }
  .suggestions-box::-webkit-scrollbar {
    width: 6px;
  }
  .suggestions-box::-webkit-scrollbar-track {
    background: var(--border);
    border-radius: 4px;
  }
  .suggestions-box::-webkit-scrollbar-thumb {
    background: var(--primary);
    border-radius: 4px;
  }
`;
document.head.appendChild(style);

// ---------- CRIAÇÃO DO DROPDOWN ----------
const inputElement = document.getElementById("guess-input");
const parentDiv = inputElement.parentNode;
const container = document.createElement("div");
container.className = "autocomplete-container";
parentDiv.replaceChild(container, inputElement);
container.appendChild(inputElement);
const suggestionsBox = document.createElement("div");
suggestionsBox.className = "suggestions-box";
suggestionsBox.style.display = "none";
container.appendChild(suggestionsBox);

let currentSuggestions = [];
let selectedIndex = -1;

function normalizeText(str) {
  return removeAcentos(str).toLowerCase().trim();
}

function filterCountries(searchText) {
  if (!searchText) return [];
  const normalizedSearch = normalizeText(searchText);
  return allCountryNames
    .filter((name) => normalizeText(name).includes(normalizedSearch))
    .slice(0, 14);
}

function updateSuggestions() {
  const inputText = inputElement.value.trim();
  const matches = filterCountries(inputText);
  currentSuggestions = matches;
  selectedIndex = -1;

  if (matches.length === 0 || inputText === "") {
    suggestionsBox.style.display = "none";
    return;
  }

  suggestionsBox.innerHTML = "";
  matches.forEach((name, idx) => {
    const div = document.createElement("div");
    div.className = "suggestion-item";
    div.textContent = name;
    div.addEventListener("click", () => {
      inputElement.value = name;
      suggestionsBox.style.display = "none";
      inputElement.focus();
    });
    suggestionsBox.appendChild(div);
  });
  suggestionsBox.style.display = "block";
}

function updateSelectedItem(items) {
  items.forEach((item, idx) => {
    if (idx === selectedIndex) {
      item.classList.add("selected");
      item.scrollIntoView({ block: "nearest" });
    } else {
      item.classList.remove("selected");
    }
  });
}

function closeSuggestions() {
  suggestionsBox.style.display = "none";
  selectedIndex = -1;
  currentSuggestions = [];
}

inputElement.addEventListener("input", updateSuggestions);
inputElement.addEventListener("keydown", (e) => {
  const items = document.querySelectorAll(".suggestion-item");
  if (items.length === 0) return;

  if (e.key === "ArrowDown") {
    e.preventDefault();
    selectedIndex = (selectedIndex + 1) % items.length;
    updateSelectedItem(items);
  } else if (e.key === "ArrowUp") {
    e.preventDefault();
    selectedIndex = (selectedIndex - 1 + items.length) % items.length;
    updateSelectedItem(items);
  } else if (e.key === "Enter") {
    if (selectedIndex >= 0 && currentSuggestions[selectedIndex]) {
      e.preventDefault();
      // Preenche o input e fecha o dropdown
      inputElement.value = currentSuggestions[selectedIndex];
      closeSuggestions();
      // Agora envia automaticamente o palpite
      processGuess();
    }
  } else if (e.key === "Escape") {
    closeSuggestions();
  }
});

document.addEventListener("click", (e) => {
  if (!container.contains(e.target)) {
    closeSuggestions();
  }
});

// ---------- JOGO (restante inalterado) ----------

let currentCountry = null;
let tipLevel = 1;
let attempt = 0;
const totalAttemptsPerTip = 2;
let wrongGuesses = [];
let allGuesses = [];
let hasUnsavedProgress = false;

window.addEventListener("beforeunload", function (e) {
  const gameView = document.getElementById("game-view");
  const resultScreen = document.getElementById("result-screen");
  const isGameActive = gameView && gameView.style.display === "block";
  const isGameFinished = resultScreen && resultScreen.style.display === "block";
  if (hasUnsavedProgress && isGameActive && !isGameFinished) {
    e.preventDefault();
    e.returnValue = "";
  }
});

async function initGame() {
  document.getElementById("setup-view").style.display = "block";
  document.getElementById("game-view").style.display = "none";
  document.getElementById("result-screen").style.display = "none";
  document.getElementById("action-inputs").style.display = "flex";
  document.getElementById("tips-container").innerHTML = "";
  document.getElementById("feedback-message").className = "feedback";
  document.getElementById("feedback-message").innerText = "";
  document.getElementById("guess-input").value = "";

  wrongGuesses = [];
  allGuesses = [];
  hasUnsavedProgress = false;
  updateWrongGuessesDisplay();
  document.getElementById("wrong-guesses-area").style.display = "none";

  tipLevel = 1;
  attempt = 0;

  const chosen =
    COUNTRIES_DATABASE[Math.floor(Math.random() * COUNTRIES_DATABASE.length)];
  const code = Object.keys(chosen)[0];
  const name = Object.values(chosen)[0];

  currentCountry = { code, name, details: null, tipsGroup: {} };

  const fetchedData = await fetchCountryData(code);
  if (fetchedData) {
    currentCountry.details = parseCountryDetails(fetchedData, name, code);
    generateTipsGroups(currentCountry.details);

    document.getElementById("setup-view").style.display = "none";
    document.getElementById("game-view").style.display = "block";

    updateLifeBar();
    showNextTip();
  } else {
    document.getElementById("setup-view").innerText =
      "Erro ao carregar dados. Tentando outro país...";
    setTimeout(initGame, 2000);
  }
}

async function fetchCountryData(code) {
  try {
    const url = `https://restcountries.com/v4/alpha/${code}`;
    const response = await fetch(url);
    if (response.ok) {
      const json = await response.json();
      return json[0];
    }
    return null;
  } catch (e) {
    return null;
  }
}

function parseCountryDetails(data, name, code) {
  let capitals = "Não informado";
  if (data.capital && data.capital.length > 0 && data.capital[0]) {
    capitals = Array.isArray(data.capital)
      ? data.capital.join(", ")
      : data.capital;
  }

  let currencies = "Não informado";
  if (data.currencies) {
    if (Array.isArray(data.currencies)) {
      currencies = data.currencies
        .map((c) => c.symbol)
        .filter(Boolean)
        .join(", ");
    } else if (typeof data.currencies === "object") {
      currencies = Object.values(data.currencies)
        .map((c) => c.symbol)
        .filter(Boolean)
        .join(", ");
    }
  }
  if (!currencies || currencies === "") currencies = "Não informado";

  let idioms = "Não informado";
  if (data.languages) {
    let langData =
      typeof data.languages === "object"
        ? Object.values(data.languages)
        : data.languages;
    idioms = langData
      .map((n) =>
        typeof n === "object"
          ? n.name
            ? Array.isArray(n.name)
              ? n.name[0]
              : n.name
            : n
          : n,
      )
      .filter(Boolean)
      .join(", ");
  }
  if (!idioms || idioms === "") idioms = "Não informado";

  let borders = "Nenhuma (Ilha)";
  if (data.borders && Array.isArray(data.borders) && data.borders.length > 0) {
    // Converte cada código da API para minúsculo antes de buscar
    const borderNames = data.borders.map((code) => {
      const lowerCode = code.toLowerCase();
      return codeToCountryName[lowerCode] || code;
    });
    borders = borderNames.join(", ");
  }

  let formatNum = (num) =>
    num ? num.toLocaleString("pt-BR") : "Não informado";

  let flagSvg = data.flag ? data.flag.svg : null;
  let flagEmoji = data.flag && data.flag.emoji ? data.flag.emoji : "";

  return {
    name: name,
    code: code.toUpperCase(),
    capital: capitals,
    continent: data.region || "Não informado",
    dependent: data.independent ? "Sim" : "Não (País Soberano)",
    area: data.area ? `${formatNum(data.area)} km²` : "Não informado",
    population: data.population
      ? `${formatNum(data.population)} habitantes`
      : "Não informado",
    density: data.density
      ? `${data.density.toFixed(2).replace(".", ",")} hab/km²`
      : "Não informado",
    timezone:
      data.timezones && data.timezones[0] ? data.timezones[0] : "Não informado",
    currencySymbol: currencies || "Não informado",
    hdi: data.hdi ? data.hdi.toString().replace(".", ",") : "Não informado",
    gdp:
      data.gdp && data.gdp.total
        ? `US$ ${data.gdp.total.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}`
        : "Não informado",
    borders: borders,
    idioms: idioms,
    flagSvg: flagSvg,
    flagEmoji: flagEmoji,
  };
}

function generateTipsGroups(d) {
  let list1 = [];
  if (d.area !== "Não informado")
    list1.push(`A área do país é de: \n${d.area}`);
  if (d.population !== "Não informado")
    list1.push(`A população do país é de: \n${d.population}`);
  if (d.density !== "Não informado")
    list1.push(`A densidade demográfica do país é de: \n${d.density}`);
  if (d.timezone !== "Não informado")
    list1.push(`Este país fica no fuso horário: \n${d.timezone}`);
  if (d.dependent !== "Não informado")
    list1.push(`Este país é independente? \n${d.dependent}`);
  if (list1.length === 0) list1 = ["Dica indisponível para este país."];

  let list2 = [];
  if (d.continent !== "Não informado")
    list2.push(`Este país está localizado no continente: \n${d.continent}`);
  if (d.currencySymbol !== "Não informado")
    list2.push(`O símbolo da moeda deste país é: \n${d.currencySymbol}`);
  if (d.hdi !== "Não informado")
    list2.push(`O IDH aproximado deste país é: \n${d.hdi}`);
  if (d.gdp !== "Não informado")
    list2.push(`O PIB total deste país é de: \n${d.gdp}`);
  if (list2.length === 0) list2 = ["Dica indisponível para este país."];

  let list3 = [];
  if (d.idioms !== "Não informado")
    list3.push(`Os idiomas falados neste país são: \n${d.idioms}`);
  if (d.capital !== "Não informado")
    list3.push(`A capital deste país é: \n${d.capital}`);
  if (d.borders !== "Nenhuma (Ilha)" && d.borders !== "Não informado")
    list3.push(`As fronteiras deste país são: \n${d.borders}`);
  if (d.flagSvg) {
    list3.push(`bandeira::${d.flagSvg}`);
  }
  if (list3.length === 0) list3 = ["Dica indisponível para este país."];

  const tip1Text = list1[Math.floor(Math.random() * list1.length)];
  const tip2Text = list2[Math.floor(Math.random() * list2.length)];
  const tip3Raw = list3[Math.floor(Math.random() * list3.length)];

  let tip3Html;
  if (typeof tip3Raw === "string" && tip3Raw.startsWith("bandeira::")) {
    const flagSvgUrl = tip3Raw.split("::")[1];
    tip3Html = `
      <div style="display: flex; justify-content: space-between; align-items: center; gap: 16px; flex-wrap: wrap;">
        <span style="flex: 1;">A bandeira deste país é:</span>
        <img src="${flagSvgUrl}" width="60" style="border-radius: 8px; border: 1px solid var(--border); background: white;">
      </div>
    `;
  } else {
    tip3Html = `<div>${tip3Raw}</div>`;
  }

  currentCountry.tipsGroup[1] = tip1Text;
  currentCountry.tipsGroup[2] = tip2Text;
  currentCountry.tipsGroup[3] = tip3Html;
}

function showNextTip() {
  document.getElementById("round-text").innerText = `Dica ${tipLevel} de 3`;
  const container = document.getElementById("tips-container");

  const card = document.createElement("div");
  card.className = "tip-card";

  let contentHtml = `
    <div class="tip-title">💡 Dica ${tipLevel}</div>
    <div class="tip-content">${currentCountry.tipsGroup[tipLevel]}</div>
  `;
  card.innerHTML = contentHtml;
  container.appendChild(card);
}

function updateLifeBar() {
  const remaining = totalAttemptsPerTip - attempt;
  const percentage = (remaining / totalAttemptsPerTip) * 100;
  document.getElementById("life-fill").style.width = `${percentage}%`;
  document.getElementById("life-text").innerText =
    `(${remaining}/${totalAttemptsPerTip})`;
}

function updateWrongGuessesDisplay() {
  const container = document.getElementById("guess-tag-container");
  const area = document.getElementById("wrong-guesses-area");
  if (wrongGuesses.length === 0) {
    area.style.display = "none";
    return;
  }
  area.style.display = "block";
  container.innerHTML = "";
  wrongGuesses.forEach((guess) => {
    const tag = document.createElement("div");
    tag.className = "guess-tag";
    tag.innerHTML = `<span>❌</span> ${guess}`;
    container.appendChild(tag);
  });
}

function processGuess() {
  const inputEl = document.getElementById("guess-input");
  const feedbackEl = document.getElementById("feedback-message");
  const guess = inputEl.value.trim();
  if (!guess) return;

  if (!hasUnsavedProgress) {
    hasUnsavedProgress = true;
  }

  const isCorrect = nomesIguais(guess, currentCountry.name);
  allGuesses.push({ text: guess, result: isCorrect });

  if (isCorrect) {
    endGame(true);
    return;
  }

  const alreadyExists = wrongGuesses.some((w) => nomesIguais(w, guess));
  if (!alreadyExists) {
    wrongGuesses.push(guess);
    updateWrongGuessesDisplay();
  }

  attempt++;
  inputEl.value = "";
  feedbackEl.innerText = "❌ Resposta incorreta!";
  feedbackEl.className = "feedback incorrect";

  if (attempt >= totalAttemptsPerTip) {
    attempt = 0;
    tipLevel++;
    if (tipLevel > 3) {
      // Atualiza a vida para zero antes de finalizar
      const remaining = 0;
      const percentage = 0;
      document.getElementById("life-fill").style.width = `${percentage}%`;
      document.getElementById("life-text").innerText =
        `(${remaining}/${totalAttemptsPerTip})`;

      endGame(false);
      return;
    } else {
      showNextTip();
    }
  }
  updateLifeBar();
}

function endGame(isWin) {
  hasUnsavedProgress = false;

  document.getElementById("action-inputs").style.display = "none";
  document.getElementById("feedback-message").innerText = "";

  const rTitle = document.getElementById("result-title");
  const rScreen = document.getElementById("result-screen");

  if (isWin) {
    rTitle.innerHTML = "🎉 PARABÉNS! Você acertou o país! 🎉";
    rTitle.style.color = "var(--success)";
  } else {
    rTitle.innerHTML = `💀 GAME OVER! O país era: ${currentCountry.name} 💀`;
    rTitle.style.color = "var(--danger)";
  }

  const d = currentCountry.details;
  const detailsContainer = document.getElementById("country-details");
  detailsContainer.innerHTML = `
    <div class="detail-item"><strong>🌍 País:</strong> ${d.name} (${d.code}) - ${d.flagEmoji}</div>
    <div class="detail-item"><strong>🔹 Capital:</strong> ${d.capital}</div>
    <div class="detail-item"><strong>🔹 Continente:</strong> ${d.continent}</div>
    <div class="detail-item"><strong>🔹 É Dependente?</strong> ${d.dependent}</div>
    <div class="detail-item"><strong>📐 Área:</strong> ${d.area}</div>
    <div class="detail-item"><strong>👥 População:</strong> ${d.population}</div>
    <div class="detail-item"><strong>📉 Densidade:</strong> ${d.density}</div>
    <div class="detail-item"><strong>🗣️ Idiomas:</strong> ${d.idioms}</div>
    <div class="detail-item"><strong>🪙 Moeda (Símbolo):</strong> ${d.currencySymbol}</div>
    <div class="detail-item"><strong>🕒 Timezone:</strong> ${d.timezone}</div>
    <div class="detail-item"><strong>📊 IDH:</strong> ${d.hdi}</div>
    <div class="detail-item"><strong>💰 PIB:</strong> ${d.gdp}</div>
    <div class="detail-item"><strong>🗺️ Fronteiras:</strong> ${d.borders}</div>
  `;

  const guessesContainer = document.getElementById("guesses-history");
  if (allGuesses.length > 0) {
    let guessesHtml = `<div style="font-weight: bold; margin-bottom: 10px;">📝 Seus palpites:</div>`;
    allGuesses.forEach((g, idx) => {
      const status = g.result ? "✅ ACERTOU" : "❌ ERROU";
      const statusClass = g.result ? "right" : "wrong";
      guessesHtml += `<div class="guess-item ${statusClass}">
        <strong>Palpite ${idx + 1}:</strong> ${g.text} (${status})
      </div>`;
    });
    guessesContainer.innerHTML = guessesHtml;
  } else {
    guessesContainer.innerHTML =
      '<div class="detail-item">Nenhum palpite registrado.</div>';
  }

  rScreen.style.display = "block";
}

document.getElementById("btn-submit").addEventListener("click", processGuess);
document.getElementById("guess-input").addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    if (
      selectedIndex === -1 ||
      document.querySelectorAll(".suggestion-item").length === 0
    ) {
      e.preventDefault();
      processGuess();
    }
  }
});
document.getElementById("btn-restart").addEventListener("click", initGame);

window.onload = initGame;
