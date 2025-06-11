const prompt = require('../utils/prompt');

// Exercício 12 - Crie um programa que exibe a tabuada de um número fornecido pelo usuário (de 1 a 10) utilizando um loop for.

let numero = parseInt(prompt("Digite um número de 1 a 10 para ver a tabuada: "))

if (isNaN(numero) || numero < 1 || numero > 10) {
    console.log("Por favor, insira um número válido entre 1 e 10.")
} else {

    console.log(`Tabuada de ${numero}: `)
    for (let i = 1; i <= 10; i++) {
        console.log(`${i} x ${numero} = ${i * numero}`)
    }
}