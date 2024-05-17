# Recursive Snake Game Using JavaScript and HTML5 Canvas

In this project, we will create a classic snake game using recursion to move the snake infinitely and handle boundary reflections. The game will be implemented using HTML5 Canvas and JavaScript.

## Table of Contents
- [Introduction](#introduction)
- [What is Recursion?](#what-is-recursion)
- [Project Setup](#project-setup)
- [Step-by-Step Implementation](#step-by-step-implementation)
    - [Setting Up HTML and Canvas](#setting-up-html-and-canvas)
    - [Initializing the Canvas and Snake](#initializing-the-canvas-and-snake)
    - [Drawing the Snake](#drawing-the-snake)
    - [Moving the Snake](#moving-the-snake)
    - [Animating the Snake](#animating-the-snake)
    - [Handling User Input](#handling-user-input)
- [Complete `snake.js` File](#complete-snakejs-file)
- [Conclusion](#conclusion)
- [Resources](#resources)
- [Watch the Video](#watch-the-video)

## Introduction

This tutorial demonstrates how to create a snake game using JavaScript and HTML5 Canvas. We'll use recursion to animate the snake continuously and implement boundary reflections to keep the game running infinitely.

## What is Recursion?

Recursion is a fundamental programming concept where a function calls itself to solve smaller instances of the same problem. It involves two main parts:
- **Base Case:** The condition under which the recursion ends.
- **Recursive Case:** The part of the function where it calls itself with modified arguments, moving towards the base case.

For more details, read the full article on Medium: [Understanding Recursion: A Brief Overview](https://medium.com/@utkug3lu/understanding-recursion-a-brief-overview-486c7c69de49).

## Project Setup

1. Create an HTML file with a canvas element.
2. Create a `snake.js` file for the game logic.

## Step-by-Step Implementation

### Setting Up HTML and Canvas

Create an HTML file with the following content:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Recursive Snake Game</title>
    <style>
        body { margin: 0; }
        canvas { display: block; background: #000; }
    </style>
</head>
<body>
    <canvas id="gameCanvas" width="600" height="400"></canvas>
    <script src="snake.js"></script>
</body>
</html>
```

## Initializing the Canvas and Snake

Set up the initial configuration for the canvas and the snake in snake.js:
```
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

const gridSize = 20; // Size of each grid square
const snake = [{ x: 10, y: 10 }]; // Initial position of the snake
let direction = { x: 1, y: 0 }; // Initial direction of movement
const canvasWidth = canvas.width;
const canvasHeight = canvas.height;

function drawRect(x, y, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x * gridSize, y * gridSize, gridSize, gridSize);
}
```
## Drawing the Snake

Create a function to draw the snake on the canvas:

```javascript

function drawSnake() {
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    snake.forEach(segment => drawRect(segment.x, segment.y, 'lime'));
}
```
## Moving the Snake

Create a function to move the snake and handle boundary reflections:

```

function moveSnake() {
    const head = { x: snake[0].x + direction.x, y: snake[0].y + direction.y };

    // Reflect snake if it hits the bounds
    if (head.x < 0 || head.x >= canvasWidth / gridSize) {
        direction.x = -direction.x;
        head.x = snake[0].x + direction.x;
    }
    if (head.y < 0 || head.y >= canvasHeight / gridSize) {
        direction.y = -direction.y;
        head.y = snake[0].y + direction.y;
    }

    snake.unshift(head);
    snake.pop();
}
```
## Animating the Snake

Create the main game loop using recursion to animate the snake infinitely:

```

function gameLoop() {
    moveSnake();
    drawSnake();
    setTimeout(gameLoop, 100); // Recursively call gameLoop every 100ms
}

// Start the game loop
gameLoop();
```
## Handling User Input

Allow users to control the snake's direction using the arrow keys:

```

document.addEventListener('keydown', (event) => {
    switch (event.key) {
        case 'ArrowUp':
            if (direction.y === 0) direction = { x: 0, y: -1 };
            break;
        case 'ArrowDown':
            if (direction.y === 0) direction = { x: 0, y: 1 };
            break;
        case 'ArrowLeft':
            if (direction.x === 0) direction = { x: -1, y: 0 };
            break;
        case 'ArrowRight':
            if (direction.x === 0) direction = { x: 1, y: 0 };
            break;
    }
});
```
## Complete snake.js File

Here is the complete snake.js file:

```

const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

const gridSize = 20;
const snake = [{ x: 10, y: 10 }];
let direction = { x: 1, y: 0 };
const canvasWidth = canvas.width;
const canvasHeight = canvas.height;

function drawRect(x, y, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x * gridSize, y * gridSize, gridSize, gridSize);
}

function drawSnake() {
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    snake.forEach(segment => drawRect(segment.x, segment.y, 'lime'));
}

function moveSnake() {
    const head = { x: snake[0].x + direction.x, y: snake[0].y + direction.y };

    if (head.x < 0 || head.x >= canvasWidth / gridSize) {
        direction.x = -direction.x;
        head.x = snake[0].x + direction.x;
    }
    if (head.y < 0 || head.y >= canvasHeight / gridSize) {
        direction.y = -direction.y;
        head.y = snake[0].y + direction.y;
    }

    snake.unshift(head);
    snake.pop();
}

function gameLoop() {
    moveSnake();
    drawSnake();
    setTimeout(gameLoop, 100);
}

document.addEventListener('keydown', (event) => {
    switch (event.key) {
        case 'ArrowUp':
            if (direction.y === 0) direction = { x: 0, y: -1 };
            break;
        case 'ArrowDown':
            if (direction.y === 0) direction = { x: 0, y: 1 };
            break;
        case 'ArrowLeft':
            if (direction.x === 0) direction = { x: -1, y: 0 };
            break;
        case 'ArrowRight':
            if (direction.x === 0) direction = { x: 1, y: 0 };
            break;
    }
});

gameLoop();
```
## Conclusion

This project demonstrates how to create a simple yet engaging snake game using recursion for continuous movement and boundary reflection. You can further expand this game by adding features like food for the snake to eat, growing the snake, and detecting collisions with its own tail.
## Resources

    MDN Web Docs: Canvas API
    JavaScript Info: Recursion

## Watch the Video

Watch the video tutorial to see the project in action and follow along with the code implementation!

📺 [Create a Recursive Snake Game Using JavaScript and HTML5 Canvas](https://youtu.be/CyAyS54DVec?si=fs77gIEB43uBUlav)

For a detailed walkthrough and complete code snippets, read the full tutorial on Medium: Understanding Recursion: A Brief Overview.

Don't forget to like, share, and subscribe for more coding tutorials!

Follow me on Medium for more articles and tutorials:
[Medium Profile](https://medium.com/@utkug3lu/)

vbnet


Feel free to customize the sections and links as needed!
