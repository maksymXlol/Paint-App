let canvas = document.querySelector("canvas");
let ctx = canvas.getContext("2d");

canvas.addEventListener("mousemove", drawing);

function drawing(event) {
  ctx.lineTo(event.offsetX, event.offsetY);
  ctx.stroke();
}

window.addEventListener("load", () => {
  canvas.width = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;
});
