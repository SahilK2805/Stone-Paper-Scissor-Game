let userScore = 0;
let compScore = 0;

let choices = document.querySelectorAll(".choice");

let msg = document.querySelector("#msg");
let msg1 = document.querySelector("#user-score");
let msg2 = document.querySelector("#comp-score");

let gemCompChoice = () => {
    let options = ["Stone", "Paper", "Scissor"];
    let randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
}
let drawGame = () => {
    console.log("Game was Draw");
}
let playGame = (userChoice) =>{
    let compChoice = gemCompChoice();
    console.log("Comp selected",compChoice);


    if (userChoice === compChoice){
        drawGame();
        msg.innerText = "game was Draw"
        msg.style.backgroundColor = "#081b31";
    }
    else if (
        (userChoice === "Stone" && compChoice === "Scissor") || (userChoice === "Paper" && compChoice === "Stone") || (userChoice === "Scissor" && compChoice==="Paper")
    ){
        console.log("You win!");
        userScore++;
        msg1.innerText = userScore
        msg.innerText = "You Win!"
        msg.style.backgroundColor = "Green";
    }
    else {
        console.log("You loose");
        compScore++;
        msg2.innerText = compScore;
        msg.innerText = "You Loose!"
        msg.style.backgroundColor = "red";
    }


    }

    


choices.forEach((choice) => {
    choice.addEventListener("click", () => { 
        let userChoice = choice.getAttribute("id");
        console.log("You selected", userChoice);
        playGame(userChoice);
    });
});
