"use strict";

let criarComponentes5 = function (){
    //DIV
    let $q = document.querySelector('#q5')
    $q.style.backgroundColor="lightgrey"
    $q.style.width="175px"
    $q.style.height="190px"
    $q.style.border="15px solid black"
    $q.style.padding="10px"
    $q.style.margin="20px";
    $q.style.display = "inline-block"
    //LABEL
    let $label = document.createElement("label")
    $label.innerText = "LADO A : "
    let $label2 = document.createElement("label")
    $label2.innerText = "LADO B : "
    let $label3 = document.createElement("label")
    $label3.innerText = "LADO C : "
    let $label4 = document.createElement("label")
    $label4.innerText = "RESPOSTA : "
    $label4.style.display = "block"


    //INPUT
    let $input1 = document.createElement("input")
    let $input2 = document.createElement("input")
    let $input3 = document.createElement("input")
    let $input4 = document.createElement('input')


    $input1.type="number"
    $input2.type="number"
    $input3.type="number"
    $input4.type = "text"

    //BOTAO
    let $botao = document.createElement("button")
    $botao.style.marginTop = "5px"
    $botao.style.marginBottom = "5px"
    $botao.display="inline-block"
    $botao.innerText = "Ir !"
    $botao.style.width="70px"
    $botao.style.height="20px"
    //CONFIGURAÇÃO DA DIV
    $input1.id = "lado1"
    $input2.id = "lado2"
    $input3.id = "lado3"
    $input4.id = "resposta"

    $q.append($label)
    $label.append($input1)
    $q.append($label2)
    $label2.append($input2)
    $q.append($input3)
    $q.append($label3)
    $label3.append($input3)
    $q.append($botao)
    $q.append($label4)
    $label4.append($input4)



    $botao.addEventListener("click",click2  )


}
function click2() {
    let a = document.getElementById("lado1").value
    let b = document.getElementById("lado2").value
    let c = document.getElementById("lado3").value
    let fun = qualTipoDeTriangulo(a,b,c)
    let exit = document.getElementById("resposta").value = fun

}
function qualTipoDeTriangulo(a,b,c){

    if(a === b && b === c){
        return 'Equilatero'
    }
    else if(a != b && b != c && c != a){
        return 'Escaleno'
    }
    return 'Isoceles'
}
window.componentes.push(criarComponentes5)
