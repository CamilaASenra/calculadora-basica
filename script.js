var n1 = ""
var n2 = ""
var sinal = ""
var texto
var num

function limpar() {
    tela.innerHTML = ""
    n1 = ""
    n2 = ""
    sinal = ""
}

function operador(x) {
    op = x.innerText
    if (op == '-' && n1 == ''){
        n1 = op
    } else if (op == '-' && n1 != '' && sinal != '') {
        n2 = op
    } else {
        sinal = op
    }
    tela.innerHTML += op
}

function numero(x) {
    texto = x.innerText
    tela.innerHTML += texto
    if (sinal == ""){
        n1 += texto
    } else {
        n2 += texto
    }
}

function solucao() {
    if (sinal == '+'){
        var res = Number(n1) + Number(n2)
    } else if (sinal == '-'){
        var res = Number(n1) - Number(n2)
    } else if (sinal == '*'){
        var res = Number(n1) * Number(n2)
    } else if (sinal == '/'){
        var res = Number(n1) / Number(n2)
    } 
    tela.innerHTML = res
    n1 = res
    n2 = ''
    sinal = ''
}