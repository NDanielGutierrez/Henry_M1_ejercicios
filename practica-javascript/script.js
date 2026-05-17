
console.log("JavaScript conectado correctamente")

const name = "Juan";
console.log("Hola, " + name + "! Bienvenido a JavaScript.");

let contador = 0;


const precioProducto = 25

let puntaje = 0

console.log("el nombre de usuario es " + name);
console.log("el numero de mensajes es " + contador);
console.log("el precio del producto es $" + precioProducto);
console.log("el puntaje es " + puntaje);

//Ejercicio 2: Funciones//

function saludar(nombre) {
    return "Hola, "+nombre+"!"
}
console.log(saludar("Ana"));
console.log(saludar("Carlos"));
console.log(saludar("María"));

function calcularDoble(numero) {
    return numero * 2;
}
console.log(calcularDoble(5));
console.log(calcularDoble(10));
console.log(calcularDoble(3));

//Ejercicio 3 : Arrays//

let tareas = ["Hacer la compra", "Limpiar la casa", "Estudiar JavaScript"];


console.log(tareas);

lengthTareas = tareas.length
console.log("El número de tareas es: " + lengthTareas);

console.log("La primera tarea es: " + tareas[0]);
console.log("La última tarea es: " + tareas[tareas.length - 1]);
tareas.push("Hacer ejercicio");
console.log("Tareas después de agregar una nueva tarea: " + tareas);
//Ejercicio 4: Estructuras de control//
function clasificarNota(nota) {
    if (nota >= 60) {
        return "Aprobado";
    } else {
        return "Desaprobado";
    }
}

console.log(clasificarNota(85));
console.log(clasificarNota(55));
console.log(clasificarNota(70));
console.log(clasificarNota(45));

function clasificarCalificacion(calificacion) {
        return calificacion >= 60 ? "Aprobado" : "Desaprobado";
}

console.log(clasificarCalificacion(15));
console.log(clasificarCalificacion(65));
console.log(clasificarCalificacion(40));
console.log(clasificarCalificacion(65));

//iteraciones//
for (let i = 0; i < tareas.length; i++) {
console.log("tarea "+i+": "+tareas[i]);
}

tareas.forEach(function(tarea) {
    console.log(tarea);
})

//ejercicio 5:math.random y math.floor//

let indice=Math.floor(Math.random() * tareas.length);

console.log("Tarea aleatoria: " + tareas[indice]);
