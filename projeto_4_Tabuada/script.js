function gerar() {
    let num = document.getElementById('txtnum')
    let tabuada = document.getElementById('seltab')

    if (num.value.length == 0) {
        window.alert('Impossível calcular! Por favor, digite um número!')
    } else {
        let numero = Number(num.value) //CONVERTENDO
        let c = 1
        tabuada.innerHTML = ''
        while (c <= 10) {
            let item = document.createElement('option')
            item.text = `${numero} x ${c} = ${numero*c}`
            item.value = `tabuada${c}`
            tabuada.appendChild(item) 
            c++
        }
    }
}