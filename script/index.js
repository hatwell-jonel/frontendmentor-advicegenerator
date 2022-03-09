const API_ADVICE = "https://api.adviceslip.com/advice";
const btnDice = document.getElementById("dice");
const adviceEl = document.getElementById("advice-text");
const numberEl = document.getElementById("advice-number");

let rotateDeg = 0;

btnDice.addEventListener("click", () => {
  rotateDeg += 90;
  btnDice.firstElementChild.style.transform = `rotate(${rotateDeg}deg)`;
  getAdvice();
});

const getAdvice = async () => {
  fetch(API_ADVICE, { method: "GET", cache: "no-cache" })
    .then((res) => res.json())
    .then((data) => {
      const { id, advice } = data.slip;
      numberEl.innerHTML = `advice #${id}`;
      adviceEl.innerHTML = `${advice}`;
    });
};

getAdvice();
