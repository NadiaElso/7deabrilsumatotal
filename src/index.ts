let cantidaddenumeros: number = 5;

let total: number = 0;
function sumarnumeros() {
  for (let index = 0; index <= cantidaddenumeros; index++) {
    let numero: number = Number(prompt("Ingresar números mayores a cero"));

    while (numero <= 0) {
      numero = Number(prompt("ingresa un número mayor a cero"));
    }

    total += numero;
  }
  console.log(total);
}

let botonsuma = document.getElementById("sumar");

botonsuma?.addEventListener("click", sumarnumeros);
