const prompt = require('../utils/prompt');

//Exercício 13 - Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer a média aritmética desses números.

let soma = 0;
let quantidade = 0;
let numero;

do {
    numero = parseFloat(prompt("Digite um número (digite 0 para terminar): ").replace(",", "."));
    
    if (!isNaN(numero) && numero !== 0) {
        soma += numero;
        quantidade++;
    } else if (numero !== 0) {
        console.log("Por favor, insira um número válido.");
    }
    
} while (numero !== 0);

if (quantidade > 0) {
    let media = soma / quantidade;
    console.log(`A média dos números inseridos é: ${media.toFixed(2)}`);
} else {
    console.log("Nenhum número válido foi inserido para calcular a média.");
}