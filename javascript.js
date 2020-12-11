const cube = document.getElementById('cube');
const windowHeight = window.innerHeight;
const windowWidth = window.innerWidth;
const stepLength = 50;
debugger
var MarginLeft = 0;
var MarginTop = 0;
var objCube = {
    marginLeft: MarginLeft + "px",
    marginTop: MarginTop + "px"
}

function move(element, options) {
    element.style.marginLeft = options.marginLeft;
    element.style.marginTop = options.marginTop;
}

function logKey(event) {
    if (Math.abs(MarginLeft) >= windowWidth || Math.abs(MarginTop) >= windowHeight) {
        MarginLeft = 0;
        MarginTop = 0;
        return;
    }

    switch (event.code) {
        case 'ArrowLeft':
            MarginLeft -= stepLength;
            break;
        case 'ArrowUp':
            MarginTop -= stepLength;
            break;
        case 'ArrowRight':
            MarginLeft += stepLength;
            break;
        case 'ArrowDown':
            MarginTop += stepLength;
            break;
    }   
    objCube.marginTop = MarginTop + "px";
    objCube.marginLeft = MarginLeft + "px";
    move(cube,  objCube)
}

document.addEventListener('keydown', logKey)
