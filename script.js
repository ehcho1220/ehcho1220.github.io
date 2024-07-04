document.addEventListener("DOMContentLoaded", function() {
    const imageContainers = document.querySelectorAll('.image-container');
    const audioPlayer = document.getElementById('audio-player');

    imageContainers.forEach(container => {
        container.addEventListener('click', function() {
            const audioSrc = this.getAttribute('data-audio');
            if (audioPlayer.src !== audioSrc) {
                audioPlayer.src = audioSrc;
                audioPlayer.play();
            } else if (audioPlayer.paused) {
                audioPlayer.play();
            } else {
                audioPlayer.pause();
            }
        });
    });
});