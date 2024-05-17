const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

const gridSize = 20; // Size of each grid square
const snake = [{ x: 10, y: 10 }]; // Initial position of the snake
let direction = { x: 1, y: 0 }; // Initial direction of movement
const canvasWidth = canvas.width;
const canvasHeight = canvas.height;

function drawRect(x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x * gridSize, y * gridSize, gridSize, gridSize);
}

function drawSnake() {
  ctx.clearRect(0, 0, canvasWidth, canvasHeight);
  snake.forEach((segment) => drawRect(segment.x, segment.y, "lime"));
}

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

function gameLoop() {
  moveSnake();
  drawSnake();
  setTimeout(gameLoop, 100); // Recursively call gameLoop every 100ms
}

document.addEventListener("keydown", (event) => {
  switch (event.key) {
    case "ArrowUp":
      if (direction.y === 0) direction = { x: 0, y: -1 };
      break;
    case "ArrowDown":
      if (direction.y === 0) direction = { x: 0, y: 1 };
      break;
    case "ArrowLeft":
      if (direction.x === 0) direction = { x: -1, y: 0 };
      break;
    case "ArrowRight":
      if (direction.x === 0) direction = { x: 1, y: 0 };
      break;
  }
});

// Start the game loop
gameLoop();
