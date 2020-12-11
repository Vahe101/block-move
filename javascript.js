const cube = document.getElementById('cube');
const windowHeight = window.innerHeight;
const windowWidth = window.innerWidth;
const stepLength = 50;

var MarginLeft = 0;
var MarginTop = 0;

function move(element, options) {
    element.style.marginLeft = options.marginLeft;
    element.style.marginTop = options.marginTop;
}

function logKey(event) {
    if (Math.abs(MarginLeft) >= windowWidth || Math.abs(MarginTop) >= windowHeight) {
        MarginLeft = 0;
        MarginTop = 0;
        move(cube, {
            marginLeft: MarginLeft + "px",
            marginTop: MarginTop + "px"
        })
        return;
    }

    switch (event.code) {
        case 'ArrowLeft':
            MarginLeft -= stepLength;
            move(cube, {
                marginLeft: MarginLeft + "px",
                marginTop: MarginTop + "px"
            })
            break;
        case 'ArrowUp':
            MarginTop -= stepLength;
            move(cube, {
                marginLeft: MarginLeft + "px",
                marginTop: MarginTop + "px"
            })
            break;
        case 'ArrowRight':
            MarginLeft += stepLength;
            move(cube, {
                marginLeft: MarginLeft + "px",
                marginTop: MarginTop + "px"
            })
            break;
        case 'ArrowDown':
            MarginTop += stepLength;
            move(cube, {
                marginLeft: MarginLeft + "px",
                marginTop: MarginTop + "px"
            })
            break;
    }
}

document.addEventListener('keydown', logKey)
