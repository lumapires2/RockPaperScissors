function computer_choice() {
    let random_number = Math.random();
    if (random_number < 1/3) {
        return "rock"
    } else if (random_number > 2/3) {
        return "scissors"
    } else {return "paper"}
}

function result(computer_choicee, human_choice) {
    console.log(`Computer picked ${computer_choicee} \nHuman picked ${human_choice}`);
    if (computer_choicee == human_choice) {
        return "draw";
    } else {
        let dict_choices = {[computer_choicee]: "computer", [human_choice]: "human"};
        return winner(rockPaperScissors(computer_choicee, human_choice), dict_choices)}
}

// Rock: 0; Paper: 1; Scissors: 2;
function rockPaperScissors(player_1_choice, player_2_choice) {
    let dict_choices = {"rock": 0, "paper": 1, "scissors": 2};
    n_player_1_choice = dict_choices[player_1_choice];
    n_player_2_choice = dict_choices[player_2_choice];
    sum = n_player_1_choice + n_player_2_choice;
    switch (sum) {
        case 1: 
            console.log("Paper beats Rock!!!");
            return "paper";
        case 2: 
            console.log("Rock beats Scissors!!!");
            return "rock";
        case 3: 
            console.log("Scissors beats Paper!!!");
            return "scissors"
    }
}

function winner(game_result, dict_choices) {
    switch (dict_choices[game_result]) {
        case "computer": 
            console.log("Computer running the world!");
            break;
        case ("human"): 
            console.log("It turns out that human will always be THE BEST!");
            break;
    }
    return dict_choices[game_result]
}

function playing_game(n_times=5){
    h = c = 0
    for (let i=0; i<n_times; i++) {
        console.log(`${i+1}° round`)
        human_choicee = prompt('Rock, Paper os Scissors, sir?').toLowerCase();
        computer_choicee = computer_choice();
        game_result = result(computer_choicee, human_choicee);
        if (game_result == "human") {h++} else if (game_result == "computer") {c++}
    }
    if (h > c) {
        console.log("Human win :D")
    } else if (c > h) {
        console.log("Computer win :(")
    } else {
        console.log("Draw :/")
    }
}