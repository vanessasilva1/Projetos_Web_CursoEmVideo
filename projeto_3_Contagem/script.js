function contar() {
    let inicio = document.getElementById('txtini')
    let fim = document.getElementById('txtfim')
    let passo = document.getElementById('txtpasso')
    let res = document.getElementById('res')
    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Impossível contar'
    } else {
        res.innerHTML = 'Contando: <br>'
        let ini = Number(txtini.value)
        let fim = Number(txtfim.value)
        let passo = Number(txtpasso.value)
        if (passo <= 0) {
            window.alert('Passo inválido! Considerando PASSO 1')
            passo = 1
        }
        if (ini < fim) {
            // contagem crescente
            for(let cont = ini; cont <= fim; cont += passo) {
                res.innerHTML += `${cont} \u{1F92D} `
            }
        } else {
            //contagem decrescente
            for(let cont = ini; cont >= fim; cont -= passo) {
                res.innerHTML += `${cont} \u{1F92D} `
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}