var n1
var n2
var se 

const divs = document.querySelectorAll('.botao')
const container = document.getElementById('tela')

function limpar(){
    tela.innerHTML = ""
    n1 = ""
    n2 = ""
    se = ""
}

divs.forEach(div => {
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
})


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

var dois = window.document.getElementById("dois")
dois.addEventListener("click", clicar2);

function clicar2(){
    tela.innerHTML += "2"
    dois.style.color = "white"
    if (se == ""){
        n1 += "2"
    } else {
        n2 += "2"
    }    
}

var tres = window.document.getElementById("tres")
tres.addEventListener("click", clicar3);
function clicar3(){
    tela.innerHTML += "3"
    tres.style.color = "white"
    if (se == ""){
        n1 += "3"
    } else {
        n2 += "3"
    }    
}

var quatro = window.document.getElementById("quatro")
quatro.addEventListener("click", clicar4);
function clicar4(){
    tela.innerHTML += "4"
    quatro.style.color = "white"
    if (se == ""){
        n1 += "4"
    } else {
        n2 += "4"
    }    
}

var cinco = window.document.getElementById("cinco")
cinco.addEventListener("click", clicar5);
function clicar5(){
    tela.innerHTML += "5"
    cinco.style.color = "white"
    if (se == ""){
        n1 += "5"
    } else {
        n2 += "5"
    }    
}

var seis = window.document.getElementById("seis")
seis.addEventListener("click", clicar6);
function clicar6(){
    tela.innerHTML += "6"
    seis.style.color = "white"
    if (se == ""){
        n1 += "6"
    } else {
        n2 += "6"
    }    
}

var sete = window.document.getElementById("sete")
sete.addEventListener("click", clicar7);
function clicar7(){
    tela.innerHTML += "7"
    sete.style.color = "white"
    if (se == ""){
        n1 += "7"
    } else {
        n2 += "7"
    }    
}

var oito = window.document.getElementById("oito")
oito.addEventListener("click", clicar8);
function clicar8(){
    tela.innerHTML += "8"
    oito.style.color = "white"
    if (se == ""){
        n1 += "8"
    } else {
        n2 += "8"
    }    
}

var nove = window.document.getElementById("nove")
nove.addEventListener("click", clicar9);
function clicar9(){
    tela.innerHTML += "9"
    nove.style.color = "white"
    if (se == ""){
        n1 += "9"
    } else {
        n2 += "9"
    }    
}

var zero = window.document.getElementById("zero")
zero.addEventListener("click", clicar0);
function clicar0(){
    tela.innerHTML += "0"
    zero.style.color = "white"
    if (se == ""){
        n1 += "0"
    } else {
        n2 += "0"
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
