function  contar() {
    let nI = document.getElementById('nI')
    let nInicio = Number(nI.value)
    let nF = document.getElementById('nF')
    let nFim = Number(nF.value)
    let nS = document.getElementById('nS')
    let nSalto = Number(nS.value)
    let res = document.getElementById('res')

    if (nI.value.length == 0 || nF.value.length == 0 || nS.value.length == 0) {
        window.alert('Preencha os Campos Requeridos!')
    } else {
        res.innerHTML = ('Contando: ')
        
        if (nInicio < nFim) {
           for (let c = nInicio; c <= nFim; c+=nSalto) {
            res.innerHTML += ` ${c} \u{1F449}`
        }
    } else {
        for (let c = nInicio; c >= nFim; c-=nSalto) {
            res.innerHTML += ` ${c} \u{1F449}`
        }
    }
         
        res.innerHTML += `\u{1F3C1}`
    }


    
} 




   
