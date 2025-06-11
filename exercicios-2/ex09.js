// Exercício 9 - Escreva duas funções:
// ○ paresParaObjeto(pares) recebe um array de pares [ [chave, valor], … ] e retorna o objeto equivalente.
// ○ objetoParaPares(obj) faz o inverso, retornando um array de pares.

function paresParaObjeto(pares) {
    
    return pares.reduce((acumulador, parAtual) => {
        let chave = parAtual[0]
        let valor = parAtual[1]

        acumulador[chave] = valor

        return acumulador

}, {})
}

function objetoParaPares(obj) {
    return Object.entries(obj)


} 

let paresDeExemplo = [
    ["nome1", "Julia"],
    ["idade1", 30],
    ["cidade1", "São Paulo"],
    ["nome2", "Carlos"],
    ["idade2", 25],
    ["cidade2", "Rio de Janeiro"]
];
console.log("Resultado de paresParaObjeto:", paresParaObjeto(paresDeExemplo));


let objetoDeExemplo = { nome: "Alice", idade: 30, cidade: "São Paulo" };
console.log("Resultado de objetoParaPares:", objetoParaPares(objetoDeExemplo));