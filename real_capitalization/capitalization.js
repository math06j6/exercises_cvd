"use strict";
document.addEventListener("DOMContentLoaded", start);

function start() {
  console.log("start");

  let name = "PEtERpeterPeter";

  name = name.toLowerCase();
  console.log(name[0].toUpperCase() + name.substring(1, name.length));
}
