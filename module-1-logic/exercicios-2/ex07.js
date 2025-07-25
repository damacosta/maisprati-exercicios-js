//Exercício 7 - Dado um array produtos = [{ nome, preco }, …], crie uma função que retorne um novo array apenas com os nomes, ordenados por preço crescente, usando map, sort.

let produtosExemplo = [
    {nome: "Lápis", preco: 2.50}, 
    {nome: "Caderno", preco: 35.00}, 
    {nome: "Mochila", preco: 80.00},
    {nome: "Caneta", preco: 2.00 }
]

function ordenarNomesPorPreco(listaDeProdutos){
    let copiaProdutos = [...listaDeProdutos]
    copiaProdutos.sort((a, b) => a.preco - b.preco)
    
    let nomesOrdenados = copiaProdutos.map(produto => produto.nome)

    return nomesOrdenados
}

console.log(ordenarNomesPorPreco(produtosExemplo));