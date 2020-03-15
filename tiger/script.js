document.addEventListener("DOMContentLoaded", start);

async function start() {
  let response = await fetch("assets/tiger.svg");
  let mySvgData = await response.text();
  document.querySelector("section").innerHTML = mySvgData;

  document.querySelectorAll("#path352,#path304,#path308,#path476").forEach(elm => {
    elm.addEventListener("click", startManipulatingTheSvg);
  });

  document.querySelectorAll("path").forEach(elm => {
    elm.addEventListener("mouseover", blacked);
  });
  // startManipulatingTheSvg();
}

function startManipulatingTheSvg() {
  // document.querySelectorAll("#path352", "#path304", "#path308", "#path476").style.fill = "red";
  document.querySelector("#path352").style.fill = "red";
  document.querySelector("#path304").style.fill = "red";
  document.querySelector("#path308").style.fill = "red";
  document.querySelector("#path476").style.fill = "red";
}

// document.querySelectorAll("g").forEach(elm => {
//   elm.style.fill = "black";
// });

function blacked() {
  document.querySelectorAll("path").forEach(elm => {
    elm.style.transition = "all 2.5s ease-in-out";
    elm.style.fill = "black";
  });

  document.querySelector("#path352").style.fill = "red";
  document.querySelector("#path304").style.fill = "red";
  document.querySelector("#path308").style.fill = "red";
  document.querySelector("#path476").style.fill = "red";
  // document.querySelector.removeEventListener("mouseover", blacked);

  // document.querySelectorAll("g").removeEventListener("mousedown", blacked);
  document.querySelector("path").removeEventListener("mouseover", blacked);
}
