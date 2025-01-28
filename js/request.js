// const { log } = require("console");

// api
const API = "https://randomuser.me/api/?results=9";

// for leader
const overlay = document.getElementById("overlay");

// toggle loader
const loaderToggle = (toggle) => {
  if (toggle) {
    overlay.classList.remove("hidden");
  } else {
    overlay.classList.add("hidden");
  }
};

// request promise
const getData = (resource) => {
  return new Promise((res, rej) => {
    const request = new XMLHttpRequest();

    request.addEventListener("readystatechange", () => {
      if (request.readyState < 4) {
        // loaderToggle(true);
      } else if (request.readyState == 4 && request.status == 200) {
        const data = JSON.parse(request.responseText);
        console.log(data.results);
        // loaderToggle(true);
      } else if (request.request == 4) {
        console.log("Error !!!r");
        // loaderToggle(true);
      }
    });

    request.open("GET", resource);
    request.send();
  });
};

getData(API);
