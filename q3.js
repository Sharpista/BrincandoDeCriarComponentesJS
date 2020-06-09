"use strict";

let criarComponentes3 = function (){
    //DIV
    let $q = document.querySelector('#q3')
    $q.style.backgroundColor="lightgrey"
    $q.style.width="250px"
    $q.style.height="650px"
    $q.style.border="15px solid black"
    $q.style.padding="10px"
    $q.style.margin="20px";
    $q.style.display = "block"

    // h1
    let $h1= document.createElement('h1')
    $h1.innerText = "Relatorio"
    //ul
    let $table = document.createElement('table')
    $table.id = "lista-alunos"
    let $tbody = document.createElement('tbody')
    let $footer = document.createElement('footer')
    $footer.id="f1"
    let $footer1 = document.createElement('footer')
    $footer1.id="f2"



    //BOTAO
    let $botao = document.createElement("button")
    $botao.style.marginTop = "5px"
    $botao.style.marginBottom = "5px"
    $botao.display="inline-block"
    $botao.innerText = "Ready !"
    $botao.style.width="65px"
    $botao.style.height="20px"
    //CONFIGURAÇÃO DA DIV
    $q.append($h1)
    $q.append($botao)
    $q.append($table)
    $table.append($tbody)
    $q.appendChild($footer)
    $q.appendChild($footer1)


    $botao.addEventListener('click', criarDicionarioDeAlunos)

}
class Aluno{
    constructor(nr, nota, situacao) {
        this.nr = nr;
        this.nota = nota;
        this.situacao = situacao;
    }
}

function criarDicionarioDeAlunos(){
    let lista = []
    const qtdAlunos = 20
    let aprovados = 0;
    for (let i= 1 ; i <= qtdAlunos; i++){
        let nota = Math.floor(Math.random() * 101)
        let situacao = ''

        if (nota > 60){
            situacao = "APROVADO"
            aprovados ++
        }else{
            situacao = "REPROVADO"
        }
        let aluno = new Aluno(i, nota, situacao)
        lista.push(aluno)
    }
    let reprovados = qtdAlunos - aprovados
    let porcentagemDeAprovados = (aprovados / qtdAlunos) * 100
    let porcentagemReprovados = (reprovados / qtdAlunos) * 100

    let $tbody = document.querySelector('tbody')
    lista.forEach(function (relatorio) {
        let $tr = document.createElement('tr')
        for (let $obj in relatorio){
            let $td = document.createElement('td')
            $td.innerHTML = relatorio[$obj]
            $tr.appendChild($td)
        };
        $tbody.appendChild($tr)
    })

    let $footer1 = document.getElementById('f1')
    let $footer2 = document.getElementById('f2')

    $footer1.innerText = `APROVADOS: ${aprovados} (${porcentagemDeAprovados.toFixed()}%)`
    $footer2.innerText = `REPROVADOS: ${reprovados} (${porcentagemReprovados.toFixed()}%)`
}

window.componentes.push(criarComponentes3)
































































