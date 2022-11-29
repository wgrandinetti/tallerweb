
// var key= (clave de OMDBAPI);

function buscar(){
 //	 recuperar el titulo de la pelicula
 var url="http://www.omdbapi.com/?apikey="+key+"&t="+titulo;
 fetch(url)
 .then(response => response.json())
 .then(data => {
	// Mostrar datos en la página
 });


}


