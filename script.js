const reset = document.querySelector("h3")
const options = document.querySelectorAll(".options > ul > li");

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

const humanScore = document.querySelector("#user");
const computerScore = document.querySelector("#computer");

const message = document.querySelector("#message");
const FirstMessage = message.textContent;

const scoreElement = document.querySelector(".score ul")

// Seleção do usuário:

options.forEach(option => {
    option.addEventListener("mouseover", willPick);
    option.addEventListener("mouseout", didntPick);
    option.addEventListener("click", playing);
});

function playing(event) {
    resetingRoundScoreFormating()
    humanChoice = event.target.id;
    printingPick(humanChoice, true);
    gettingRoundScore(humanChoice);
}

function printingPick(pick, user) {
    const dictPickSymbols = {"rock": "👊🏼", "paper": "✋🏼", "scissors": "✌🏼"}
    creatingSpaceForChoices();
    if (user) {
        scoreElement.firstElementChild.querySelector("div").textContent = dictPickSymbols[pick]
    } else {
        scoreElement.lastElementChild.querySelector("div").textContent = dictPickSymbols[pick]
    }
}

function creatingSpaceForChoices() {
    if (scoreElement.children.length == 3) {

        firstli = document.createElement("li");
        scoreElement.prepend(firstli);
        firstli.classList.add("player");
        firstli.append(document.createElement("div"));
        firstli.append(document.createElement("h6"));

        secondli = document.createElement("li");
        scoreElement.append(secondli);
        secondli.classList.add("player");
        secondli.append(document.createElement("div"));
        secondli.append(document.createElement("h6"));

    }
}

// Rodada:

function gettingRoundScore(humanChoice) {
    computerChoice = getting_computer_choice();
    printingPick(computerChoice, false);
    gameResult = gettingRoundWinner(computerChoice, humanChoice);
    settingNewScore(gameResult);
}

function getting_computer_choice() {
    let random_number = Math.random();
    if (random_number < 1/3) {
        return "rock";
    } else if (random_number > 2/3) {
        return "scissors";
    } else {return "paper";}
}

function gettingRockPaperScissorsResult(player_1_choice, player_2_choice) {
    let dict_choices = {"rock": 0, "paper": 1, "scissors": 2};
    let n_player_1_choice = dict_choices[player_1_choice];
    let n_player_2_choice = dict_choices[player_2_choice];
    let sum = n_player_1_choice + n_player_2_choice;
    switch (sum) {
        case 1: 
            message.textContent = "Paper beats Rock!";
            return "paper";
        case 2: 
            message.textContent = "Rock beats Scissors!";
            return "rock";
        case 3: 
            message.textContent = "Scissors beats Paper!";
            return "scissors"
    }
}

function gettingRoundWinner(computer_choice, human_choice) {
    console.log(`Computer picked ${computer_choice} \nHuman picked ${human_choice}`);
    if (computer_choice == human_choice) {
        message.textContent = "Draw!"
        return "draw";
    } else {
        let dict_choices = {[computer_choice]: "computer", [human_choice]: "human"};
        let game_result = gettingRockPaperScissorsResult(computer_choice, human_choice)
        return dict_choices[game_result]}
}

function settingNewScore(gameResult) {
    if (gameResult == "human") {
        message.classList.add('winner');
        humanScore.textContent = parseInt(humanScore.textContent)+1}
    else if (gameResult == "computer") {
        message.classList.add('loser')
        computerScore.textContent = parseInt(computerScore.textContent)+1
    }
}

// Reset

reset.addEventListener("click", resetingGame)

function resetingGame() {
    droppingPickSpaces();
    humanScore.textContent = 0;
    computerScore.textContent = 0;
    message.textContent = FirstMessage;
    resetingRoundScoreFormating();
}

function droppingPickSpaces() {
    if (scoreElement.children.length == 5) {
        scoreElement.removeChild(scoreElement.firstElementChild)
        scoreElement.removeChild(scoreElement.lastElementChild)
    }    
}

function resetingRoundScoreFormating(){
    message.classList.remove("winner");
    message.classList.remove("loser");
}

// Seleção do usuário - Estilo:

function willPick(event){
    event.target.style.borderColor = "rgb(54, 226, 54)"
}

function didntPick(event){
    event.target.style.borderColor = "";
}

function willReset(event) {
    event.target.style.color = "red"
}

function didntReset(event) {
    event.target.style.color = ""
}

reset.addEventListener("mouseover", willReset);
reset.addEventListener("mouseout", didntReset);
