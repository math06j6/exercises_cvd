"use strict";
document.addEventListener("DOMContentLoaded", start);

function start() {
  console.log("start");

  let name = "PEtERpeterPeter";

  let result = name.substring(0, 2).toLowerCase() + name[2].toUpperCase() + name.substring(3).toLowerCase();
  console.log(result);
}
