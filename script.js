// Função para remover acentos
function removeAcentos(str) {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function nomesIguais(nome1, nome2) {
  const normalizar = (s) => removeAcentos(s).toLowerCase().trim();
  return normalizar(nome1) === normalizar(nome2);
}

const COUNTRIES_DATABASE = [
  { afg: "Afeganistão" },
  { alb: "Albânia" },
  { dza: "Argélia" },
  { and: "Andorra" },
  { ago: "Angola" },
  { atg: "Antígua e Barbuda" },
  { arg: "Argentina" },
  { arm: "Armênia" },
  { aus: "Austrália" },
  { aut: "Áustria" },
  { aze: "Azerbaijão" },
  { bhs: "Bahamas" },
  { bhr: "Bahrein" },
  { bgd: "Bangladesh" },
  { brb: "Barbados" },
  { blr: "Bielorrússia" },
  { bel: "Bélgica" },
  { blz: "Belize" },
  { ben: "Benim" },
  { bol: "Bolívia" },
  { bih: "Bósnia e Herzegovina" },
  { bwa: "Botsuana" },
  { bra: "Brasil" },
  { brn: "Brunei" },
  { bgr: "Bulgária" },
  { bfa: "Burkina Faso" },
  { bdi: "Burundi" },
  { cpv: "Cabo Verde" },
  { khm: "Camboja" },
  { cmr: "Camarões" },
  { can: "Canadá" },
  { caf: "República Centro-Africana" },
  { tcd: "Chade" },
  { chl: "Chile" },
  { chn: "China" },
  { col: "Colômbia" },
  { com: "Comores" },
  { cog: "Congo" },
  { cod: "República Democrática do Congo" },
  { cri: "Costa Rica" },
  { hrv: "Croácia" },
  { cub: "Cuba" },
  { cyp: "Chipre" },
  { cze: "República Tcheca" },
  { dnk: "Dinamarca" },
  { dji: "Djibuti" },
  { dma: "Dominica" },
  { dom: "República Dominicana" },
  { ecu: "Equador" },
  { egy: "Egito" },
  { slv: "El Salvador" },
  { gnq: "Guiné Equatorial" },
  { eri: "Eritreia" },
  { est: "Estônia" },
  { swz: "Eswatini" },
  { eth: "Etiópia" },
  { fji: "Fiji" },
  { fin: "Finlândia" },
  { fra: "França" },
  { gab: "Gabão" },
  { gmb: "Gâmbia" },
  { geo: "Geórgia" },
  { deu: "Alemanha" },
  { gha: "Gana" },
  { grc: "Grécia" },
  { grd: "Granada" },
  { gtm: "Guatemala" },
  { gin: "Guiné" },
  { gnb: "Guiné-Bissau" },
  { guy: "Guiana" },
  { hti: "Haiti" },
  { hnd: "Honduras" },
  { hun: "Hungria" },
  { isl: "Islândia" },
  { ind: "Índia" },
  { idn: "Indonésia" },
  { irn: "Irã" },
  { irq: "Iraque" },
  { irl: "Irlanda" },
  { isr: "Israel" },
  { ita: "Itália" },
  { jam: "Jamaica" },
  { jpn: "Japão" },
  { jor: "Jordânia" },
  { kaz: "Cazaquistão" },
  { ken: "Quênia" },
  { kir: "Quirguistão" },
  { prk: "Coreia do Norte" },
  { kor: "Coreia do Sul" },
  { kwt: "Kuwait" },
  { kgz: "Quirguistão" },
  { lao: "Laos" },
  { lva: "Letônia" },
  { lbn: "Líbano" },
  { lso: "Lesoto" },
  { lbr: "Libéria" },
  { lby: "Líbia" },
  { lie: "Liechtenstein" },
  { ltu: "Lituânia" },
  { lux: "Luxemburgo" },
  { mdg: "Madagascar" },
  { mwi: "Malawi" },
  { mys: "Malásia" },
  { mdv: "Maldivas" },
  { mli: "Mali" },
  { mlt: "Malta" },
  { mhl: "Ilhas Marshall" },
  { mrt: "Mauritânia" },
  { mus: "Maurício" },
  { mex: "México" },
  { fsm: "Micronésia" },
  { mda: "Moldávia" },
  { mco: "Mônaco" },
  { mng: "Mongólia" },
  { mne: "Montenegro" },
  { mar: "Marrocos" },
  { moz: "Moçambique" },
  { mmr: "Mianmar" },
  { nam: "Namíbia" },
  { nru: "Nauru" },
  { npl: "Nepal" },
  { nld: "Países Baixos" },
  { nzl: "Nova Zelândia" },
  { nic: "Nicarágua" },
  { ner: "Níger" },
  { nga: "Nigéria" },
  { mkd: "Macedônia do Norte" },
  { nor: "Noruega" },
  { omn: "Omã" },
  { pak: "Paquistão" },
  { plw: "Palau" },
  { pan: "Panamá" },
  { png: "Papua-Nova Guiné" },
  { pry: "Paraguai" },
  { per: "Peru" },
  { phl: "Filipinas" },
  { pol: "Polônia" },
  { prt: "Portugal" },
  { qat: "Catar" },
  { rou: "Romênia" },
  { rus: "Rússia" },
  { rwa: "Ruanda" },
  { kna: "São Cristóvão e Neves" },
  { lca: "Santa Lúcia" },
  { vct: "São Vicente e Granadinas" },
  { wsm: "Samoa" },
  { smr: "San Marino" },
  { stp: "São Tomé e Príncipe" },
  { sau: "Arábia Saudita" },
  { sen: "Senegal" },
  { srb: "Sérvia" },
  { syc: "Seicheles" },
  { sle: "Serra Leoa" },
  { sgp: "Singapura" },
  { svk: "Eslováquia" },
  { svn: "Eslovênia" },
  { slb: "Ilhas Salomão" },
  { som: "Somália" },
  { zaf: "África do Sul" },
  { ssd: "Sudão do Sul" },
  { esp: "Espanha" },
  { lka: "Sri Lanka" },
  { sdn: "Sudão" },
  { sur: "Suriname" },
  { swe: "Suécia" },
  { che: "Suíça" },
  { syr: "Síria" },
  { twn: "Taiwan" },
  { tjk: "Tajiquistão" },
  { tza: "Tanzânia" },
  { tha: "Tailândia" },
  { tls: "Timor-Leste" },
  { tgo: "Togo" },
  { ton: "Tonga" },
  { tto: "Trinidad e Tobago" },
  { tun: "Tunísia" },
  { tur: "Turquia" },
  { tkm: "Turcomenistão" },
  { tuv: "Tuvalu" },
  { uga: "Uganda" },
  { ukr: "Ucrânia" },
  { are: "Emirados Árabes Unidos" },
  { gbr: "Reino Unido" },
  { usa: "Estados Unidos" },
  { ury: "Uruguai" },
  { uzb: "Uzbequistão" },
  { vut: "Vanuatu" },
  { vat: "Vaticano" },
  { ven: "Venezuela" },
  { vnm: "Vietnã" },
  { yem: "Iêmen" },
  { zmb: "Zâmbia" },
  { zwe: "Zimbábue" },
  { pse: "Palestina" },
  { kos: "Kosovo" },
];

let currentCountry = null;
let tipLevel = 1;
let attempt = 0;
const totalAttemptsPerTip = 2;
let wrongGuesses = [];
let allGuesses = [];

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
  if (data.capital) {
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

  let idioms = "Não informado";
  if (data.languages) {
    let langData =
      typeof data.languages === "object"
        ? Object.values(data.languages)
        : data.languages;
    idioms = langData
      .map((n) =>
        typeof n === "object"
          ? n.nativeName
            ? Array.isArray(n.nativeName)
              ? n.nativeName[0]
              : n.nativeName
            : n
          : n,
      )
      .filter(Boolean)
      .join(", ");
  }

  let borders = "Nenhuma (Ilha)";
  if (data.borders && Array.isArray(data.borders) && data.borders.length > 0) {
    borders = data.borders.join(", ");
  }

  let formatNum = (num) =>
    num ? num.toLocaleString("pt-BR") : "Não informado";

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
  };
}

