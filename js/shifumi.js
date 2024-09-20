const buttons = document.querySelectorAll("button");
let result = "";

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', () => {
        const player = buttons[i].innerHTML
        const bot = buttons[Math.floor(Math.random() * buttons.length)].innerHTML

        if (player == bot) {
            result = "Draw"
        } else if (
            (player == "Rock" && bot == "Scissors") ||
            (player == "Scissors" && bot == "Paper") ||
            (player == "Paper" && bot == "Rock") 
        ) {
            result = "Win"
        } else {
            result = "Lose"
        }

        document.querySelector(".result").innerHTML = `player : ${player} </br>bot : ${bot} <br/>result : ${result}`
    })
}