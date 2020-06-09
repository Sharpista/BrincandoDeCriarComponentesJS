"use strict";

let criarComponentes4 = function (){
    //DIV
    let $q = document.querySelector('#q4')
    $q.style.backgroundColor="lightgrey"
    $q.style.width="175px"
    $q.style.height="175px"
    $q.style.border="15px solid black"
    $q.style.padding="10px"
    $q.style.margin="20px";
    $q.style.display = "inline-block"
    //LABEL
    let $label = document.createElement("label")
    $label.innerText = "Valor Minimo : "
    let $label2 = document.createElement("label")
    $label2.textContent = "Valor Máximo : "

    //INPUT
    let $input1 = document.createElement("input")
    let $input2 = document.createElement("input")
    let $input3 = document.createElement("input")


    $input1.type="number"
    $input2.type="number"
    $input3.type = "text"
    //BOTAO
    let $botao = document.createElement("button")
    $botao.style.marginTop = "5px"
    $botao.style.marginBottom = "5px"
    $botao.display="inline-block"
    $botao.innerText = "Ir !"
    $botao.style.width="45px"
    $botao.style.height="20px"

    //CONFIGURAÇÃO DA DIV
    $input1.id = "primeiroInput"
    $input2.id = "segundoInput"
    $input3.id = "saida"
    $q.append($label)
    $label.append($input1)
    $q.append($label2)
    $label2.append($input2)
    $q.append($botao)
    $q.append($input3)


    $botao.addEventListener("click",click  )


}

function click() {
    let num1 = parseInt(document.getElementById("primeiroInput").value)
    let num2 = parseInt(document.getElementById("segundoInput").value)
    let l = calcularNumeros(num1,num2)
    let res = document.getElementById("saida").value = JSON.stringify(l)

}

function calcularNumeros(num1, num2){

    let aleatorio = [num1,num2]
    let valor = num1 + num2
    let qtd = 0
    for (let i = num1; i < num2; i++ ){
        let n = Math.floor(Math.random() * num2)
        if(aleatorio.includes(n) === false){
            aleatorio.push(n)
            qtd ++
        }
    }
    let l = aleatorio.sort((x,y) => x - y)
    return Object.keys(l)



}


window.componentes.push(criarComponentes4)
