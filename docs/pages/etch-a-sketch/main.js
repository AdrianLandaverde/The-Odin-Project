const container = document.getElementById('grid-container');
const gridSizeInput = document.getElementById('grid-size');
const updateGridButton = document.getElementById('update-grid');
const colorSelect = document.getElementById('color-select');


function getRandomRed() {
    const intensity = Math.floor(Math.random() * 256);
    return `rgb(${intensity}, 0, 0)`;
}

function getRandomOrange() {
    const intensity = Math.floor(Math.random() * 256);
    return `rgb(${intensity}, ${intensity / 2}, 0)`;
}

function getRandomYellow() {
    const intensity = Math.floor(Math.random() * 256);
    return `rgb(${intensity}, ${intensity}, 0)`;
}

function getRandomGreen() {
    const intensity = Math.floor(Math.random() * 256);
    return `rgb(0, ${intensity}, 0)`;
}

function getRandomBlue() {
    const intensity = Math.floor(Math.random() * 256);
    return `rgb(0, 0, ${intensity})`;
}

function getRandomViolet() {
    const intensity = Math.floor(Math.random() * 256);
    return `rgb(${intensity}, 0, ${intensity})`;
}

updateGridButton.addEventListener('click', function () {
    const gridSize = gridSizeInput.value;

    // Clear the container
    container.innerHTML = '';

    // Calculate the width and height of each grid item
    const itemSize = 500 / gridSize;

    for (let i = 0; i < gridSize; i++) {
        const row = document.createElement('div');
        row.classList.add('row');
        container.appendChild(row);

        for (let j = 0; j < gridSize; j++) {
            const gridItem = document.createElement('div');
            gridItem.classList.add('grid-item');
            row.appendChild(gridItem);

            // Set the width and height of the grid item
            gridItem.style.width = `${itemSize}px`;
            gridItem.style.height = `${itemSize}px`;

            // Initialize the opacity data attribute
            gridItem.dataset.opacity = 0;

            // Add event listener to change color and increase opacity on hover
            gridItem.addEventListener('mouseover', function () {
                // Increase the opacity data attribute
                this.dataset.opacity = Math.min(1, parseFloat(this.dataset.opacity) + 0.1);

                let color;
                switch (colorSelect.value) {
                    case 'red':
                        color = getRandomRed();
                        break;
                    case 'orange':
                        color = getRandomOrange();
                        break;
                    case 'yellow':
                        color = getRandomYellow();
                        break;
                    case 'green':
                        color = getRandomGreen();
                        break;
                    case 'blue':
                        color = getRandomBlue();
                        break;
                    case 'violet':
                        color = getRandomViolet();
                        break;
                }

                // Set the background color and opacity
                this.style.backgroundColor = color;
                this.style.opacity = this.dataset.opacity;
            });
        }
    }
});