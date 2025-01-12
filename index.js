// Get the canvas element and its 2D context
const canvas = document.querySelector('.runner-canvas');
const ctx = canvas.getContext('2d', {
    willReadFrequently: true
});

const simulateSpaceKeyPress = () => document.dispatchEvent(new KeyboardEvent('keydown',{
    key: ' ',
    code: 'Space',
    keyCode: 32,
    which: 32,
    bubbles: true,
    cancelable: true
}));

const getPixelsAtX = (canvas, x) => {
    const {data} = ctx.getImageData(x, 90, 1, 40);
    return Array.from({
        // Pixel Color Collision count
        length: 40
    }, (_, y) => data[y * 4] === 83);
}
;

const runRexMode = () => {
    // If more than 10 pixels at the specified x coordinate have a red component of 83
    if (getPixelsAtX(canvas, 120).filter(Boolean).length > 2)
        simulateSpaceKeyPress();

    requestAnimationFrame(runRexMode);
}
runRexMode();
