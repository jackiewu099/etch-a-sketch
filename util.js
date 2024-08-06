document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.container');
    let num = 16;

    const containerSize = 1000; // Container size (1000px)
    const squareSize = containerSize / num; // Size of each square

    container.style.width = `${containerSize}px`;
    container.style.height = `${containerSize}px`;

    for (let i = 0; i < num * num; i++) {
        const div = document.createElement('div');
        div.classList.add('square');
        div.style.width = `${squareSize}px`;
        div.style.height = `${squareSize}px`;
        container.appendChild(div);
    }

    const squares = document.querySelectorAll('.square');

    squares.forEach(square => {
        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = 'yellow';
        });
    });
});

function createGrid(num) {
    const container = document.querySelector('.container');
    
    // Clear existing grid items
    container.innerHTML = '';

    // Calculate square size based on container size and number of squares
    const containerSize = 1000; // Container size (1000px)
    const squareSize = containerSize / num; // Size of each square

    // Adjust container styles to fit the grid
    container.style.width = `${containerSize}px`;
    container.style.height = `${containerSize}px`;

    for (let i = 0; i < num * num; i++) {
        const div = document.createElement('div');
        div.classList.add('square');
        div.style.width = `${squareSize}px`;
        div.style.height = `${squareSize}px`;
        container.appendChild(div);
    }

    const squares = document.querySelectorAll('.square');

    squares.forEach(square => {
        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = 'yellow';
        });
    });
}

const btn = document.querySelector('button');

btn.addEventListener('click', () => {
    let result = parseInt(prompt('Enter a number from 1-100'), 10);
    if (isNaN(result) || result < 1 || result > 100) {
        alert('Please enter a number from 1-100');
    } else {
        createGrid(result);
    }
});






