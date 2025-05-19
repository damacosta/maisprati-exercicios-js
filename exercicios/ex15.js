// Exercício 15 - Escreva um programa que gera e imprime os primeiros 10 números da sequência de Fibonacci utilizando um loop for.

let numero1 = 0;
let numero2 = 1;

console.log(numero1);
console.log(numero2);

for (let i = 3; i <= 10; i++) {
    let proximo = numero1 + numero2;
    console.log(proximo);
    
    numero1 = numero2;
    numero2 = proximo;
}
