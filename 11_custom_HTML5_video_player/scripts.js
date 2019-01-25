/* Get Our Elements */
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const fullScreen = player.querySelector('.player__fullscreen');
const sikpButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

/* Build out functions */
function togglePlay() {
    const method = this.paused ? 'play' : 'pause';
    video[method]();
}

function updateButton() {
    // this.paused ? console.log('toggle to Play button') : console.log('toggle to
    // Pause button')
    const icon = this.paused ? '►' : '❚ ❚';
    toggle.textContent = icon;
}

function skip() {
    // console.log(this.dataset.skip);
    video.currentTime += parseFloat(this.dataset.skip);
}

function handleRangeUpdate() {
    // video['play'], video['pause'], video['volume'], video['playbackRate'] ...etc
    video[this.name] = this.value;
    // console.log(this.value); console.log(this.name);
}

function handleProgress() {
    const percent = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = `${percent}%`;
}

function scrub(e) {
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
    // console.log(e)
    video.currentTime = scrubTime;
    video.play();
}

function toggleFullScreen() {

    if (!document.fullscreenElement && !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) {
        if (video.requestFullscreen) {
            video.requestFullscreen();
        } else if (video.mozRequestFullScreen) {/* Firefox */
            video.mozRequestFullScreen();
        } else if (video.webkitRequestFullscreen) {/* Chrome, Safari & Opera */
            video.webkitRequestFullscreen();
        } else if (video.msRequestFullscreen) {/* IE/Edge */
            video.msRequestFullscreen();
        }


    } else {

        if (video.exitFullscreen) {
            video.exitFullscreen();
        } else if (video.msExitFullscreen) {
            video.msExitFullscreen();
        } else if (video.mozCancelFullScreen) {
            video.mozCancelFullScreen();
        } else if (video.webkitExitFullscreen) {
            video.webkitExitFullscreen();
        }
    }

}

function handleKeydown(e) {
    // console.log(e.keyCode);
    playing = !video.paused;
    
    e.keyCode === 32 && video.paused ? video.play() : video.pause();

    if (e.keyCode === 70) {
        toggleFullScreen(); 
        playing ? video.play() : video.pause();
    }
}
/* Hook up the event listeners */
video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgress); // Immediately updating the video timer and running handleProgress for the progress bar

toggle.addEventListener('click', togglePlay);
sikpButtons.forEach(button => button.addEventListener('click', skip));
ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));
ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate));

let mousedown = false;
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
progress.addEventListener('mousedown', () => mousedown = !mousedown);
progress.addEventListener('mouseup', () => mousedown = mousedown);

fullScreen.addEventListener('click', toggleFullScreen);

let playing;
window.addEventListener('keydown', handleKeydown)