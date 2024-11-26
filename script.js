const bars = [
    document.getElementById('bar1'),
    document.getElementById('bar2'),
    document.getElementById('bar3'),
    document.getElementById('bar4'),
    document.getElementById('bar5')
];

let animationInterval;

function startAnimation() {
    if (animationInterval) return;

    animationInterval = setInterval(() => {
        bars.forEach(bar => {
            const newHeight = Math.random() * 100;
            bar.style.height = `${newHeight}%`;
        });
    }, 200);
}

function stopAnimation() {
    clearInterval(animationInterval);
    animationInterval = null;
}

function resetAnimation() {
    stopAnimation();
    bars.forEach(bar => {
        bar.style.height = '100%';
    });
}

document.getElementById('startButton').addEventListener('click', startAnimation);
document.getElementById('stopButton').addEventListener('click', stopAnimation);
document.getElementById('resetButton').addEventListener('click', resetAnimation);
