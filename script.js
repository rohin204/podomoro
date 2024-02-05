const time_el = document.querySelector('.watch .time')
const start_btn = document.querySelector('#start');
const stop_btn = document.querySelector('#stop');
const reset_btn = document.querySelector('#reset');




let seconds = 0;
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

function timer () {
    if(!seconds) { return; } 
    seconds--
    
    let hrs = Math.floor(seconds / 3600)
    let mins = Math.floor((seconds - (hrs * 3600)) / 60)
    let secs = seconds % 60
    
    time_el.innerText = `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    if(!seconds) { alert(`time's up!`)}
} 
start_btn.addEventListener('click', () => {
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
    seconds = 0; // Reset the seconds
    time_el.innerText = "00:00:00"; // Reset the display
    console.log("reset")
    
});



