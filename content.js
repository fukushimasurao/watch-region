const searchString = "ap-northeast-1";
const currentURL = window.location.href;
const isContained = currentURL.includes(searchString);

let color = "";
if (isContained) {
  color = "red";
} else {
  color = "blue";
}

const container = document.getElementById("h");
const newDiv = document.createElement("div");

newDiv.style.height = "5px";
newDiv.style.backgroundColor = color;
container.parentNode.insertBefore(newDiv, container);
