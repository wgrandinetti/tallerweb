
var capitales=new Array();
capitales["Francia"]="Paris";
capitales["Alemania"]="Berlín";
capitales["Chile"]="Santiago";
capitales["Australia"]="Canberra";
capitales["Mexico"]="Mexico DF";

function descubrir(elemento){
	var pais = elemento.innerHTML;
	var capital = elemento.nextElementSibling;
	capital.innerHTML = capitales[pais]; 

	var banderaURL = "./banderas/" + pais.toLowerCase() + ".png";
	console.log(banderaURL);
	document.getElementById("banderita").setAttribute("src",banderaURL);
}

function cubrir(elemento){
	elemento.nextElementSibling.innerHTML = ""; 
}
