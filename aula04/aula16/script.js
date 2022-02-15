let n = document.getElementById('txtn')
let lista = document.getElementById('add')  
let res = document.getElementById('res')
let valores = [] 

function adicionar() {
    
    if (n.value.length == 0 || Number(n.value) > 100 || Number(n.value) < 0) {
        window.alert('Digite um número de 1 a 100!')
    } else if {

    }  else {
        valores.push(Number(n.value)) 
        let item = document.createElement('option')
        item.text = `Valor ${n.value} adicionado`
        lista.appendChild(item)
    }
    n.value = " "
    n.focus()
}