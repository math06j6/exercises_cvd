("use strict");
window.addEventListener("DOMContentLoaded", start);

function start() {
  console.log("start");

  const fullName = "john doe johnjohn johnson";
  let firstName = fullName.substring(0, fullName.indexOf(" "));
  let lastName = fullName.substring(fullName.lastIndexOf(" ") + 1);
  let middleName = fullName.substring(fullName.indexOf(" ") + 1, fullName.lastIndexOf(" "));

  console.log("firstName: " + firstName + "\nmiddleName: " + middleName + "\nlastName: " + lastName);
}
