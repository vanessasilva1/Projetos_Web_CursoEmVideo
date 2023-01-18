function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        img.src = 'fotoManha.png'
        document.body.style.background = '#FDC88B'
    } else if (hora >= 12 && hora <= 18) {
        img.src = 'fotoTarde.png'
        document.body.style.background = '#F1A188'
    } else {
        img.src = 'fotoNoite.png'
        document.body.style.background = '#2F5A9E'
    }
}
