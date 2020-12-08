const windowHeight = window.innerHeight;
const windowWidth = window.innerWidth;
const strideLength = 50;

var MarginLeft = 0;
var MarginTop = 0;

function move(direction, sign, style) {
    if (sign === '+')
        direction += strideLength;
    else if (sign === '-')
        direction -= strideLength;
    direction += "px";
    document.getElementById('cube').style[style] = direction;
    direction = parseInt(direction);
    return direction;
}

function logkey(event) {
    if (Math.abs(MarginLeft) >= windowWidth || Math.abs(MarginTop) >= windowHeight) {
        MarginLeft = 0;
        MarginTop = 0;
        document.getElementById('cube').style.margin = 0;
        return;
    }
    switch (event.code) {
        case 'ArrowLeft':
            MarginLeft = move(MarginLeft, '-', 'marginLeft');
            break;
        case 'ArrowUp':
            MarginTop = move(MarginTop, '-', 'marginTop');
            break;
        case 'ArrowRight':
            MarginLeft = move(MarginLeft, '+', 'marginLeft');
            break;
        case 'ArrowDown':
            MarginTop = move(MarginTop, '+', 'marginTop');
            break;
    }
}
document.addEventListener('keydown', logkey)