function generateTipsGroups(d) {
  const list1 = [
    `A área do país é de: \n${d.area}`,
    `A população do país é de: \n${d.population}`,
    `A densidade demográfica é de: \n${d.density}`,
    `Este país fica no fuso horário: \n${d.timezone}`,
    `Este país é independente? \n${d.dependent}`,
  ];
  const list2 = [
    `Este país está localizado no continente: \n${d.continent}`,
    `O símbolo da moeda deste país é: \n${d.currencySymbol}`,
    `O IDH aproximado deste país é: \n${d.hdi}`,
    `O PIB total deste país é de: \n${d.gdp}`,
  ];
  const list3 = [
    `Os idiomas falados neste país são: \n${d.idioms}`,
    `A capital deste país é: \n${d.capital}`,
    `As fronteiras deste país são: \n${d.borders}`,
  ];

  currentCountry.tipsGroup[1] = list1[Math.floor(Math.random() * list1.length)];
  currentCountry.tipsGroup[2] = list2[Math.floor(Math.random() * list2.length)];
  currentCountry.tipsGroup[3] = list3[Math.floor(Math.random() * list3.length)];
}

function showNextTip() {
  document.getElementById("round-text").innerText = `Dica ${tipLevel} de 3`;
  const container = document.getElementById("tips-container");

  const card = document.createElement("div");
  card.className = "tip-card";
  card.innerHTML = `
        <div class="tip-title">💡 Dica ${tipLevel}</div>
        <div class="tip-content">${currentCountry.tipsGroup[tipLevel]}</div>
    `;
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
      endGame(false);
      return;
    } else {
      showNextTip();
    }
  }
  updateLifeBar();
}

function endGame(isWin) {
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

  const d = currentCountry.details;
  const detailsContainer = document.getElementById("country-details");
  detailsContainer.innerHTML = `
        <div class="detail-item"><strong>🌍 País:</strong> ${d.name} (${d.code})</div>
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

  rScreen.style.display = "block";
}

// Event listeners
document.getElementById("btn-submit").addEventListener("click", processGuess);
document.getElementById("guess-input").addEventListener("keypress", (e) => {
  if (e.key === "Enter") processGuess();
});
document.getElementById("btn-restart").addEventListener("click", initGame);

window.onload = initGame;
