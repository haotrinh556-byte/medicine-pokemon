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

const scoreElement = document.getElementById("score");
const roundsPlayedElement = document.getElementById("rounds-played");
const nameDisplayElement = document.getElementById("name-display");
const feedbackElement = document.getElementById("feedback");
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

function showNextRound() {
  if (roundPool.length === 0) {
    refillRoundPool();
  }

  currentEntry = roundPool.pop();
  roundAnswered = false;
  nameDisplayElement.textContent = currentEntry.name;
  updateFeedback("Choose whether this name is a Pokémon or a medicine.");
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
