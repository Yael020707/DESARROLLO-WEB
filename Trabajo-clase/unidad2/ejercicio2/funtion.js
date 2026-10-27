const themeToggleBtn = document.getElementById('btnToggleTheme');
const changeColorsBtn = document.getElementById('btnChangeColors');
const colorBoxes = document.querySelectorAll('.box');

themeToggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

const colorPalettes = [
    ['#ef4444', '#e11d48', '#f97316', '#3b82f6', '#78350f', '#22c55e', '#eab308'],
    ['#ff0055', '#ff00aa', '#ff5500', '#0099ff', '#884400', '#00cc66', '#ffee00'],
    ['#f43f5e', '#d946ef', '#fb923c', '#38bdf8', '#a16207', '#4ade80', '#fde047'],
    ['#ea580c', '#c084fc', '#eab308', '#0284c7', '#713f12', '#15803d', '#facc15']
];

let currentPaletteIndex = 0;

changeColorsBtn.addEventListener('click', () => {
    currentPaletteIndex = (currentPaletteIndex + 1) % colorPalettes.length;
    const selectedPalette = colorPalettes[currentPaletteIndex];

    colorBoxes.forEach((box, index) => {
        if (selectedPalette[index]) {
            box.style.backgroundColor = selectedPalette[index];
        }
    });
});