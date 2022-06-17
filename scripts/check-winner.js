export function checkWinner(player, computer){
    switch (true) {
        case player == computer:
            return "DRAW!"
        case computer == "ROCK":
            return  (player == "PAPER") ? "YOU WIN!" : "YOU LOSE!"
        case computer == "PAPER":
            return  (player == "SCISSORS") ? "YOU WIN!" : "YOU LOSE!"
        case computer == "SCISSORS":
            return  (player == "ROCK") ? "YOU WIN!" : "YOU LOSE!"
        default:
            break;
    }
}