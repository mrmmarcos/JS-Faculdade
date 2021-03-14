//tabuada do 3
var contador = 0;

while (contador <= 10) {
  console.log(3 * contador);
  contador++;
}

//laço de 1 a 10
var i = 0;
while (i <= 10) {
  console.log(i);
  i++;
}

//todas as tabuadas de 1 a 10
//laço dentro de laço
var c = 1;
var c2 = 1;

console.log("");
while (c <= 10) {
  c2 = 1;
  while (c2 <= 10) {
    console.log(c + "x" + c2 + "=" + c * c2);
    c2++;
  }
  console.log("------------------------");
  c++;
}

//laço infinito
var infinito = 0;

while (infinito != 9) {
  infinito = prompt("Digite um número aleatório. 9 para finalizar");
  alert("O número escolhido foi: " + infinito);
}

//For

for (var i = 130; i <= 156; i++) {
  console.log("Variável i = " + i);
}

for (var i = 156; i >= 130; i--) {
  console.log("Variável i = " + i);
}
