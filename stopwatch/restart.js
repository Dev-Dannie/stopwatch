restartBtn.addEventListener('click', () => {
    window.clearInterval(timeInterval)
    // set timer variables back to default
    seconds = 0;
    minutes = 0;
    hours = 0;
    displayCount.innerText = '00:00:00'
    playPauseBtn.innerHTML =  `<i class="fa-solid fa-play" id="play"></i>`
})

