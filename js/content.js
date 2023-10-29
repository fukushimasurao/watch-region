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

let element = document.querySelector(
  ".awsui_drawer-content_1uo6m_1i9ii_122.awsui_drawer-content-clickable_1uo6m_1i9ii_137.awsui_tools_1fj9k_1uvk8_33"
);
console.log(element);
