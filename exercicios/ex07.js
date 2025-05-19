const prompt = require('../utils/prompt');

// Exercício 7 - As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs compradas, calcule e escreva o valor total da compra.

let numero = parseFloat(prompt("🍎 Digite o número de maçãs compradas: ").replace(",","."))

if (isNaN(numero) || numero <= 0) {
    console.log("Por favor, insira um número válido de maçãs. O valor deve ser positivo e maior que zero.")
} else {
    if (numero >= 12) {
        console.log(`O preço total será: R$ ${(numero * 0.25).toFixed(2)}`)
    } else {
        console.log(`O preço total será: R$ ${(numero * 0.30).toFixed(2)}`)
    }
}
