function verificar() {
    var data = new Date()
    var anoA = data.getFullYear()
    var anoP = document.getElementById('ano') 
    var res = document.getElementById('res')

    if (anoP.value.length < 4 || anoP.value > anoA) {
        alert('Ano de nascimento inválido! Digite Novamente!')
    } else {
        var idade = anoA - Number(anoP.value)
        var sexP = document.getElementsByName('radsex')
        var gen = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        img.style.width = '250px'
        if (sexP[0].checked) {
            gen = 'Homem'
            if (idade >= 0 && idade <= 10) {
                img.setAttribute('src', 'menino.png')
            } else if (idade < 21) {
                img.setAttribute('src', 'garoto.png')
            } else if (idade < 60) {
                img.setAttribute('src', 'homem.png')
            } else {
                img.setAttribute('src', 'idoso.png')
            }
        } else if (sexP[1].checked) {
            gen = 'Mulher'
            if (idade >= 0 && idade <= 10) {
                img.setAttribute('src', 'menina.png')
            } else if (idade < 21) {
                img.setAttribute('src', 'garota.png')
            } else if (idade < 60) {
                img.setAttribute('src', 'mulher.png')
            } else {
                img.setAttribute('src', 'idosa.png')
            }
        }
    } 

    res.innerHTML = `Detectamos ${gen} de ${idade} anos`
    res.appendChild(img)
    
}