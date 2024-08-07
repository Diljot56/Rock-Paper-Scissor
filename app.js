let userScore = 0;
let compScore = 0;

const msg=document.querySelector("#msg1");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const choices = document.querySelectorAll(".choice");

choices.forEach((choice) => {
    choice.addEventListener("click" , () =>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});

const comp_Choice = () => {
    let option =["rock" , "paper" , "scissor"];
    let idx =Math.floor(Math.random() *3);
    return option[idx];
}

const DrawGame = () => {
    msg.innerText="Its a Draw ,Play Again";
    msg.style.backgroundColor= "grey";
}

const showWinner = (userWin) => {
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        msg.innerText="You Win!";
        msg.style.backgroundColor="Green";
    }else{
        compScore++;
        compScorePara.innerText=compScore;
        msg.innerText="You lose";
        msg.style.backgroundColor="Red";
    }
}

const playGame = (userChoice) => {
    let userWin="true";
    const compChoice =comp_Choice();
    if( userChoice===compChoice){
        DrawGame();
    }else if( userChoice==="rock"){
        userWin = compChoice==="paper"?false : true;
    }else if( userChoice==="paper"){
        userWin  = compChoice==="rock"?true : false;
    }else if(userChoice==="scissor"){
        userWin = compChoice==="rock"?false : true;
    }
    if(userChoice!==compChoice){
        showWinner(userWin);
    }
}