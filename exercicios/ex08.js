const prompt = require('../utils/prompt');

// Exercício 8 - Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais) e escrevê-los em ordem crescente.

let valor1 = parseFloat(prompt("Digite o primeiro valor: ").replace(",","."))
let valor2 = parseFloat(prompt("Digite o segundo valor: ").replace(",","."))


if ( valor1 < valor2) {
    console.log(`Ordem crescente: ${valor1}, ${valor2}`)
} else {
    console.log(`Ordem crescente: ${valor2}, ${valor1}`)
}