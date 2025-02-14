function playing_game(n_times=5){
    human_points = computer_points = 0
    for (let i=0; i<n_times; i++) {
        console.log(`<><><> ${i+1}° round <><><>`)
        human_choice = prompt('Rock, Paper os Scissors, sir?').toLowerCase();
        computer_choice = getting_computer_choice();
        game_result = getting_result(computer_choice, human_choice);
        if (game_result == "human") {human_points++} else if (game_result == "computer") {computer_points++}
        console.log(`Computer ${computer_points} X ${human_points} Humans`)
    }
    getting_final_result(computer_points, human_points);
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
        game_result = rockPaperScissors(computer_choice, human_choice)
        return dict_choices[game_result]}
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

function getting_final_result(computer_points, human_points) {
    console.log("******* Final result: *******")
    if (human_points > computer_points) {
        console.log("Human win :D");
    } else if (computer_points > human_points) {
        console.log("Computer win :(");
    } else {
        console.log("Draw :/");
    }
}
