// ім'я гравця
let userName = prompt("Введіть ім'я:", "User");
userName = userName.trim();
if(!userName) 
    userName ="User";
document.getElementById("user").textContent = userName;

let userScore = 0;
let computerScore = 0;

let playGame = document.getElementById("generateButton");

// генерувати число
playGame.addEventListener("click", () => {
    let userNumber = Math.floor(Math.random() * 10 + 1);
    let computerNumber = Math.floor(Math.random() * 10 + 1);
    document.getElementById("userNumber").textContent = `Number: ${userNumber}`;
    document.getElementById("computerNumber").textContent = `Number: ${computerNumber}`;
    score(userNumber, computerNumber);
});

// рахунок
function score(userNumber, computerNumber) {
    if (userNumber > computerNumber) {
        userScore++;
        document.getElementById("userScore").textContent = `Score: ${userScore}`;
    }
    if (userNumber < computerNumber) {
        computerScore++;
        document.getElementById("computerScore").textContent = `Score: ${computerScore}`;
    }
    if (userScore == 3 || computerScore == 3) {
        setTimeout(function(){
            alert(`${userScore == 3 ? userName : "Computer"} won`);
            resetGame();
        }, 30)
    }
}

// скинути гру
function resetGame() {
    userScore = 0;
    computerScore = 0;
    document.getElementById("userNumber").textContent = "Number: 0";
    document.getElementById("computerNumber").textContent = "Number: 0";
    document.getElementById("userScore").textContent = `Score: ${userScore}`;
    document.getElementById("computerScore").textContent = `Score: ${computerScore}`;
    alert("Try again!");
}
