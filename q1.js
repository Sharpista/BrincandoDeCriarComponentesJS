"use strict";

let criarComponentes1 = function (){
    //DIV
    let $q = document.querySelector('#q1')
    $q.style.backgroundColor="lightgrey"
    $q.style.width="175px"
    $q.style.height="175px"
    $q.style.border="15px solid black"
    $q.style.padding="10px"
    $q.style.margin="20px";
    $q.style.display = "block"
    //LABEL
    let $label = document.createElement("label")
    $label.textContent = "Menor : "
    let $label2 = document.createElement("label")
    $label2.textContent = "Maior : "
    let $label3 = document.createElement("label")
    $label3.textContent = "Resultado : "
    $label3.style.marginTop = "5px"
    $label3.style.display="inline-block"

    //INPUT
    let $input1 = document.createElement("input")
    let $input2 = document.createElement("input")
    let $input3 = document.createElement("input")

    $input1.type="number"
    $input2.type="number"
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
    $input1.id = "primeiro"
    $input2.id = "segundo"
    $input3.id = "resultado"
    $q.append($label)
    $label.append($input1)
    $q.append($label2)
    $label2.append($input2)
    $q.append($botao)
    $q.append($label3)
    $label3.append($input3)

    $botao.addEventListener("click", cliqueDoBotao)


}
function cliqueDoBotao() {
    let primeiroNumero = parseInt(document.getElementById("primeiro").value)
    let segundoNumero = parseInt(document.getElementById("segundo").value)
    let qtd = calcularQuantidadeEntreDoisNumero(primeiroNumero, segundoNumero)
    document.getElementById("resultado").value = qtd
}
function calcularQuantidadeEntreDoisNumero(num1, num2){

    if (validarCampos(num1, num2) != true){
        let qtd = 0;

        for (let i = num1 + 1; i < num2; i++){
            if(i % 2 === 0 && i % 3 === 0){
                qtd ++;
            }
        }
        return qtd;
    }

}
function validarCampos(num1, num2){
    if (num1.length != 0){

        return false;
    }
    else{
        window.alert("O primeiro campo não pode ficar vazio")
        return true;
    }
    if (num2.length != 0){

        return false;
    }
    else{
        window.alert("O segundo campo não pode ficar vazio")
        return  true;
    }

}

window.componentes.push(criarComponentes1)
