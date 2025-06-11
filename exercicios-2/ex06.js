//Exercício 6 - Implemente function memoize(fn) que armazene em cache chamadas anteriores de fn (por argumentos), retornando resultados instantâneos em repetidas invocações.

function memoize(fn) {
    const cache = {}

    return function(...args) {
        let key = JSON.stringify(args)

        if(cache[key]) {
            return cache[key]
        }
        const resultado = fn.apply(this, args)
        cache[key] = resultado
        return resultado
    }
}
