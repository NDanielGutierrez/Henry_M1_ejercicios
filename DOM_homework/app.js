

const cambiartexto = document.getElementById("parrafo");
const boton = document.getElementById("cambiarBtn");

//escuchar click//
boton.addEventListener('click', function(event) {

//console log//
console.log("boton clickeado");

//cambiar texto//
cambiartexto.textContent = '¡nuevo texto generado!';


//generar color aleatorio//
const h = Math.floor(Math.random() * 360);
cambiartexto.style.backgroundColor = `hsl(${h}, 70%, 55%)`; 

//extra gatito//
// mostrar gatito
  document.getElementById("catWrap").classList.add("visible");
});
