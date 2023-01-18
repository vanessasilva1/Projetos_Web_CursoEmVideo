let num = document.querySelector('input#txtnum')
let valor = document.getElementById('selvalor')
let res = document.getElementById('res')
let array = []

function eUmNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function estaNaLista(n, lista) {
    if (lista.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if (eUmNumero(num.value) && !estaNaLista(num.value, array)) {
        array.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        valor.appendChild(item)
        res.innerHTML = ''
    } else {
        window.alert('[ERRO]! Valor inválido ou já presente na lista')
    }
    num.value = ''
    num.focus()
}

/* Outra forma 

function adicionar() {
    if (num.value.length == 0 || num.value < 1 || num.value > 100) {
        window.alert('[ERRO]! Adicione um valor válido a lista, entre 1 e 100')
    } else {
        let numero = Number(num.value)
        let item = document.createElement('option')
        item.text = `Valor ${numero} adicionado`
        valor.appendChild(item)
    }
}*/

function finalizar() {
    let maior, menor, soma = 0, media = 0
    let total = array.length

    if (array.length == 0) {
        window.alert('Adicione valores antes de finalizar!')
    } else {
        array.sort((a, b) => a-b)
        maior = array[0]
        menor = array.at(-1)
        
        for(let i = 0; i < array.length; i++) {
            soma += array[i]
        }
        
        media = soma / total

        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, foram ${total} número(s) cadastrado( s).</p>`
        res.innerHTML += `<p>O menor valor informado é ${maior}.`
        res.innerHTML += `<p>O maior valor informado é ${menor}.</p>`
        res.innerHTML += `<p>A soma dos valores cadastrados é ${soma}.</p>`
        res.innerHTML += `A média dos valores cadastrados é ${media}.`
    }
}
