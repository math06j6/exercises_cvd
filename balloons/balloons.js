"use strict";

window.addEventListener("DOMContentLoaded", start);

async function start() {
  // load the SVG into #balloon
  // then call createBalloons
  let response = await fetch("Yellow_toy_balloon.svg");
  let mySvgData = await response.text();
  document.querySelector("#balloon").innerHTML = mySvgData;
  createBalloons();
}

function createBalloons() {
  for (let i = 0; i < 40; i++) {
    createBalloon();
  }
}

function createBalloon() {
  // create a single balloon, using the #yellow_balloon
  // give it a random x and y
  // maybe also add a bit of animation ...
  // before adding it to the #balloons

  const balloon = document.createElementNS("http://www.w3.org/2000/svg", "use");

  balloon.setAttribute("href", "#yellow_balloon");
  balloon.setAttribute("x", Math.random() * 5000);
  balloon.setAttribute("y", Math.random() * 10000);
  balloon.classList.add("rise");

  console.log(balloon);

  // balloon.classList.add("balloon");
  document.querySelector("#balloons").append(balloon);

  // balloon.style.visibility = visible;
  // visibility: hidden;

  // balloon.style.x = Math.random() * 640;
  // balloon.style.y = Math.random() * 640;
}

// balloon.baseVal.value
// balloon.animVal.value
// balloon.getBBox.value
