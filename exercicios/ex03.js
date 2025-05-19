const prompt = require('../utils/prompt');

// Exercício 3 - Implemente um programa que recebe uma nota de 0 a 10 e classifica como "Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if.

const nota = parseInt((prompt('Digite sua nota:')))

if(isNaN(nota) || nota < 0 || nota > 10) {
    console.log ("😕 Opa! Isso não parece ser uma nota. Digite um número, como 0 a 10.")
} else {
    if (nota >= 7) {
        console.log("Aprovado")
    } else if (nota >= 5 && nota < 7) {
        console.log("Recuperação")
    } else {
        console.log("Reprovado")
    }
}