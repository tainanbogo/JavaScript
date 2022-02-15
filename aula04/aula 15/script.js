function  calcular() {
    var numero = document.getElementById('number')
    var tab = document.getElementById('seltab')
    

    if(numero.value.length == 0) {
        window.alert('Por favor digite um número')
    } else {
        var n = Number(numero.value)
        let contador = 1
        tab.innerHTML = ''
        while (contador <= 10) {
            let item = document.createElement('option')
            item.text = `${n} * ${contador} = ${n * contador}`
            tab.appendChild(item)
            contador++
        }
    }








    /*while (contador <= 10) {
        var contador = 1
        res.innerHTML = (`${n} x ${contador} = ${n * contador}`)
        contador++
    }*/

    

}