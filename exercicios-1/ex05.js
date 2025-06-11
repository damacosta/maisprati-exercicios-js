const prompt = require('../utils/prompt');

// Exercício 5 - Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade) utilizando if-else.

let peso = Number(prompt("Digite seu peso: ").replace(",","."))
let altura = Number(prompt("Digite seu altura: ").replace(",","."))

if (isNaN(peso) || isNaN(altura) || peso <=0 || altura <=0) {
    console.log("Por favor, insira valores válidos para peso e altura.")
} else {
    let imc = peso / (altura ** 2)
    console.log("Seu IMC é: " +imc.toFixed(1))

    if ( imc <= 18.5) {
        console.log("Abaixo do peso")
    } else if (imc >= 18.5 && imc <= 24.9) {
        console.log("Peso normal")
    } else if (imc >= 25 && imc <= 29.9) {
        console.log("Sobrepeso")
    } else if (imc > 30) {
        console.log("Obesidade")
    }
}