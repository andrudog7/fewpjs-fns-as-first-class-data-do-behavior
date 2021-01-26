/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet(string) {
  const hour = string.split(':')[0];
  const integer = parseInt(hour, 10);
  if (integer < 12) return "Good Morning"
  if (integer > 17) return "Good Evening"
  return "Good Afternoon"
}
/* Write your implementation of displayMessage() */

function displayMessage(string) {
  document.getElementById("greeting").innerText = string;
}
