const cube = document.getElementById('cube');
const windowHeight = window.innerHeight;
const windowWidth = window.innerWidth;
const stepLength = 50;

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
        objCube.marginLeft = 0;
        objCube.marginTop = 0;
        move(cube, objCube)
        return;
    }

    switch (event.code) {
        case 'ArrowLeft':
            MarginLeft -= stepLength;
            objCube.marginLeft = MarginLeft + "px";
            move(cube,  objCube)
            break;
        case 'ArrowUp':
            MarginTop -= stepLength;
            objCube.marginTop = MarginTop + "px";
            move(cube, objCube)
            break;
        case 'ArrowRight':
            MarginLeft += stepLength;
            objCube.marginLeft = MarginLeft + "px";
            move(cube, objCube)
            break;
        case 'ArrowDown':
            MarginTop += stepLength;
            objCube.marginTop = MarginTop + "px";
            move(cube, objCube)
            break;
    }
}

document.addEventListener('keydown', logKey)
