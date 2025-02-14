function playing_game(n_times=5){
    h = c = 0
    for (let i=0; i<n_times; i++) {
        console.log(`<><><> ${i+1}° round <><><>`)
        human_choice = prompt('Rock, Paper os Scissors, sir?').toLowerCase();
        computer_choice = getting_computer_choice();
        game_result = getting_result(computer_choice, human_choice);
        if (game_result == "human") {h++} else if (game_result == "computer") {c++}
        console.log(`Computer ${c} X ${h} Humans`)
    }
    console.log("******* Final result: *******")
    if (h > c) {
        console.log("Human win :D")
    } else if (c > h) {
        console.log("Computer win :(")
    } else {
        console.log("Draw :/")
    }
}

function getting_computer_choice() {
    let random_number = Math.random();
    if (random_number < 1/3) {
        return "rock"
    } else if (random_number > 2/3) {
        return "scissors"
    } else {return "paper"}
}

// Rock? Paper? Scissors? Or draw?
function getting_result(computer_choice, human_choice) {
    console.log(`Computer picked ${computer_choice} \nHuman picked ${human_choice}`);
    if (computer_choice == human_choice) {
        return "draw";
    } else {
        let dict_choices = {[computer_choice]: "computer", [human_choice]: "human"};
        return getting_winner(rockPaperScissors(computer_choice, human_choice), dict_choices)}
}

// human (win), draw or computer (defeat)?
function getting_winner(game_result, dict_choices) {
    switch (dict_choices[game_result]) {
        case "computer": 
            console.log("COMPUTER running the world!");
            break;
        case ("human"): 
            console.log("HUMANS are the  best!");
            break;
    }
    return dict_choices[game_result]
}

// Rock Paper Scissors Logic: given two diferent choices, who wins?
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
