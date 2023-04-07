const num1 = Math.ceil(Math.random() * 10);
const num2 = Math.ceil(Math.random() * 10);

const question = document.querySelector("#question");
const form = document.querySelector("#form");
const input = document.querySelector("#input");
const scoreEl = document.querySelector("#score");

let score = JSON.parse(localStorage.getItem("score"));

if (!score) {
    score = 0;
}

//scoreEl.innerText = `Score: ${score} `;
question.innerText = `Cuánto es ${num1} X ${num2} ?`;

const correctAns = num1 * num2;

form.addEventListener("submit", () => {
    const userAns = +input.value;
    if (userAns === correctAns) {
        score++;
        updateLocalStorage();
    } else {
        score--;
        updateLocalStorage();
    }
});

function updateLocalStorage() {
    if (score === 7) {
        localStorage.setItem("score", JSON.stringify(0));
        alert("Winner");
    } else {
        localStorage.setItem("score", JSON.stringify(score));
    }
    scoreEl.innerText = `Score: ${score} `;
}