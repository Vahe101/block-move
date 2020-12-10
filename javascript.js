const windowHeight = window.innerHeight;
const windowWidth = window.innerWidth;
const stepLength = 50;

var MarginLeft = 0;
var MarginTop = 0;
var cube = document.getElementById('cube');

function logKey(event) {
    if (Math.abs(MarginLeft) >= windowWidth || Math.abs(MarginTop) >= windowHeight) {
        MarginLeft = 0;
        MarginTop = 0;
        cube.style.margin = 0;
        return;
    }
    switch (event.code) {
        case 'ArrowLeft':
            MarginLeft -= stepLength;
            cube.style.marginLeft = MarginLeft + "px";
            break;
        case 'ArrowUp':
            MarginTop -= stepLength;
            cube.style.marginTop = MarginTop + "px";
            break;
        case 'ArrowRight':
            MarginLeft += stepLength;
            cube.style.marginLeft = MarginLeft + "px";
            break;
        case 'ArrowDown':
            MarginTop += stepLength;
            cube.style.marginTop = MarginTop + "px";
            break;
    }
}
document.addEventListener('keydown', logKey)