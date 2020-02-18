"use strict";

window.addEventListener("DOMContentLoaded", start);

// A message to the user
const start = prompt("Hi, what is your name?");

console.log(capitalize(name));

function capitalize(str) {
  return str.substring(0, 1).toUpperCase() + str.substring(1).toLowerCase();
}
