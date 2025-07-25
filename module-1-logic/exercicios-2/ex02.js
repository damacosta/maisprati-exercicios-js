const prompt = require('../utils/prompt');

//Exercício 2 - Escreva um script que gere um número aleatório de 1 a 100 e peça ao uuário, para adivinhar. Use while para repetir até acertar, contando tentativas e exibindo “mais alto” ou “mais baixo” a cada palpite errado


let numeroSecreto = Math.floor(Math.random() * 100) + 1
let palpiteUsuario
let tentativas = 0

console.log("Adivinhe o número entre 1 e 100!")

do {
    palpiteUsuario = parseInt(prompt('Digite seu palpite: '))
    tentativas++

    if (palpiteUsuario < numeroSecreto) {
        console.log('Mais alto!')
    } else if (palpiteUsuario > numeroSecreto) {
        console.log('Mais baixo!')
    }

} while (palpiteUsuario !== numeroSecreto)

    console.log(`Parabéns! Você acertou o número ${numeroSecreto} em ${tentativas} tentativas. `)
