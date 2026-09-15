function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function getComputerChoice() { // This function generates a number whose value is either: 0, 1, or 2
        let roll = Math.floor(Math.random() * 3);

        switch (roll) {
            case 0:
                return "rock";
            case 1:
                return "paper";
            default:
                return "scissors";
        }
    }

    // eventListener() for the buttons => detects human choice.
    const menu = document.querySelector("ul");

    menu.addEventListener("click", (e) => {
        let target = e.target.id;
        let computerChoice = getComputerChoice();

        switch (target) {
            case "rock":
                playRound("rock", computerChoice);
                break;
            case "paper":
                playRound("paper", computerChoice);
                break;
            case "scissors":
                playRound("scissors", computerChoice);
                break;
        };
    });

    const results = document.querySelector("#results");

    function playRound(humanChoice, computerChoice) {
        // 1. Handle ties
        if (humanChoice === computerChoice) {
            // console.log(`It's a tie! Both chose ${humanChoice}`);
            results.textContent = `It's a tie! Both chose ${humanChoice}`;
            return;
        }

        // 2. Handle human wins
        if (
            (humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "paper" && computerChoice === "rock") ||
            (humanChoice === "scissors" && computerChoice === "paper")
        ) {
            // console.log(`You win! ${humanChoice} beats ${computerChoice}`);
            results.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
            humanScore++;
        }
        // 3. All remaining valid cases are computer wins
        else {
            // console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
            results.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
            computerScore++;
        }
    }

    if (humanScore > computerScore) {
        console.log(`Congratulations! You won the match: ${humanScore} - ${computerScore}`);
    } else if (computerScore > humanScore) {
        console.log(`You lost the match: ${computerScore} - ${humanScore}`);
    } else {
        console.log(`The match ended in a tie: ${humanScore} - ${computerScore}`);
    }
}

playGame();