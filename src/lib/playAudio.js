const playAudio = (src) => {
    let audio = new Audio(src);
    audio.play();
}

export default playAudio;