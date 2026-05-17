
console.log("JS conectado");

const boton = document.getElementById('agregarTarea');
const input = document.getElementById('nuevaTarea');

boton.addEventListener('click', function() {
  const texto = input.value;
  console.log('Tarea:', texto);
  input.value = '';
});