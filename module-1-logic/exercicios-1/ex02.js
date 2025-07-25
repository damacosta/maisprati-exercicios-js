const prompt = require('../utils/prompt');

// Exercício 2 - Crie um programa que classifica a idade de uma pessoa em categorias (criança, adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de controle if-else.

const idade = parseInt((prompt('Digite a sua idade: ')))

    if (isNaN(idade)) {
        console.log("Não é um número válido. Por favor, digite um número inteiro.")
    } else {
        if (idade <= 12) {
        console.log("Você é criança!")
    } else if (idade >= 13 && idade <= 17) {
        console.log("Você é adolescente!")
    } else if (idade >= 18 && idade <= 59) {
        console.log("Você é adulto!")
    } else if (idade >= 60) {
        console.log("Você é idoso!")
    }
}