var nature = {
  landscape: {
    pond: {
      amount: 100,
      is: "water",
      need: "rain",
    },
  },
  creatures: {
    land: {
      deer: {
        drink: "water",
        eat: "plants",
      },
      bears: {
        drink: "water",
        eat: "deer",
      },
    },
    aquatic: {
      fish: {
        take: "seawead",
        need: "water",
      },
    },
  },
};

// function amountOfFish() {
//   if (nature.landscape.pond.amount === 100) {
//     nature.landscape.pond.fish = f = 15;
//     console.log("starting value ", nature.landscape.pond.fish);
//   }
//   if (nature.landscape.pond.amount < 100) {
//     if (nature.landscape.pond.amount === 75) {
//       nature.landscape.pond.fish = 11;
//     } else if (nature.landscape.pond.amount === 50) {
//       nature.landscape.pond.fish = 7;
//     } else if (nature.landscape.pond.amount === 25) {
//       nature.landscape.pond.fish = 3;
//     } else if (nature.landscape.pond.amount === 0) {
//       nature.landscape.pond.fish = 0;
//     }
//   }
//   if (nature.landscape.pond.amount > 100) {
//     if (nature.landscape.pond.amount === 125) {
//       nature.landscape.pond.fish = 19;
//     } else if (nature.landscape.pond.amount === 150) {
//       nature.landscape.pond.fish = 23;
//     } else if (nature.landscape.pond.amount === 175) {
//       nature.landscape.pond.fish = 27;
//     } else if (nature.landscape.pond.amount === 200) {
//       nature.landscape.pond.fish = 30;
//     }
//   }
//   console.log("new value ", nature.landscape.pond.fish);
// }

// amountOfFish();

// function getAnimals() {
//   fetch(thing)
//     .then((response) => response.json())
//     .then((jsObject) => {
//       const stuff = jsObject;
//       for (let i = 0; i < stuff.business.length; i++) {
//         console.log(jsObject);
//         const div = document.createElement("div");
//         const h2 = document.createElement("h2");
//         const image = document.createElement("img");
//         const h3 = document.createElement("h3");
//         const p = document.createElement("p");

//         // change background styles

//         changeBgStyles();

//         // div section
//         document.getElementById("about-container").appendChild(div);
//         div.id = "image-container" + i;
//         div.class = "image-container";

//         // img section
//         image.src = stuff.business[i].imageurl;
//         document.getElementById(div.id).appendChild(image);

//         // h2 section
//         h2.id = "name";
//         h2.textContent = stuff.business[i].name;
//         document.getElementById(div.id).appendChild(h2);

//         // address section
//         h3.id = "address";
//         h3.textContent = stuff.business[i].address;
//         document.getElementById(div.id).appendChild(h3);

//         // discription section
//         p.id = "describe";
//         p.textContent = stuff.business[i].description;
//         document.getElementById(div.id).appendChild(p);
//       }
//     });
//   show.hidden = false;
//   load.disabled = true;
// }

// load.addEventListener("click", getAnimals);
