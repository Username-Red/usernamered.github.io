const button = document.querySelector(".lilbutton");
const max = 90;
const min = 30;
let seconds = Math.floor((Math.random() * max) + min);
let intervalId; // Variable to store the interval ID
var pokeballSound = new Audio("assets\\pokeball-sound.mp3");
var pikachu = new Audio("assets\\pikachuu.mp3");
var yell = new Audio("assets\\it-pikachu.mp3");

button.addEventListener("click", function() {
    intervalId = setInterval(updateTimer, 1000); // Start the timer and store the interval ID
});

function updateTimer() {
    // Increment the seconds
    seconds--;

    // Update the timer display with the new value
    // timerElement.textContent = seconds;

    if (seconds <= 0) {
        clearInterval(intervalId); // Clear the interval
        //alert("time up");
        
        pokeballSound.play();
        button.classList.toggle("lilbutton-on");
        setTimeout(function() {
            // Execute the next step after the pause
            button.classList.toggle("lilbutton-on");
            console.log("Step 2");
            pikachu.play();
        }, 4000); // 2000 milliseconds = 2 seconds
        
        return;
    }

    setTimeout(function() {
        // Execute the next step after the pause
        button.classList.toggle("lilbutton-on");
    }, 1000);



    // if (button.className == "lilbutton-on") {
    //     button.classList.toggle("lilbutton-on");
    // }
}
