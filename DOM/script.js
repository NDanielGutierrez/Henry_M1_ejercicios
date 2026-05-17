
console.log("JS funcionando");

const boton = document.getElementById('botonInteractivo');

boton.addEventListener('click', function(event) {
  event.target.style.backgroundColor = 'purple';
  event.target.style.color = 'white';
  event.target.textContent = 'Color cambiado!';
});

const campo = document.getElementById('nombreUsuario');

campo.addEventListener('focus', function(event) {
  event.target.style.borderColor = 'blue';
  console.log('Campo enfocado');
});

campo.addEventListener('blur', function(event) {
  event.target.style.borderColor = 'gray';
  console.log('Campo desenfocado');
});

campo.addEventListener('input', function(event) {
  console.log('Valor actual:', event.target.value);
});

const botonAgregar = document.getElementById('agregarTarea');
const listaTareas = document.getElementById('listaTareas');

botonAgregar.addEventListener('click', function() {
  const nuevaTarea = document.createElement('li');
  nuevaTarea.textContent = 'Nueva tarea agregada';
  listaTareas.appendChild(nuevaTarea);
});