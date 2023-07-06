function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >=0 && hora <12) {
        //dia
        img.src = 'imagens/manha.png'
        document.body.style.background = '#b0dffe'
    } else if (hora >= 12 && hora < 18) {
        //tarde
        img.src = 'imagens/tarde.png'
        document.body.style.background = '#fd7801'
    } else {
        //noite
        img.src = 'imagens/noite.png'
        document.body.style.background = '#022b5f'
    }
}