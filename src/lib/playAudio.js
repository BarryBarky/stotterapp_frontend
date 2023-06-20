let audio = new Audio();

export const playAudio = (src) => {
    audio.src = src
    audio.play();
}

export const stopAudio = () => {
    audio.pause();
    audio.currentTime = 0;
}