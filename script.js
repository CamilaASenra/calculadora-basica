var n1 = ""
var n2 = ""
var sinal = ""
var texto
var num
//const divs = document.querySelectorAll('.botao')
//const container = document.getElementById('tela')

function limpar() {
    tela.innerHTML = ""
    n1 = ""
    n2 = ""
    sinal = ""
}

//botao.addEventListener("click", numero(this))

function operador(x) {
    op = x.innerText
    tela.innerHTML += op
    sinal = op
}

function numero(x) {
    texto = x.innerText
    tela.innerHTML += texto
    if (sinal == ""){
        n1 += texto
    } else {
        n2 += texto
    }
    alert (n1)
    alert (n2)
}








/*divs.forEach(div => {
            div.addEventListener('click', function() {
                // 1. Captura o valor (texto) da div clicada
                const texto = this.innerText;
                // 2. Cria um novo elemento <p>
                const novoParagrafo = document.createElement('p');
                // 3. Define o texto do parágrafo
                novoParagrafo.innerText = texto;
                // 4. Adiciona o parágrafo ao container no HTML
                container.appendChild(novoParagrafo)
                if (se == ""){
                    n1 += texto
                } else {
                    n2 += texto
                }
            })
})*/


/*


var um = window.document.getElementById("um")
um.addEventListener("click", clicar1);
function clicar1(){
    tela.innerHTML += "1"
    um.style.color = "white"
    if (se == ""){
        n1 += "1"
    } else {
        n2 += "1"
    }
}

var virg = window.document.getElementById("virg")
virg.addEventListener("click", clicarv);
function clicarv(){
    tela.innerHTML += "."
    virg.style.color = "white"
    if (se == ""){
        n1 += "."
    } else {
        n2 += "."
    }    
}

var soma = window.document.getElementById("soma")
soma.addEventListener("click", clicars)
function clicars(){
    se = "somar"
    tela.innerHTML += "+"
    soma.style.color = "white"
}

var multi = window.document.getElementById("mult")
multi.addEventListener("click", clicarm)
function clicarm(){
    se = "multiplicar"
    tela.innerHTML += "*"
    multi.style.color = "white"
}

var div = window.document.getElementById("div")
div.addEventListener("click", clicard)
function clicard(){
    se = "dividir"
    tela.innerHTML += "/"
    div.style.color = "white"
}

var sub = window.document.getElementById("sub")
sub.addEventListener("click", clicarsub)
function clicarsub(){
    tela.innerHTML += "-"
    sub.style.color = "white"
    if (n1 == ""){
        n1 += "-"
    } else if (se == ""){
        se = "subtracao"
    } else if (n2 == ""){
        n2 += "-"
    }
}         

var igual = window.document.getElementById("igual")
igual.addEventListener("click", clicari)
function clicari(){
    igual.style.color = "white"
    if (se == "somar"){
        var res = Number(n1) + Number(n2)
        tela.innerHTML = res
        n1 = res
        n2 = ""
        se = ""
    } else if (se == "multiplicar"){
        var res = Number(n1) * Number(n2)
        tela.innerHTML = res
        n1 = res
        n2 = ""
        se = ""
    } else if (se == "dividir"){
        var res = Number(n1) / Number(n2)
        tela.innerHTML = res
        n1 = res
        n2 = ""
        se = ""
    } else if (se == "subtracao"){
        var res = Number(n1) - Number(n2)
        tela.innerHTML = res
        n1 = res
        n2 = ""
        se = ""
    }
}*/
