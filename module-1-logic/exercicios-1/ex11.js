const prompt = require('../utils/prompt');

// Exercício 11 - Escreva um programa que solicita ao usuário 5 números e calcula a soma total utilizando um loop for.

let soma = 0;

for (let i = 1; i <= 5; i++) {
    let numero = parseFloat(prompt(`Digite o ${i}º número: `).replace(",", "."))

    if (isNaN(numero)) {
        console.log("Por favor, insira um número válido.")
        i--
    } else {
        soma += numero
    }
}

console.log(`A soma total é: ${soma}`)
