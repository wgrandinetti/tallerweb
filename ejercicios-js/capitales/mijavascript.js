
var capitales=new Array();
capitales["Francia"]="Paris";
capitales["Alemania"]="Berlín";
capitales["Chile"]="Santiago";
capitales["Australia"]="Canberra";
capitales["México"]="Mexico DF";

function descubrir(elemento){
	var pais = elemento.innerHTML;
	var capital = elemento.nextElementSibling;
	capital.innerHTML = capitales[pais]; 
}

function cubrir(elemento){
	elemento.nextElementSibling.innerHTML = ""; 
}