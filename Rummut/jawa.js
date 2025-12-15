function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
}

funtion playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keycode}"]`);
    const key = document.querySelector(`div[data-key="${e.keycode}"]`);
    if (!audio) return;

    key classList.add('playing');
    audio.currentTime = 0;
    audio.play();
}

const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);

