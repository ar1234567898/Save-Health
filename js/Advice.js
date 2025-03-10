function getRandomNumber(min, max, last) {
  let num;
  do {
    num = Math.floor(Math.random() * (max - min)) + min;
  } while (num === last);
  return num;
}

const medicalTips = [
  "Stay hydrated! Drink plenty of water throughout the day.",
  "Regular exercise can boost your immune system and improve your mood.",
  "Get enough sleep to help your body recover and stay healthy.",
  "Eat a balanced diet rich in fruits, vegetables, and whole grains.",
  "Practice good hygiene by washing your hands frequently.",
  "Schedule regular check-ups with your healthcare provider.",
  "Manage stress through mindfulness, meditation, or yoga.",
  "Avoid smoking and limit alcohol consumption for better health.",
  "Stay informed about vaccinations and keep your immunizations up to date.",
  "Listen to your body and seek medical advice when needed.",
  "Mental health is just as important as physical health; don't hesitate to seek help.",
  "Take breaks and give yourself time to relax and recharge.",
];

let lastTipIndex = null;
let pills = 5;

const buttonMedicalTips = document.getElementById("btnMedicalAdvice");
const medicalTipsElement = document.getElementById("medicalAdvice");
const heartsElement = document.getElementById("healthPoints");
const purchaseWindow = document.querySelector(".purchaseWindow");
const equationP = document.querySelector(".equasionP");
const equationInput = document.querySelector(".equasionInput");
const equationButton = document.getElementById("equasionButton");

function updateHeartsDisplay() {
  heartsElement.innerHTML = "💊".repeat(pills) + "❌".repeat(5 - pills);
}

function showTip() {
  lastTipIndex = getRandomNumber(0, medicalTips.length, lastTipIndex);
  medicalTipsElement.innerHTML = medicalTips[lastTipIndex];
  if (pills > 0) {
    pills--;
    updateHeartsDisplay();
  }
  if (pills === 0) {
    medicalTipsElement.innerHTML = "You are out of health points!";
    buttonMedicalTips.classList.add("visually-hidden");
  }
}

function generateRandomEquation() {
  const operators = ["+", "-", "*"];
  const num1 = getRandomNumber(1, 20, null);
  const num2 = getRandomNumber(1, 20, null);
  const operator = operators[Math.floor(Math.random() * operators.length)];
  return `${num1} ${operator} ${num2}`;
}

function showPurchaseWindow() {
  equationInput.value = null;
  purchaseWindow.showModal();
  const equation = generateRandomEquation();
  equationP.innerHTML = equation + " = ?";
  lastEquationIndex = equation; // Store the equation for later evaluation
}

function evaluateEquation() {
  const userAnswer = parseInt(equationInput.value, 10);
  const correctAnswer = eval(lastEquationIndex);
  if (userAnswer === correctAnswer) {
    pills = 5;
    medicalTipsElement.innerHTML = null;
    buttonMedicalTips.classList.remove("visually-hidden");
    updateHeartsDisplay();
    purchaseWindow.close();
  } else {
    alert("Incorrect answer. Try again!");
  }
}

buttonMedicalTips.addEventListener("click", showTip);
document
  .getElementById("buyHealthPoints")
  .addEventListener("click", showPurchaseWindow);
equationButton.addEventListener("click", evaluateEquation);

// Initial display of hearts
updateHeartsDisplay();