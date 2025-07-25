const prompt = require('../utils/prompt');

// Exercício 01 - Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar utilizando uma estrutura de controle if.

const numero = prompt('Digite um número inteiro: ')
const numeroInteiro = parseInt(numero)

  if (isNaN(numeroInteiro)) {
    console.log("Você não digitou um número válido")
  } else if (numeroInteiro % 2 == 0) {
   console.log ("O número é par")
  } else {
    console.log ("O número é ímpar")
  }

  