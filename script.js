let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll(".choice");
const massage = document.querySelector("#msg");
const massageDisplay = document.querySelector(".msg-cont");
const userScoreDisplay = document.querySelector("#user-score");
const compScoreDisplay = document.querySelector("#comp-score");

massageDisplay.classList.remove("loosing");
massageDisplay.classList.remove("winning");


const generateChoice = () =>{
    const options = ["rock","paper","scissors"];
    const randChoice = Math.floor(Math.random()*3);
    return options[randChoice];
}

const drawCondition = (userChoice) =>{
    massage.innerHTML = `comp also chose ${userChoice}! It's a DRAW!!`;
    massageDisplay.classList.remove("winning");
    massageDisplay.classList.remove("loosing");
    
}

const winCondition = (compChoice) =>{
    massage.innerHTML = `comp chose ${compChoice}! You WON!!`;
    massageDisplay.classList.remove("loosing");
    massageDisplay.classList.add("winning");
    userScore++;
    userScoreDisplay.innerHTML = userScore.toString();

}

const looseCondition = (compChoice) =>{
    massage.innerHTML = `comp chose ${compChoice}! You LOST!!`;
    massageDisplay.classList.remove("winning");
    massageDisplay.classList.add("loosing");
    compScore++;
    compScoreDisplay.innerHTML = compScore.toString();


}
const playGame = (userChoice) =>{
    const compChoice = generateChoice(); 

    if(userChoice === compChoice){
        drawCondition(userChoice);
    }
    else if(userChoice === "rock" && compChoice === "scissors" || userChoice === "paper" && compChoice === "rock" || userChoice === "scissors" && compChoice === "paper"){
        winCondition(compChoice);
    }
    else if(userChoice === "rock" && compChoice === "paper" || userChoice === "paper" && compChoice === "scissors" || userChoice === "scissors" && compChoice === "rock"){
        looseCondition(compChoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click",() =>{
        const userChoice = choice.getAttribute("id");
        playGame (userChoice);
    });
});

