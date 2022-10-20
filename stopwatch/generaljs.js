// variables for control & display
const  playPauseBtn = document.querySelector('.play-btn')
const restartBtn = document.querySelector('.restart-btn')
let displayCount = document.querySelector('.count')

// initial timer count variables

let hours = 0;
let minutes = 0;
let seconds = 0;


// create a function for the timer

const timer = () => {
    // increment the seconds to start timer
    seconds++
    // variables & conditions for minutes and hours
    let perMinuteCalc = minutes/60
    let perSecondCalc = seconds/60

    if (perSecondCalc === 1){
        seconds = 0
        minutes++
    }else if (perMinuteCalc === 1){
        minutes = 0
        hours++
    }


    // variables and conditions for when count < 10
    let Hours = 0;
    let Minutes = 0;
    let Seconds = 0;

    
    hours < 10 ? Hours = '0' + hours : Hours = hours
   
    minutes < 10 ?  Minutes = '0' + minutes :  Minutes = minutes
    
    seconds < 10 ? Seconds = '0' + seconds : Seconds = seconds
    displayCount.innerText = Hours + ':' + Minutes + ':' + Seconds

}
