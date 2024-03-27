let score = 0;

const choices = ["Rock", "Paper", "Scissors"];
const buttons = document.querySelectorAll(".choice-button");

buttons.forEach((button) => {
    button.addEventListener("click", function () {
        let playerChoice = this.id;
        let computerChoice = choices[Math.floor(Math.random() * choices.length)];

        let result = "";
        if (playerChoice === computerChoice) {
            result = "It's a draw!";
        } else if (
            (playerChoice === "Rock" && computerChoice === "Scissors") ||
            (playerChoice === "Paper" && computerChoice === "Rock") ||
            (playerChoice === "Scissors" && computerChoice === "Paper")
        ) {
            result = "You win!";
            score++;
        } else {
            result = "You lose!";
            score--;
        }

        document.getElementById(
            "player-choice"
        ).innerHTML = `You chose <strong>${playerChoice}</strong>`;
        document.getElementById(
            "computer-choice"
        ).innerHTML = `The computer chose <strong>${computerChoice}</strong>`;
        document.getElementById("winner").innerHTML = result;
        document.getElementById("score").innerHTML = `Score: ${score}`;
    });
});
