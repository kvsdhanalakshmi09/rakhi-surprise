function openSurprise() {

    document.getElementById("welcomeScreen").style.display = "none";

    document.getElementById("surprise").style.display = "block";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


function showMessage() {

    const message =
        document.getElementById("message");

    message.style.display = "block";

    message.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}


function openNextSurprise() {

    const secretGame =
        document.getElementById("secretGame");

    secretGame.style.display = "block";

    secretGame.scrollIntoView({
        behavior: "smooth"
    });
}


function notYet() {

    document.getElementById("notYetMessage").innerText =
        "Okay Nana 😌 Take your time... but I know you'll open it! ❤️";
}


function correctAnswer() {

    document.getElementById("gameResult").innerText =
        "🔓 UNLOCKED! I knew you would get it, Nana! ❤️";

    setTimeout(function() {

        const levelTwo =
            document.getElementById("levelTwo");

        levelTwo.style.display = "block";

        levelTwo.scrollIntoView({
            behavior: "smooth"
        });

    }, 1000);
}


function wrongAnswer() {

    document.getElementById("gameResult").innerText =
        "😂 Wrong answer! Try again, Nana!";
}


function levelTwoCorrect() {

    document.getElementById("levelTwoResult").innerText =
        "💖 Exactly! Because no matter what happens, I'll always be there for you, Nana.";

    setTimeout(function() {

        const levelThree =
            document.getElementById("levelThree");

        levelThree.style.display = "block";

        levelThree.scrollIntoView({
            behavior: "smooth"
        });

    }, 1000);
}


function levelTwoWrong() {

    document.getElementById("levelTwoResult").innerText =
        "😂 Nope! Think about our bond and try again, Nana!";
}


/* =====================================
   TREASURE STATUS
   ===================================== */

let memoryUnlocked = false;
let wordsUnlocked = false;


/* =====================================
   MEMORY TREASURE
   ===================================== */

function checkMemoryAnswer(answer) {

    if (answer === "fights") {

        memoryUnlocked = true;

        document.getElementById("memoryResult").innerText =
            "🎉 Correct! You know us too well! 😂❤️";

        document.getElementById("memoryReveal").style.display =
            "block";

        document.getElementById("memoryCard")
            .classList.add("unlocked");

        checkTreasures();

    } else {

        document.getElementById("memoryResult").innerText =
            "😂 Nope! Think about us again... Try!";

    }
}


/* =====================================
   WORDS TREASURE
   ===================================== */

function checkWordsAnswer(answer) {

    if (answer === "best") {

        wordsUnlocked = true;

        document.getElementById("wordsResult").innerText =
            "🎉 Correct! You got it! ❤️";

        document.getElementById("wordsReveal").style.display =
            "block";

        document.getElementById("wordsCard")
            .classList.add("unlocked");

        checkTreasures();

    } else {

        document.getElementById("wordsResult").innerText =
            "😂 Wrong! Think about our bond again...";

    }
}


/* =====================================
   CHECK BOTH TREASURES
   ===================================== */

function checkTreasures() {

    const memoryCard =
        document.getElementById("memoryCard");

    const wordsCard =
        document.getElementById("wordsCard");

    const finalButton =
        document.getElementById("finalButton");

    const finalHint =
        document.getElementById("finalHint");

    const finalCard =
        document.getElementById("finalCard");


    if (
        memoryCard.classList.contains("unlocked") &&
        wordsCard.classList.contains("unlocked")
    ) {

        finalHint.innerHTML =
            "✨ All treasures unlocked!<br>" +
            "Your final gift is waiting... ❤️";

        finalButton.disabled = false;

        finalButton.innerHTML =
            "🎁 Open Final Gift";

        finalCard.classList.add("ready");
    }
}


/* =====================================
   FINAL GIFT
   ===================================== */

function unlockFinal() {

    const finalSurprise =
        document.getElementById("finalSurprise");

    finalSurprise.style.display = "block";

    finalSurprise.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

    createConfetti();
}


/* =====================================
   CONFETTI
   ===================================== */

function createConfetti() {

    for (let i = 0; i < 60; i++) {

        const confetti =
            document.createElement("div");

        confetti.innerHTML = "🎉";

        confetti.style.position = "fixed";

        confetti.style.left =
            Math.random() * 100 + "vw";

        confetti.style.top = "-20px";

        confetti.style.fontSize = "20px";

        confetti.style.zIndex = "9999";

        confetti.style.pointerEvents = "none";


        document.body.appendChild(confetti);


        const duration =
            2000 + Math.random() * 3000;


        confetti.animate(

            [
                {
                    transform:
                        "translateY(0) rotate(0deg)"
                },

                {
                    transform:
                        "translateY(110vh) rotate(360deg)"
                }
            ],

            {
                duration: duration,
                easing: "linear"
            }

        );


        setTimeout(function() {

            confetti.remove();

        }, duration);

    }
}
