const prompt = require('../utils/prompt');

// Exercício 10 - Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes.

let numero = parseInt(prompt("Digite um número para ser exibido 10 vezes:"))

if (isNaN(numero)) {
    console.log("Por favor, insira um número válido.")
} else {
    for (let i = 1; i <= 10; i++) {
        console.log(`${i}º vez: ${numero}`)
    }

    console.log("Pronto! O número foi exibido 10 vezes.");
}  