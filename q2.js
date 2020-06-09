"use strict";

let criarComponentes2 = function (){
    //DIV
    let $q = document.querySelector('#q2')
    $q.style.backgroundColor="lightgrey"
    $q.style.width="175px"
    $q.style.height="175px"
    $q.style.border="15px solid black"
    $q.style.padding="10px"
    $q.style.margin="20px";
    $q.style.display = "block"
    //LABEL
    let $label = document.createElement("label")
    $label.textContent = "Calcular Fatorial : "
    let $label3 = document.createElement("label")
    $label3.textContent = "Resultado : "
    $label3.style.marginTop = "5px"
    $label3.style.display="inline-block"

    //INPUT
    let $input1 = document.createElement("input")
    let $input3 = document.createElement("input")

    $input1.type="number"
    $input3.type="text"
    //BOTAO
    let $botao = document.createElement("button")
    $botao.style.marginTop = "5px"
    $botao.style.marginBottom = "5px"
    $botao.display="inline-block"
    $botao.innerText = "Ir !"
    $botao.style.width="45px"
    $botao.style.height="20px"
    //CONFIGURAÇÃO DA DIV
    $input1.id = "inpt"
    $input3.id = "res"
    $q.append($label)
    $label.append($input1)
    $q.append($botao)
    $q.append($label3)
    $label3.append($input3)

    $botao.addEventListener('click', clique)

}
function  clique() {
    let input = parseInt(document.getElementById("inpt").value)
    let res = calcularFatorial(input)
    document.getElementById("res").value = JSON.stringify(res)
}
function calcularFatorial(num){
    let inicio = Math.floor(new Date().getTime())
    let resultado = 1;
    for (let i = 1 ; i <= num ; i++){
        resultado *= i;
    }
    let fim = Math.floor(new Date().getTime())
    let res = fim - inicio

    let obj = num + "!" + "=" + resultado + " ms : " + res
    return obj

}
window.componentes.push(criarComponentes2)