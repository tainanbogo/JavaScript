function  carregar() {
    var msg = window.document.getElementById("msg")
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    //var hora = 19

    if (hora >= 0 && hora < 12) {
        msg.innerHTML = `Agora são ${hora} horas. Bom dia!`
        img.src = 'manha.png' 
        document.body.style.background = '#f5c356'
        
    } else if (hora >= 12 && hora < 18) {
        msg.innerHTML = `Agora são ${hora} horas. Boa Tarde!` 
        img.src = 'tarde.png' 
        document.body.style.background = '#87c12e'
        
    } else {
        msg.innerHTML = `Agora são ${hora} horas. Boa Noite!` 
        img.src = 'noite.png' 
        document.body.style.background = 'black'
    }
}