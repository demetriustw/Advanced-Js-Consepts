const button = document.getElementById("button");

let thing =
  "https://iskarr.github.io/austindonovan.github.io/api/business.json";
function getStuff() {
  fetch(thing)
    .then((response) => response.json())
    .then((jsObject) => {
      console.log(jsObject);
    });
}

button.addEventListener("click", getStuff);
