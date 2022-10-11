let timeInterval = '';
let timeCondition = false;

playPauseBtn.addEventListener('click', () => {
    if (!timeCondition){
        timeInterval = window.setInterval(timer, 1000);
        playPauseBtn.innerHTML = `<i class="fa-solid fa-pause" id="pause-btn"></i>`
        timeCondition = true;
    }else{
        window.clearInterval(timeInterval)
        timeCondition = false;
        playPauseBtn.innerHTML =  `<i class="fa-solid fa-play" id="play"></i>`
    }
})