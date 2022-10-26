// navigator.geolocation.getCurrentPosition(function (position) {
//   console.log(position.coords.latitude, position.coords.longitude);

//   function reqListener() {
//     console.log(this.responseText);

//     var r = JSON.parse(this.responseText);

//     function reqListener2() {
//       console.log(this.responseText);

//       var r = JSON.parse(this.responseText);
//     }

//     var oReq = new XMLHttpRequest();
//     oReq.addEventListener("load", reqListener2);
//     oReq.open(
//       "GET",
//       `https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${r[0].woeid}/`
//     );
//     oReq.send();
//   }

//   var oReq = new XMLHttpRequest();
//   oReq.addEventListener("load", reqListener);
//   oReq.open(
//     "GET",
//     `https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/search/?lattlong=${position.coords.latitude},${position.coords.longitude}`
//   );
//   oReq.send();
// });
const load = document.getElementById("loadBtn");
const show = document.getElementById("show");
const name = document.getElementById("name");
const imageurl = document.getElementById("imageurl");
const bg = document.getElementById("container");

const allIcons = document.querySelectorAll(".far");

function changeBgStyles() {
  bg.style.height = "300vh";
  bg.style.width = "90vw";
  bg.style.padding = "0px";
}

let key = "8ebf33a67a7d1b6173ce940052e4a81d";

function requestJSONP(url) {
  // create script with passed in URL
  var script = document.createElement("script");
  script.src = url;

  // insert script tag into the DOM (append to <head>)
  var head = document.getElementsByTagName("head")[0];
  head.insertBefore(script, null);
}

function processWeather(data) {
  console.log(data);
}

// get the weather data for Utah via JSONP
let url = `http://api.openweathermap.org/geo/1.0/direct?q=Tooele,84074&limit=5&appid=${key}`;

requestJSONP(url);

function getInfo() {
  fetch(url)
    .then((response) => response.json())
    .then((jsObject) => {
      const stuff = jsObject;
      // console.log(stuff[0].lon, stuff[0].lat);

      function requestJSONP(weather) {
        // create script with passed in weather
        var script = document.createElement("script");
        script.src = weather;

        // insert script tag into the DOM (append to <head>)
        var head = document.getElementsByTagName("head")[0];
        head.insertBefore(script, null);
      }

      function processWeather(data) {
        console.log(data);
      }

      // get the weather data for Utah via JSONP
      let weather = `https://api.openweathermap.org/data/2.5/weather?lat=${stuff[0].lat}&lon=${stuff[0].lon}&appid=${key}`;

      requestJSONP(weather);

      function getweth() {
        fetch(weather)
          .then((response) => response.json())
          .then((jsObject) => {
            const thing = jsObject;
            // console.log(thing);

            function requestJSONP(Time) {
              // create script with passed in Time
              var script = document.createElement("script");
              script.src = Time;

              // insert script tag into the DOM (append to <head>)
              var head = document.getElementsByTagName("head")[0];
              head.insertBefore(script, null);
            }

            function processTime(data) {
              console.log(data);
            }

            let Time = `https://api.openweathermap.org/data/2.5/onecall?lat=${stuff[0].lat}&lon=${stuff[0].lon}&exclude=current,minutely,hourly,alerts&appid=${key}`;

            function getDays() {
              fetch(Time)
                .then((response) => response.json())
                .then((jsObject) => {
                  const gD = jsObject;
                  for (let i = 0; i < gD.daily.length; i++) {
                    const div = document.createElement("div");
                    const h2 = document.createElement("h3");
                    const im = document.createElement("i");
                    const p = document.createElement("p");
                    // get the weather to the pond
                    let amount = nature.landscape.pond.amount;
                    function amountOfFish() {
                      if (gD.daily[i].weather[0].description === "light rain") {
                        amount += 8;
                      } else if (
                        gD.daily[i].weather[0].description === "rain and snow"
                      ) {
                        amount += 30;
                      } else if (
                        gD.daily[i].weather[0].description === "moderate rain"
                      ) {
                        amount += 15;
                      } else if (
                        gD.daily[i].weather[0].description === "light snow"
                      ) {
                        amount += 15;
                      } else if (
                        gD.daily[i].weather[0].description === "clear sky"
                      ) {
                        amount += -8;
                      } else if (
                        gD.daily[i].weather[0].description === "few clouds"
                      ) {
                        amount += -4;
                      } else if (
                        gD.daily[i].weather[0].description === "broken clouds"
                      ) {
                        amount += 0;
                      } else if (
                        gD.daily[i].weather[0].description === "overcast clouds"
                      ) {
                        amount += 0;
                      }

                      nature.landscape.pond.fish = f = 15;
                      if (amount < 100) {
                        if (amount === 75) {
                          nature.landscape.pond.fish = 11;
                        } else if (amount === 50) {
                          nature.landscape.pond.fish = 7;
                        } else if (amount === 25) {
                          nature.landscape.pond.fish = 3;
                        } else if (amount === 0) {
                          nature.landscape.pond.fish = 0;
                        }
                      }
                      if (amount > 100) {
                        if (amount >= 125) {
                          nature.landscape.pond.fish = 19;
                        } else if (amount >= 150) {
                          nature.landscape.pond.fish = 23;
                        } else if (amount >= 175) {
                          nature.landscape.pond.fish = 27;
                        } else if (amount === 200) {
                          nature.landscape.pond.fish = 30;
                        }
                      }
                    }

                    amountOfFish();

                    // change background styles

                    bg.style.height = "300vh";
                    bg.style.width = "90vw";
                    bg.style.padding = "0px";

                    // div section
                    document.getElementById("about-container").appendChild(div);
                    div.id = "day-container" + i;
                    div.class = "day-container";

                    // h2 section
                    h2.id = "name";
                    h2.textContent = gD.daily[i].weather[0].description;
                    document.getElementById(div.id).appendChild(h2);

                    // i section
                    im.id = "clouds";
                    im.style = "font-size: 48px";
                    im.class = "fa fa-cloud";
                    document.getElementById(div.id).appendChild(im);

                    // discription section
                    p.id = "describe";
                    p.textContent = `Number of fish: ${nature.landscape.pond.fish}
                    Amount of water: ${amount}`;
                    document.getElementById(div.id).appendChild(p);
                  }
                });
              show.hidden = false;
              load.disabled = true;
            }
            getDays();

            requestJSONP(Time);
          });
      }
      getweth();
    });
}
getInfo();

load.addEventListener("click", getInfo);
