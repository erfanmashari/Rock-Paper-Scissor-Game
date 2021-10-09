// variables
const rockBtn = document.querySelector("#r")
const paperBtn = document.querySelector("#p")
const scissorsBtn = document.querySelector("#s")


// listeners
listeners()

function listeners() {
    // add click event to r&p&s
    rockBtn.addEventListener("click", getValues)
    paperBtn.addEventListener("click", getValues)
    scissorsBtn.addEventListener("click", getValues)
}


// functions
// foind out the user choice
function getValues(e) {
    e.preventDefault()

    const result = document.querySelector(".result p")

    // get the div childs
    const rock = rockBtn.firstElementChild.id
    const paper = paperBtn.firstElementChild.id
    const scissors = scissorsBtn.firstElementChild.id

    // user and computer score
    const computerScore = document.querySelector("#comp-score")
    const userScore = document.querySelector("#user-score")

    // user and computer score number
    let computerScoreNum = Number(document.querySelector("#comp-score").textContent)
    let userScoreNum = Number(document.querySelector("#user-score").textContent)

    // put cilds in array
    const choices = [rock, paper, scissors]

    // make it random choice
    const computerChoices = Math.floor(Math.random() * choices.length)

    const userChoices = e.target.id

    if (userChoices === choices[computerChoices]) {
        switch (userChoices) {
            case "0":
                result.innerHTML = "کامپیوتر و شما سنگ را انتخاب کردید,برابر شدید!"

                rockBtn.classList.add("gray");
                setTimeout(() => {
                    rockBtn.classList.remove("gray");
                }, 500);
                break;
            case "1":
                result.innerHTML = "کامپیوتر و شما کاغذ را انتخاب کردید,برابر شدید!"

                paperBtn.classList.add("gray");
                setTimeout(() => {
                    paperBtn.classList.remove("gray");
                }, 500);
                break;
            case "2":
                result.innerHTML = "کامپیوتر و شما قیچی را انتخاب کردید,برابر شدید!"

                scissorsBtn.classList.add("gray");
                setTimeout(() => {
                    scissorsBtn.classList.remove("gray");
                }, 500);
                break;
        }
    } else {
        if (userChoices === "0" && choices[computerChoices] === choices[1]) {
            result.innerHTML = "کامپیوتر کاغذ و شما سنگ را انتخاب کردید,کامپیوتر برنده شد!"

            computerScoreNum += 1
            computerScore.innerHTML = computerScoreNum

            rockBtn.classList.add("red");
            setTimeout(() => {
                rockBtn.classList.remove("red");
            }, 500);
        } else if (userChoices === "0" && choices[computerChoices] === choices[2]) {
            result.innerHTML = "کامپیوتر قیچی و شما سنگ را انتخاب کردید,شما برنده شدید!"

            userScoreNum += 1
            userScore.innerHTML = userScoreNum

            rockBtn.classList.add("green");
            setTimeout(() => {
                rockBtn.classList.remove("green");
            }, 500);
        } else if (userChoices === "1" && choices[computerChoices] === choices[0]) {
            result.innerHTML = "کامپیوتر سنگ و شما کاغذ را انتخاب کردید,شما برنده شدید!"

            userScoreNum += 1
            userScore.innerHTML = userScoreNum

            paperBtn.classList.add("green");
            setTimeout(() => {
                paperBtn.classList.remove("green");
            }, 500);
        } else if (userChoices === "1" && choices[computerChoices] === choices[2]) {
            result.innerHTML = "کامپیوتر قیچی و شما کاغذ را انتخاب کردید,کامپیوتر برنده شد!"

            computerScoreNum += 1
            computerScore.innerHTML = computerScoreNum

            paperBtn.classList.add("red");
            setTimeout(() => {
                paperBtn.classList.remove("red");
            }, 500);
        } else if (userChoices === "2" && choices[computerChoices] === choices[0]) {
            result.innerHTML = "کامپیوتر سنگ و شما قیچی را انتخاب کردید,کامپیوتر برنده شد!"

            computerScoreNum += 1
            computerScore.innerHTML = computerScoreNum

            scissorsBtn.classList.add("red");
            setTimeout(() => {
                scissorsBtn.classList.remove("red");
            }, 500);
        } else if (userChoices === "2" && choices[computerChoices] === choices[1]) {
            result.innerHTML = "کامپیوتر کاغذ و شما قیچی را انتخاب کردید,شما برنده شدید!"

            userScoreNum += 1
            userScore.innerHTML = userScoreNum

            scissorsBtn.classList.add("green");
            setTimeout(() => {
                scissorsBtn.classList.remove("green");
            }, 500);
        }
    }
}