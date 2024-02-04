// script.js

const drumSounds = {
    kick: new Audio('sounds/kick.wav'),
    snare: new Audio('sounds/snare.wav'),
    // Add more drum sounds as needed
};

document.querySelectorAll('.drum').forEach(drum => {
    drum.addEventListener('click', () => playSound(drum.id));
});

document.addEventListener('keydown', event => {
    const key = event.key.toLowerCase();
    if (key in drumSounds) {
        playSound(key);
    }
});

function playSound(sound) {
    if (drumSounds[sound]) {
        drumSounds[sound].currentTime = 0;
        drumSounds[sound].play();
    }
}
