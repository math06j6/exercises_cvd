("use strict");
window.addEventListener("DOMContentLoaded", start);

function start() {
  console.log("start");

  let capitalize = function(fullName) {
    fullName = fullName.toLowerCase().split(" ");
    for (let i = 0; i < fullName.length; i++) {
      fullName[i] = fullName[i].charAt(0).toUpperCase() + fullName[i].slice(1);
    }
    return fullName.join(" ");
  };

  const fullName = capitalize("john doe johnjohn johnson");
  let firstName = fullName.substring(0, fullName.indexOf(" "));
  let lastName = fullName.substring(fullName.lastIndexOf(" ") + 1);
  let middleName = fullName.substring(fullName.indexOf(" ") + 1, fullName.lastIndexOf(" "));

  console.log("firstName: " + firstName + "\nmiddleName: " + middleName + "\nlastName: " + lastName);
}
