
function calcular() {
    // recuperar los valores de la página
    var op1 = parseInt(document.getElementById("op1").value);
    var op2 = parseInt(document.getElementById("op2").value);
    // sumarlos
    let suma = op1 + op2;
    // agregarlos en la página en el lugar adecuado
    document.getElementById("resultado").innerHTML = suma;
}