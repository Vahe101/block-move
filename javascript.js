const windowHeight = window.innerHeight;
const windowWidth = window.innerWidth;
const stepLength = 50;

var MarginLeft = 0;
var MarginTop = 0;

function move(margin, sign, style) {
    if (sign === '+')
        margin += stepLength;
    else if (sign === '-')
        margin -= stepLength;
    margin += "px";
    document.getElementById('cube').style[style] = margin;
    margin = parseInt(margin);
    return margin;
}

function logKey(event) {
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
document.addEventListener('keydown', logKey)
