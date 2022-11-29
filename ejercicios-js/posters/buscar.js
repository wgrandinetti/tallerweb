
// var key= (clave de OMDBAPI);
var key = "91d05c89";

function buscar(){
 //	 recuperar el titulo de la pelicula
 var titulo = document.getElementById("titulo").value;
 var url="http://www.omdbapi.com/?apikey="+key+"&t="+titulo;
 fetch(url)
 .then(response => response.json())
 .then(data => {
	//console.log(data);
	document.getElementById("poster").setAttribute("src",data["Poster"]);
	// eller
	// document.getElementById("poster").src = data["Poster"];
 });
}

// Codigo de prueba
// Get the input field
var input = document.getElementById("titulo");

// Execute a function when the user presses a key on the keyboard
input.addEventListener("keypress", function(event) {
  // If the user presses the "Enter" key on the keyboard
  console.log('Se presiono enter');
  if (event.key === "Enter") {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById("myBtn").click();
  }
}); 

