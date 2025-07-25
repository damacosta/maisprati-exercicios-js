// Exercício 3 - Dada uma string (ex.: "olá olá mundo mundo"), use if/else e for para extrair todas as palavras únicas e exibi-las em um array.

let palavra = "olá olá mundo mundo"
let todasAsPalavras = palavra.split(" ")
let palavrasUnicas = []

for (let i = 0; i < todasAsPalavras.length; i++) {
    let palavraAtual = todasAsPalavras[i]

    if (!palavrasUnicas.includes(palavraAtual)) {
        palavrasUnicas.push(palavraAtual)
    }
}

console.log(palavrasUnicas)