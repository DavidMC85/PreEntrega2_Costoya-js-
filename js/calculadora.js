// array (const global)
const OPERACIONES = ["+", "-", "*", "/"];


let valorVisor = 0;
let numeroA;
let numeroB;
let operacion;
let ahora = new Date();

//----------

function obtenerNombreUsuario() {
  let nombreUsuario = localStorage.getItem("nombreUsuario");
  if (!nombreUsuario) {
    nombreUsuario = prompt("Por favor, ingresa tu nombre:");
    localStorage.setItem("nombreUsuario", nombreUsuario);
  }
  return nombreUsuario;
}

// Mostrar el nombre, saludo y reseteo al refrescar

let nombreUsuario = obtenerNombreUsuario();
alert("Bienvenido a mi pequeña calculadora, " + nombreUsuario + "!");
console.log("Al fin alguien me va a usar!!");

window.addEventListener("beforeunload", function (event) {
  localStorage.removeItem("nombreUsuario");
});

//poner en 0 el display al refrescar

window.onload = inicio

function inicio() {
  document.getElementById("visor").value = "";
}

//calculos

function boton(tecla) {
  let auxiliar = document.getElementById("visor").value;
  document.getElementById("visor").value = auxiliar + tecla;
  valorVisor = document.getElementById("visor").value = auxiliar + tecla;
}

function btn_suma(caracter) {
  numeroA = valorVisor;
  numeroB = valorVisor;
  operacion = OPERACIONES[0];
  limpar();
}

function btn_resta(caracter) {
  numeroA = valorVisor;
  numeroB = valorVisor;
  operacion = OPERACIONES[1];
  limpar();
}

function btn_multiplicacion(caracter) {
  numeroA = valorVisor;
  numeroB = valorVisor;
  operacion = OPERACIONES[2];
  limpar();
}

function btn_division(caracter) {
  numeroA = valorVisor;
  numeroB = valorVisor;
  operacion = OPERACIONES[3];
  limpar();
}

function reset() {
  document.getElementById("visor").value = "";
  valorVisor = 0;
  operacion = "";
}

function limpar() {
  document.getElementById("visor").value = "";
}

function btn_igual() {
  numeroB = valorVisor;
  resultado();
}

//conteo de resultados!

let button = document.getElementById("boton=");
let count = 0;

for (let i = 0; i < 1; i++) {
  button.addEventListener("click", function () {
    count++;
    if (count === 1) {
      console.log("He calculado mi primer resultado!")
    }
    else {
      console.log("Ya he calculado " + count + " resultados! Soy grossa!");
    }
  });
}

//resultados

function resultado() {
  let total = 0;
  let ultimoTotal = 0;

  if (operacion === "+") {
    total = Number(numeroA) + Number(numeroB);
  } else if (operacion === "-") {
    total = Number(numeroA) - Number(numeroB);
  } else if (operacion === "*") {
    total = Number(numeroA) * Number(numeroB);
  } else if (operacion === "/") {
    total = Number(numeroA) / Number(numeroB);
  }

  ultimoTotal = total;
  reset();
  document.getElementById("visor").value = total;
  valorVisor = ultimoTotal;
}

//boton para salir

document.getElementById("btn_salir").onclick = function () {
  if (confirm("¿Estás seguro de que deseas salir de la aplicación?")) {
    location.href = "about:blank";
  }
  else (alert("Bien pensado " + nombreUsuario + "!")); {
    reset()
  }
}


