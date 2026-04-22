const pokemonNames = [
  "Pikachu",
  "Bulbasaur",
  "Charmander",
  "Squirtle",
  "Jigglypuff",
  "Meowth",
  "Snorlax",
  "Eevee",
  "Gengar",
  "Lapras",
  "Psyduck",
  "Machop",
  "Onix",
  "Togepi",
  "Mareep",
  "Mudkip",
  "Lucario",
  "Greninja",
  "Rowlet",
  "Mimikyu"
];

const medicineNames = [
  "Ibuprofen",
  "Amoxicillin",
  "Metformin",
  "Lisinopril",
  "Atorvastatin",
  "Omeprazole",
  "Amlodipine",
  "Losartan",
  "Sertraline",
  "Azithromycin",
  "Prednisone",
  "Cetirizine",
  "Fluoxetine",
  "Clopidogrel",
  "Warfarin",
  "Zolpidem",
  "Hydrocortisone",
  "Tramadol",
  "Gabapentin",
  "Levothyroxine"
];

const allEntries = [
  ...pokemonNames.map((name) => ({ name, type: "Pokémon" })),
  ...medicineNames.map((name) => ({ name, type: "Medicine" }))
];

function createSvgImageDataUri(label, theme) {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 240" role="img" aria-label="${label}">
      <defs>
        <linearGradient id="card" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="${theme.start}" />
          <stop offset="100%" stop-color="${theme.end}" />
        </linearGradient>
      </defs>
      <rect width="320" height="240" rx="26" fill="url(#card)" />
      <rect x="114" y="52" width="92" height="116" rx="18" fill="${theme.bottle}" />
      <rect x="124" y="36" width="72" height="30" rx="12" fill="${theme.cap}" />
      <rect x="124" y="88" width="72" height="44" rx="10" fill="#ffffff" opacity="0.96" />
      <circle cx="93" cy="159" r="22" fill="${theme.pill}" />
      <rect x="169" y="160" width="61" height="26" rx="13" fill="${theme.pill}" />
      <path d="M78 159h30" stroke="#ffffff" stroke-width="6" stroke-linecap="round" />
      <path d="M170 173h58" stroke="#ffffff" stroke-width="6" stroke-linecap="round" />
      <text x="160" y="106" text-anchor="middle" font-family="Trebuchet MS, Segoe UI, sans-serif" font-size="13" font-weight="700" fill="${theme.text}">
        Medicine
      </text>
      <text x="160" y="208" text-anchor="middle" font-family="Trebuchet MS, Segoe UI, sans-serif" font-size="18" font-weight="700" fill="${theme.text}">
        ${label}
      </text>
    </svg>
  `;

  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

const placeholderImageUrl = createSvgImageDataUri("Image unavailable", {
  start: "#eef3ff",
  end: "#dfe8ff",
  bottle: "#b8c7ef",
  cap: "#8398d1",
  pill: "#f2a65a",
  text: "#24324f"
});

const medicineImageMap = {
  Ibuprofen: createSvgImageDataUri("Ibuprofen", {
    start: "#fff4e8",
    end: "#ffe0c2",
    bottle: "#ffcf99",
    cap: "#ff9e57",
    pill: "#ff7e67",
    text: "#5c3317"
  }),
  Amoxicillin: createSvgImageDataUri("Amoxicillin", {
    start: "#effff5",
    end: "#d8f6e3",
    bottle: "#b8ecc9",
    cap: "#56bf83",
    pill: "#2f9964",
    text: "#1d4f35"
  }),
  Metformin: createSvgImageDataUri("Metformin", {
    start: "#eef7ff",
    end: "#d9ebff",
    bottle: "#bfdcff",
    cap: "#62a0ea",
    pill: "#3973c7",
    text: "#17385f"
  }),
  Lisinopril: createSvgImageDataUri("Lisinopril", {
    start: "#fff1f3",
    end: "#ffd9e0",
    bottle: "#ffc2d0",
    cap: "#ef6c8f",
    pill: "#d94b75",
    text: "#5d1f31"
  }),
  Atorvastatin: createSvgImageDataUri("Atorvastatin", {
    start: "#f4f2ff",
    end: "#e2dcff",
    bottle: "#cbc0ff",
    cap: "#8c79e3",
    pill: "#6d55cf",
    text: "#34296a"
  }),
  Omeprazole: createSvgImageDataUri("Omeprazole", {
    start: "#f9f8ea",
    end: "#efe9be",
    bottle: "#e2d96c",
    cap: "#b6a93d",
    pill: "#8c8130",
    text: "#4e4817"
  }),
  Amlodipine: createSvgImageDataUri("Amlodipine", {
    start: "#eefdf8",
    end: "#d2f7eb",
    bottle: "#a9edd6",
    cap: "#4cb797",
    pill: "#2f8f76",
    text: "#1a4f43"
  }),
  Losartan: createSvgImageDataUri("Losartan", {
    start: "#fef3e8",
    end: "#fee1c8",
    bottle: "#f8c798",
    cap: "#dd8c4e",
    pill: "#b85b37",
    text: "#5c311b"
  }),
  Sertraline: createSvgImageDataUri("Sertraline", {
    start: "#f4f8ff",
    end: "#dfe8ff",
    bottle: "#c4d4ff",
    cap: "#6b8ef2",
    pill: "#536fd6",
    text: "#22386e"
  }),
  Azithromycin: createSvgImageDataUri("Azithromycin", {
    start: "#fff5ef",
    end: "#ffe2d2",
    bottle: "#ffcab1",
    cap: "#f38b66",
    pill: "#e36a43",
    text: "#642d1e"
  }),
  Prednisone: createSvgImageDataUri("Prednisone", {
    start: "#fff8ef",
    end: "#ffebcf",
    bottle: "#ffd698",
    cap: "#e2a94c",
    pill: "#c47c20",
    text: "#624012"
  }),
  Cetirizine: createSvgImageDataUri("Cetirizine", {
    start: "#eefcfd",
    end: "#d5f4f7",
    bottle: "#abe6eb",
    cap: "#4dbcc8",
    pill: "#2a95a1",
    text: "#194d53"
  }),
  Fluoxetine: createSvgImageDataUri("Fluoxetine", {
    start: "#fff1f8",
    end: "#ffddec",
    bottle: "#ffc1db",
    cap: "#ee6da6",
    pill: "#cf4f86",
    text: "#611d3b"
  }),
  Clopidogrel: createSvgImageDataUri("Clopidogrel", {
    start: "#effcf2",
    end: "#d8f4df",
    bottle: "#b7e9c2",
    cap: "#59b96d",
    pill: "#37884d",
    text: "#1e4d2c"
  }),
  Warfarin: createSvgImageDataUri("Warfarin", {
    start: "#f7f4ff",
    end: "#e7ddff",
    bottle: "#d1beff",
    cap: "#9272ef",
    pill: "#6d4ed4",
    text: "#35225e"
  }),
  Zolpidem: createSvgImageDataUri("Zolpidem", {
    start: "#eef5ff",
    end: "#dce8ff",
    bottle: "#c1d5ff",
    cap: "#6b8cdf",
    pill: "#4c67ba",
    text: "#20355c"
  }),
  Hydrocortisone: createSvgImageDataUri("Hydrocortisone", {
    start: "#fff4ef",
    end: "#ffe2d8",
    bottle: "#ffccb8",
    cap: "#ea8b68",
    pill: "#cb6641",
    text: "#612d1f"
  }),
  Tramadol: createSvgImageDataUri("Tramadol", {
    start: "#f0fff9",
    end: "#d8f7ea",
    bottle: "#b8ead0",
    cap: "#50bb8c",
    pill: "#2b8d65",
    text: "#184f39"
  }),
  Gabapentin: createSvgImageDataUri("Gabapentin", {
    start: "#f3f7ff",
    end: "#dfe8fb",
    bottle: "#c7d7f8",
    cap: "#738fcc",
    pill: "#5472ae",
    text: "#23385f"
  }),
  Levothyroxine: createSvgImageDataUri("Levothyroxine", {
    start: "#fff4ee",
    end: "#ffe1d6",
    bottle: "#ffc7b3",
    cap: "#eb8661",
    pill: "#ce5f37",
    text: "#642d1d"
  })
};

const pokemonImageMap = {
  Pikachu: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  Bulbasaur: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  Charmander: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  Squirtle: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
  Jigglypuff: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/39.png",
  Meowth: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/52.png",
  Snorlax: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/143.png",
  Eevee: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/133.png",
  Gengar: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/94.png",
  Lapras: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/131.png",
  Psyduck: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/54.png",
  Machop: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/66.png",
  Onix: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/95.png",
  Togepi: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/175.png",
  Mareep: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/179.png",
  Mudkip: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/258.png",
  Lucario: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/448.png",
  Greninja: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/658.png",
  Rowlet: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/722.png",
  Mimikyu: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/778.png"
};

const scoreElement = document.getElementById("score");
const roundsPlayedElement = document.getElementById("rounds-played");
const nameDisplayElement = document.getElementById("name-display");
const feedbackElement = document.getElementById("feedback");
const imagePanelElement = document.getElementById("image-panel");
const itemImageElement = document.getElementById("item-image");
const pokemonButton = document.getElementById("pokemon-button");
const medicineButton = document.getElementById("medicine-button");
const nextButton = document.getElementById("next-button");
const restartButton = document.getElementById("restart-button");

let score = 0;
let roundsPlayed = 0;
let currentEntry = null;
let roundAnswered = false;
let roundPool = [];

function shuffle(array) {
  const copy = [...array];

  for (let index = copy.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [copy[index], copy[randomIndex]] = [copy[randomIndex], copy[index]];
  }

  return copy;
}

function updateScoreboard() {
  scoreElement.textContent = String(score);
  roundsPlayedElement.textContent = String(roundsPlayed);
}

function updateFeedback(message, status) {
  feedbackElement.textContent = message;
  feedbackElement.className = "feedback";

  if (status) {
    feedbackElement.classList.add(status);
  }
}

function setGuessButtonsState(disabled) {
  pokemonButton.disabled = disabled;
  medicineButton.disabled = disabled;
}

function refillRoundPool() {
  roundPool = shuffle(allEntries);
}

function clearItemImage() {
  imagePanelElement.hidden = true;
  itemImageElement.src = "";
  itemImageElement.alt = "";
}

function getImageUrl(entry) {
  if (entry.type === "Pokémon") {
    return pokemonImageMap[entry.name] || placeholderImageUrl;
  }

  return medicineImageMap[entry.name] || placeholderImageUrl;
}

function showItemImage(entry) {
  const imageUrl = getImageUrl(entry);

  itemImageElement.onerror = function () {
    itemImageElement.onerror = null;
    itemImageElement.src = placeholderImageUrl;
  };

  itemImageElement.src = imageUrl;
  itemImageElement.alt = `${entry.name} image`;
  imagePanelElement.hidden = false;
}

function showNextRound() {
  if (roundPool.length === 0) {
    refillRoundPool();
  }

  currentEntry = roundPool.pop();
  roundAnswered = false;
  nameDisplayElement.textContent = currentEntry.name;
  updateFeedback("Choose whether this name is a Pokémon or a medicine.");
  clearItemImage();
  setGuessButtonsState(false);
  nextButton.disabled = true;
}

function handleGuess(choice) {
  if (!currentEntry || roundAnswered) {
    return;
  }

  roundAnswered = true;
  roundsPlayed += 1;

  if (choice === currentEntry.type) {
    score += 1;
    updateFeedback(`Correct! ${currentEntry.name} is a ${currentEntry.type}.`, "correct");
  } else {
    updateFeedback(`Wrong! ${currentEntry.name} is a ${currentEntry.type}.`, "wrong");
  }

  updateScoreboard();
  showItemImage(currentEntry);
  setGuessButtonsState(true);
  nextButton.disabled = false;
}

function restartGame() {
  score = 0;
  roundsPlayed = 0;
  updateScoreboard();
  refillRoundPool();
  showNextRound();
}

pokemonButton.addEventListener("click", function () {
  handleGuess("Pokémon");
});

medicineButton.addEventListener("click", function () {
  handleGuess("Medicine");
});

nextButton.addEventListener("click", function () {
  showNextRound();
});

restartButton.addEventListener("click", function () {
  restartGame();
});

restartGame();
