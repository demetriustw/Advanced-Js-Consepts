const load = document.getElementById("loadBtn");
const show = document.getElementById("show");
const name = document.getElementById("name");
const imageurl = document.getElementById("imageurl");
const bg = document.getElementById("container");

let thing =
  "https://iskarr.github.io/austindonovan.github.io/api/business.json";
function getInfo() {
  fetch(thing)
    .then((response) => response.json())
    .then((jsObject) => {
      const stuff = jsObject;
      for (let i = 0; i < stuff.business.length; i++) {
        const div = document.createElement("div");
        const h2 = document.createElement("h2");
        const image = document.createElement("img");
        const h3 = document.createElement("h3");
        const p = document.createElement("p");

        // change background styles
        bg.style.height = "300vh";
        bg.style.width = "90vw";
        bg.style.padding = "0px";

        // div section
        document.getElementById("about-container").appendChild(div);
        div.id = "image-container" + i;
        div.class = "image-container";

        // img section
        image.src = stuff.business[i].imageurl;
        document.getElementById(div.id).appendChild(image);

        // h2 section
        h2.id = "name";
        h2.textContent = stuff.business[i].name;
        document.getElementById(div.id).appendChild(h2);

        // address section
        h3.id = "address";
        h3.textContent = stuff.business[i].address;
        document.getElementById(div.id).appendChild(h3);

        // discription section
        p.id = "describe";
        p.textContent = stuff.business[i].description;
        document.getElementById(div.id).appendChild(p);
      }
    });
  show.hidden = false;
  load.disabled = true;
}

load.addEventListener("click", getInfo);
