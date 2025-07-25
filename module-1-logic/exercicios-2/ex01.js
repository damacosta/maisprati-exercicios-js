// Exercício 1 - Crie a função ehDataValida(dia, mes, ano) que retorne true se os valores formarem uma data real (meses de 28–31 dias, ano bissexto para fevereiro) e false caso contrário.

function ehDataValida(dia, mes, ano) {
    if (!(dia > 0)) {
        return false
    }
    if (!(mes >= 1 && mes <= 12)) {
        return false
    }
    if (!(ano > 0)) {
        return false
    }

    let diaNoMes

    if (mes === 2)
        if(ano % 4 === 0 && (ano % 100 !== 0 || ano % 400 === 0)) {
            diaNoMes = 29
        } else {
            diaNoMes = 28
    } else if (mes === 4 || mes === 6 || mes === 9 || mes === 11) {
        diaNoMes = 30
    } else {
        diaNoMes = 31
    }

    if (dia > diaNoMes) {
        return false
    }

    return true
}