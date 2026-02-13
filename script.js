console.log("js started");

var data;
var grid = document.querySelector(".grid-container");


if (localStorage.getItem("datalist")) {
  data = JSON.parse(localStorage.getItem("datalist"));
  console.log("Loaded from localStorage");
  if (grid) {
    makeCards();
  }
} else {
  var xhttp = new XMLHttpRequest();

  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      data = JSON.parse(this.responseText);
      console.log("Loaded from gameData.json");

      localStorage.setItem("datalist", JSON.stringify(data));
      console.log("Saved starter data to localStorage");

      if (grid) {
        makeCards();
      }
    }
  };

  xhttp.open("GET", "movies.json", true);
  xhttp.send();
}

// RENDER CARDS
function makeCards() {
  grid.innerHTML = "";

  data.forEach(function (movie) {
    let card = document.createElement("div");
    card.classList.add("card");

    let textData =
      "<div class='game-title'>" + movie.title + "</div>" +
      "<div>Publisher: " + movie.director + "</div>" +
      "<div>Release Date: " + movie.status + "</div><img class= 'image' src='" +movie.imgSrc+"'>";

    card.innerHTML = textData;
    grid.appendChild(card);
  });

  console.log("cards refreshed");
}


console.log("form script started");

if (localStorage.getItem("datalist")) {
  data = JSON.parse(localStorage.getItem("datalist"));
} else {
  data = [];
}

var form = document.querySelector("form");
var titleInput = document.querySelector("#title-input");
var pubInput = document.querySelector("#publisher-input");
var dateInput = document.querySelector("#Status");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  var newObj = {
    title: titleInput.value,
    director: pubInput.value,
    status: dateInput.value
  };

  data.push(newObj);
  localStorage.setItem("datalist", JSON.stringify(data));
  console.log("Saved new item to localStorage");

  // Only render if grid exists on this page
  if (document.querySelector(".grid-container")) {
    makeCards();
  }

  form.reset();
});












































