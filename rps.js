function getComputerChoice() {
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

function getHumanChoice() {
    let choice = prompt("Enter your choice (rock, paper, or scissors):");
    return choice;
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        // Guard against clicking 'Cancel' on prompt
        if (!humanChoice) {
            console.log("Round cancelled: No input provided.");
            return;
        }

        humanChoice = humanChoice.toLowerCase();

        // 1. Handle ties
        if (humanChoice === computerChoice) {
            console.log(`It's a tie! Both chose ${humanChoice}`);
            return;
        }

        // 2. Handle human wins
        if (
            (humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "paper" && computerChoice === "rock") ||
            (humanChoice === "scissors" && computerChoice === "paper")
        ) {
            console.log(`You win! ${humanChoice} beats ${computerChoice}`);
            humanScore++;
        } 
        // 3. All remaining valid cases are computer wins
        else {
            console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
            computerScore++;
        }
    }

    // for (let i = 0; i < 5; i++) {
    //     const humanSelection = getHumanChoice();
    //     const computerSelection = getComputerChoice();
    //     playRound(humanSelection, computerSelection);
    // }

    if (humanScore > computerScore) {
        console.log(`Congratulations! You won the match: ${humanScore} - ${computerScore}`);
    } else if (computerScore > humanScore) {
        console.log(`You lost the match: ${computerScore} - ${humanScore}`);
    } else {
        console.log(`The match ended in a tie: ${humanScore} - ${computerScore}`);
    }
}

playGame();