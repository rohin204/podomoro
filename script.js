const time_el = document.querySelector('.watch .time')
const start_btn = document.querySelector('#start');
const stop_btn = document.querySelector('#stop');
const reset_btn = document.querySelector('#reset');
let mySound = new Audio('alarm_01.mp3')

function toSeconds() {

    const hour = parseInt(document.querySelector('#hrs').value) || 0;
    const min = parseInt(document.querySelector('#mins').value) || 0;
    const sec = parseInt(document.querySelector('#secs').value) || 0;
    
    let seconds = hour * 3600 + min * 60 + sec;
    console.log("seconds:", seconds);

    return seconds
}


let interval = null;
let currentInterval = null;


//need to work on these inputs..
function addSess() {
    seconds = 3600;
    time_el.innerText = "01:00:00"
}
function addBreak() {
    seconds = 600
    time_el.innerText = "00:10:00"
}

let seconds;
function timer () {

    if(seconds) {
        
            seconds--
            
            let hrs = Math.floor(seconds / 3600)
            let mins = Math.floor((seconds - (hrs * 3600)) / 60)
            let secs = seconds % 60
            
            time_el.innerText = `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;

    }
    else { 
        mySound.play();
        alert(`time's up!, type reset to end`);
        clearInterval(currentInterval)
        
    }
} 
start_btn.addEventListener('click', () => {
    
    seconds = toSeconds()
    
    if(currentInterval) {
        clearInterval(currentInterval)
    }
    if(seconds) {
        currentInterval = setInterval(timer, 1000); // Start the timer
        console.log("timer-start")
        // start_btn.style.display = 'none';
    }
    else {
        alert('Set the time idiot.'); 
    }
});
        



stop_btn.addEventListener('click', () => {
    clearInterval(currentInterval); // Stop the timer
    console.log("stop")
});

reset_btn.addEventListener('click', () => {
    clearInterval(currentInterval); // Stop any existing timer
    seconds = 0; // Reset the seconds
    // time_el.innerText = "00:00:00"; // Update displayed time

    location.reload(true);
  
    console.log("reset");
    
});



