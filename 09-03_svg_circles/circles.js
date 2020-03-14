"use strict";

window.addEventListener("DOMContentLoaded", createCircles);

function createCircles() {
  for (let i = 0; i < 40; i++) {
    createCircle();
  }
}

function createCircle() {
  const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  circle.classList.add("circle");
  document.querySelector("#circles").append(circle);

  circle.style.fill = randomColor();
  circle.style.cx = Math.random() * 640;
  circle.style.cy = Math.random() * 640;
  circle.style.r = "50";
  //   circle.style.left = x + "px";
  //   circle.style.top = x + "px";
  //   circle.style.backgroundtColor = color;
}

// let rgb = newColor();

// function greeting() {
//   console.log("greeting");
//   rgb = document.querySelector("#picked");
// }

function getColorString(red, green, blue) {
  console.log("getColorString");

  return `rgb(${red},${green},${blue})`;
}

function randomColor() {
  console.log("randomColor");

  const redRandom = Math.floor(Math.random() * 255);
  const greenRandom = Math.floor(Math.random() * 255);
  const blueRandom = Math.floor(Math.random() * 255);

  return getColorString(redRandom, greenRandom, blueRandom);
}

function setPosition() {
  console.log("randomColor");

  const redRandom = Math.floor(Math.random() * 255);
  const greenRandom = Math.floor(Math.random() * 255);
  const blueRandom = Math.floor(Math.random() * 255);

  return getColorString(redRandom, greenRandom, blueRandom);
}

// function randomBackground() {
//   console.log(randomColor());

//   document.querySelector("body").style.backgroundColor = randomColor();
// }
