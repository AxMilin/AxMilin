document.addEventListener('DOMContentLoaded', () => {
    const cursors = document.querySelectorAll('.cursor');
    const delay = 0.1; // Adjust this value to control the smoothness and delay

    const positions = Array.from({ length: cursors.length }, () => ({
        mouseX: 0,
        mouseY: 0,
        cursorX: 0,
        cursorY: 0
    }));

    document.addEventListener('mousemove', (e) => {
        positions[0].mouseX = e.clientX;
        positions[0].mouseY = e.clientY;
    });

    function animate() {
        for (let i = 0; i < cursors.length; i++) {
            const { mouseX, mouseY, cursorX, cursorY } = positions[i];
            const nextPosition = i === 0 ? positions[i] : positions[i - 1];

            positions[i].cursorX += (nextPosition.mouseX - cursorX) * delay;
            positions[i].cursorY += (nextPosition.mouseY - cursorY) * delay;

            cursors[i].style.left = `${positions[i].cursorX}px`;
            cursors[i].style.top = `${positions[i].cursorY}px`;
        }

        requestAnimationFrame(animate);
    }

    animate();
});
