const prompt = require('../utils/prompt');

// Exercício 14 - Crie um programa que calcula o fatorial de um número fornecido pelo usuário utilizando um loop for ou while.

let numero = parseInt(prompt("Digite um número para calcular o fatorial: "));

if (isNaN(numero) || numero < 0) {
    console.log("Por favor, insira um número inteiro não negativo.");
} else {
    let fatorial = 1;

    for (let i = 1; i <= numero; i++) {
        fatorial *= i;
    }

    console.log(`O fatorial de ${numero} é: ${fatorial}`);
}
