var n1 = ""
var n2 = ""
var sinal = ""
var texto
var num
var controle = 0

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
    } else if ((op == '-' && n1 == '-') || (op == '-' && n2 == '-') || (op != '-' && n1 == '') || (op != '-' && sinal != '' && n2 =='')){
        alert ("Operador inválido, tente outro!")
        op = ''
    } else if (op == '-' && n1 != '' && sinal != '' && n2 == '') {
        n2 = op
    } else if ((n1 != '' && n2 != '') || (op == '-' && n1 != '' && sinal != '' && n2 != '')){
        solucao()
        sinal = op
    } else {
        sinal = op
    }
    tela.innerHTML += op
}

function numero(x) {
    texto = x.innerText
    if (controle == 1 && sinal == ''){
        limpar()
        controle = 0
    }
    if (sinal == ''){
        n1 += texto
    } else {
        n2 += texto
    }
    tela.innerHTML += texto
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
    controle = 1
    n1 = res
    n2 = ''
    sinal = ''
    if (Number.isNaN(res) || res == undefined){
        tela.innerHTML = 'Erro!'
    }
}