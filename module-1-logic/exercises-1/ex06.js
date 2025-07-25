const prompt = require('../utils/prompt');

// Exercício 6 - Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo: Isósceles, escaleno ou eqüilátero.

let a = parseFloat(prompt("Digite o valor do lado A: ").replace(",", "."))
let b = parseFloat(prompt("Digite o valor do lado B: ").replace(",", "."))
let c = parseFloat(prompt("Digite o valor do lado C: ").replace(",", "."))

if (isNaN(a) || isNaN(b) || isNaN(c) || a <= 0 || b <= 0 || c <= 0) {
    console.log("Por favor, insira valores válidos e positivos para os lados.")
} else {
    if ( a + b > c && a + c > b && b + c > a) {
        console.log("Os valores formam um triângulo!")

        if ( a === b && b === c) {
            console.log("É um triângulo equilátero.")
        } else if ( a === b || a === c || b === c) {
            console.log("É um triângulo isósceles.")
        } else {
            console.log("É um triângulo escaleno.")
        }
    } else {
        console.log("Não é um triângulo.")
    }
}
