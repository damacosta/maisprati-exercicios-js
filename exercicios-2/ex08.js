//Exercício 8 - Em vendas = [{ cliente, total }, …], use reduce para gerar um objeto onde cada chave é um cliente e o valor é a soma de todos os seus total.

let vendas = [
    { cliente: "Julia", total: 100 },
    { cliente: "Tiago", total: 50 },
    { cliente: "Julia", total: 200 },
    { cliente: "Carlos", total: 200 },
    { cliente: "Roberta", total: 155 },
    { cliente: "Tiago", total: 30 }

]

function somarVendasPorCliente(listaDeVendas) {
    return listaDeVendas.reduce((acumulador, vendaAtual) => {
        let cliente = vendaAtual.cliente;
        let total = vendaAtual.total;

        if(!acumulador[cliente]) {
            acumulador[cliente] = 0
        }

        acumulador[cliente] += total
        return acumulador;
    
    }, {});
}

console.log((somarVendasPorCliente)(vendas));
