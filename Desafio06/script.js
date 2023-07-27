var valores = []

function adicionar() {
    var n = document.getElementById(`txtn`)
    var an = document.getElementById(`selana`)

    if (n.value.length == 0 || n.value > 100 || n.value <= 0) {
        window.alert(`Valor inválido ou já encontrado na lista`)
    } else {
        var D = Number(n.value)
        valores.push(D)
        var item = document.createElement(`option`)
        item.text = `Valor ${D} adicionado`
        an.appendChild(item)
        res.innerHTML = ``
    }
    n.value = ``
    n.focus() 
}

function finalizar() {
    var res = document.getElementById(`res`)

    if (valores.length == 0) {
        window.alert(`Adicione valores antes de finalizar`)
    } else {
        var tot = valores.length
        var maior = valores[0]
        var menor = valores[0]
        var soma = 0
        var media = 0
        for(var pos in valores) {
            soma += valores[pos]
            media = soma / tot
            if (valores[pos] > maior) {
                maior = valores[pos]
            } if (valores[pos] < menor) {
                menor = valores[pos]
            }
        }

        res.innerHTML = ``
        res.innerHTML += `<p>O total de números cadastrados é ${tot}.</p>`
        res.innerHTML += `<p>O maior valor adicionado é ${maior} e o menor é ${menor}.</p>`
        res.innerHTML += `<p>A soma de todos os valores é igual a ${soma}.</p>`
        res.innerHTML += `<p>A média dos valores é ${media}.</p>`
    }
}
