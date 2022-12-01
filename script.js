const text = document.querySelector(".loading-text");
image = document.querySelector(".bg");

let progress = 0;
let blurr = 20;
let blurPercentage = 20 / 100;
let textOpacity = 1;
const loop = setInterval(() => {
  image.style.filter = `blur(${blurr}px)`;
  text.style.opacity = textOpacity;
  blurr = blurr - blurPercentage;
  textOpacity = textOpacity - 0.01;
  progress = progress + 0.01;
  let current = Math.ceil(progress * 100);
  text.innerText = `${current}%`;
  if (current === 100) {
    clearInterval(loop);
  }
}, 30);
