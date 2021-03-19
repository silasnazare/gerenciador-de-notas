let n = 1
let nome = document.querySelector('#nome')
let primeiraNota = document.querySelector('#primeiraNota')
let segundaNota = document.querySelector('#segundaNota')
let frequencia = document.querySelector('#frequencia')
let provaFinal = document.querySelector('#provaFinal')

let form = document.querySelector('.form')

document.querySelector('#btnCalcularMedia').addEventListener('click', function(event) {
    event.preventDefault()
    let tr = document.createElement('tr')
    let inputs = [n++, nome.value, primeiraNota.value, segundaNota.value, frequencia.value, provaFinal.value]

    inputs.forEach(function(input) {
        let td = document.createElement('td')
        td.textContent = input
        tr.appendChild(td)
    })

    let td = document.createElement('td')
    td.textContent = (parseFloat(inputs[2]) + parseFloat(inputs[3]))  / 2
    tr.appendChild(td)

    let tbody = document.querySelector('#tbodyCalcularMedia')

    tbody.appendChild(tr)

    limpaFormulario()
})

function limpaFormulario() {
    nome.value = ''
    primeiraNota.value = ''
    segundaNota.value = ''
    frequencia.value = ''
    provaFinal.value = ''
}