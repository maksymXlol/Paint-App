let canvas = document.querySelector("canvas");
let ctx = canvas.getContext("2d");
let slider = document.querySelector(".slider");
let setColor = document.querySelector(".color");
let rubOut = document.querySelector(".rub-out");
let download = document.querySelector(".download");
let isDrawing = false;
let brushSize = slider.value;
let color = setColor.value;
canvas.addEventListener("mousemove", drawing);
canvas.addEventListener("mousedown", startDrawing);
canvas.addEventListener("mouseup", stopDrawing);
rubOut.addEventListener("click", (event) => {
  console.log(":)");
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});
download.addEventListener("click", () => {
  const link = document.createElement("a");
  link.download = "your-picture.png";
  link.href = canvas.toDataURL();
  link.click();
  link.delete;
});

function startDrawing(event) {
  isDrawing = true;
  ctx.beginPath();
  brushSize = slider.value;
  color = setColor.value;
  ctx.strokeStyle = color;
  ctx.lineWidth = brushSize;
  ctx.lineCap = "round";
  console.log(color);
}

function stopDrawing(event) {
  isDrawing = false;
}

function drawing(event) {
  if (!isDrawing) {
    return;
  }
  ctx.lineTo(event.offsetX, event.offsetY);
  ctx.stroke();
}

window.addEventListener("load", () => {
  canvas.width = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;
});
