console.log("js console");

var data;
var grid = document.querySelector(".grid-container");

var xhttp = new XMLHttpRequest();

xhttp.onreadystatechange = function(){
 if (this.readyState == 4 && this.status == 200){

    data = JSON.parse(xhttp.responseText);
    console.log(data);

    data.forEach(function(movie) {
    let card = document.createElement("div");
    card.classList.add("card");

    let textData =
    "<div class='movie-title'>"+ movie.title + "</div>" +
    "<span>"+
    "Director: " + movie.director + "<br>"+
    "Runtime: " + movie.runTime + "<br>" + 
    "Genre: " + movie.genre + "<br>" + 
    "Status: " + movie.status + "<br>" + 
    
    "</span>";

    card.innerHTML = textData;

    if (movie.imgSrc){
     card.style.backgroundImage = "url('" + movie.imgSrc + "')";
 }
    
   grid.appendChild(card);
});

  } 

};

xhttp.open("GET", "movies.json", true);
xhttp.send();