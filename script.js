const userOptions = document.querySelectorAll(".options");
const gamePlay = document.querySelector(".game-play");
const gameContainer = document.querySelector(".game-inner-container");


userOptions.forEach((option) => {
    option.addEventListener("click", () => {
        //    console.log(option.id) 
        gamePlay.innerHTML = "";
        gamePlay.classList.remove("step-1");


        let options = ["rock", "paper", "scissors"];
        const randomComputerValue = Math.floor(Math.random() * options.length);

        let user = option.id;
        let computer = options[randomComputerValue];


        const optionsValue = `
        <div class="select-container">
            <div class="user-select">
                <h3>You Picked</h3>
                <div class="user-select-outer-circle" id="${user}">
                    <div class="circle">
                        <img src="icon-${user}.svg" alt="Scissors Icon" loading="lazy">
                    </div>
                </div>
            </div>
            <div class="computer-select">
                <h3>Computer Picked</h3>
                <div class="user-select-outer-circle" id="${computer}">
                    <div class="circle">
                        <img src="icon-${computer}.svg" alt="Rock Icon" loading="lazy">
                    </div>
                </div>
            </div>
        </div> 
  `
        gameContainer.insertAdjacentHTML("beforeend", optionsValue)


        whoWinCheck(user, computer);

    });
});


const scoreElement = document.getElementById('score');

let score = localStorage.getItem("Score");
if (score === null) {
    score = 0;
} else {
    score = parseInt(score);
}
let scoreNumber = score;
scoreElement.innerText = scoreNumber;

function whoWinCheck(user, computer) {
    let resultHeading;
    let winORLose;

    // Determine the result of the game
    if (user === "rock" && computer === "rock") {
        resultHeading = "Match Draw";
    } else if (user === "rock" && computer === "paper") {
        resultHeading = "You Lose";
        winORLose = "lose";
        if (scoreNumber > 0) scoreNumber--; 
    } else if (user === "rock" && computer === "scissors") {
        resultHeading = "You Win";
        winORLose = "win";
        scoreNumber++;
    } else if (user === "paper" && computer === "rock") {
        resultHeading = "You Win";
        winORLose = "win";
        scoreNumber++;
    } else if (user === "paper" && computer === "paper") {
        resultHeading = "Match Draw";
    } else if (user === "paper" && computer === "scissors") {
        resultHeading = "You Lose";
        winORLose = "lose";
        if (scoreNumber > 0) scoreNumber--; 
    } else if (user === "scissors" && computer === "rock") {
        resultHeading = "You Lose";
        winORLose = "lose";
        if (scoreNumber > 0) scoreNumber--; 
    } else if (user === "scissors" && computer === "paper") {
        resultHeading = "You Win";
        winORLose = "win";
        scoreNumber++;
    } else if (user === "scissors" && computer === "scissors") {
        resultHeading = "Match Draw";
    }

    // Create and insert the result content
    const resultContent = `
       <div class="result ${winORLose}">
           <h1>${resultHeading}</h1>
           <div class="play-again-container">
               <button id="play-again">Play Again</button>
           </div>
       </div>
    `;
    const computerSelect = document.querySelector(".computer-select");
    computerSelect.insertAdjacentHTML("beforebegin", resultContent);

    // Add event listener to the play again button
    const playAgainButton = document.getElementById('play-again');
    playAgainButton.addEventListener("click", () => {
        location.reload();
    });

    // Update and display the score
    scoreElement.innerText = scoreNumber;
    localStorage.setItem("Score", scoreNumber);
}


const rulesButton = document.getElementById("rules");
const rulesContainer = document.querySelector(".rules-container");
rulesButton.addEventListener("click", () => {
   const rulesContent = `
           <div class="rules">
            <div class="rules-header">
                <h2>RULES</h2>
                <div class="close-icon">
                    <img src="icon-close.svg" alt="Close Icon" loading="lazy">
                </div>
            </div>
            <div class="rules-image">
                <img src="image-rules.svg" alt="Rules Image" loading="lazy">
            </div>
        </div>
   `
   rulesContainer.insertAdjacentHTML("afterend", rulesContent);

   const closeIcon = document.querySelector(".close-icon");
   closeIcon.addEventListener("click", () => {
     location.reload();
   });

});

