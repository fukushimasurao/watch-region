const REGIONS = {
  TOKYO: "ap-northeast-1",
  VIRGINIA: "us-east-1",
  OHIO: "us-east-2",
  CALIFORNIA: "us-west-1",
  OREGON: "us-west-2",
};

const currentURL = window.location.href;

function findMatchingRegion(url) {
  for (let regionName in REGIONS) {
    if (url.includes(REGIONS[regionName])) {
      return regionName;
    }
  }
  return null;
}
const matchedRegion = findMatchingRegion(currentURL);
chrome.storage.local.get(
  [
    "TOKYO_COLOR",
    "VIRGINIA_COLOR",
    "OHIO_COLOR",
    "CALIFORNIA_COLOR",
    "OREGON_COLOR",
  ],
  function (result) {
    if (matchedRegion) {
      let colorKey = `${matchedRegion}_color`.toUpperCase();
      if (result[colorKey]) {
        const container = document.getElementById("h");
        const newDiv = document.createElement("div");

        newDiv.style.height = "5px";
        newDiv.style.backgroundColor = result[colorKey];
        container.parentNode.insertBefore(newDiv, container);
      }
    }
  }
);
