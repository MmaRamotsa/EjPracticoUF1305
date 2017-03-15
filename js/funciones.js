/*======================================================================
Página creada por : Maria Antonia Martínez García
Fecha: 14/03/2017
Versión : v1.0
Evaluación del módulo UF1305. Contiene las funciones JavaScript necesarias para
cumplir los puntos solicitados en la prueba práctica.
==========================================================================*/
//La función vacia1 elimina los avisos y el resultado al hacer click 
//dentro del campo texto. Sirve para inicializar la ventana después de hacer
// una prueba.
var campoTexto = document.getElementById("texto");
campoTexto.addEventListener("click", function (){
	this.value ="";
	this.style.backgroundColor="white";
	this.style.borderColor="";
	document.getElementById("aviso1").innerHTML = "";
	document.getElementById("resultado1").innerHTML = "";
});

//En el caso de que no se haya introducido ningún texto o se hayan introducido sólo espacios,
//se muestra un aviso por pantalla y se vuelve a poner el foco en el campo de texto.
function validaTexto(text){
	if (text=="" || (text.replace(/ /g,"")=="")){
		if (text==""){
			document.getElementById("aviso1").innerHTML = "Por favor, introduzca un texto.";
		} else {
			document.getElementById("aviso1").innerHTML = "Por favor, introduzca un texto que tenga otros caracteres además del espacio.";
		}
		document.getElementById("texto").value ="";
		document.getElementById("texto").style.borderColor="red";
		document.getElementById("texto").style.backgroundColor="coral";
		document.getElementById("texto").focus();
		document.getElementById("resultado1").innerHTML = "";
		return false;
	} else {
		return true;
	}
}

//Al hacer click en el botón 1, comprueba si es un palíndromo.
var boton1 =document.getElementById("uno");
boton1.addEventListener("click", function (){
	var texto0 = document.getElementById("texto").value;
	//Con el método replace, quitamos los espacios dentro del texto.
	//Con el método toLowerCase lo pasamos todo a minúsculas.
	var txt = texto0.replace(/ /g,"").toLowerCase();
	var arr2 = new Array(txt); //Creo un array con la misma longitud que txt

	//Llamo a validaTexto para validar que se ha introducido un texto válido.
	if (validaTexto(texto0)) {
			document.getElementById("aviso1").innerHTML = "";
			document.getElementById("texto").style.borderColor="green";
			document.getElementById("texto").style.backgroundColor="lightgreen";
			for (var i = 0, j = (txt.length-1); i < txt.length; i++){
				arr2[j] = txt[i];
				j--;
			}
			if (arr2.join('') === txt){
				document.getElementById("resultado1").innerHTML = "Es un PALÍNDROMO";
			} else {
				document.getElementById("resultado1").innerHTML = "NO es un palíndromo";
			}
	}
});
//Al hacer click en el botón 2, muestro las propiedades del elemento a
var boton2 =document.getElementById("dos");
boton2.addEventListener("click", function (){
		var arrProps = ["href","hreflang","rel","target","type"];
		var props ="";
		var elemento = document.getElementById("w3r");
	
		for (var i = 0; i < arrProps.length ; i++) {
			props = props + "<p><b>" + arrProps[i] + ":</b> " + elemento[arrProps[i]] + "</p>";
		}
		document.getElementById("propiedades").style.visibility = "visible";
		document.getElementById("resultado2").innerHTML = props;
});


var botonOcultar = document.getElementById("ocultar");
botonOcultar.addEventListener("click", function (){
	document.getElementById("propiedades").style.visibility = "hidden";
});