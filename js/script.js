window.onload = function(){
    var numeromisterioso = Math.floor(Math.random() * 101);
    var chuteDoJogador = 0;
    var tentativasRestantes = 10;
    var tentativas = 0;
    var mensagemAoJogador = "";
    var vitoria = false;

    var entrada = document.querySelector("#entrada");
    var saida = document.querySelector("#saida");
    var ponteiro = document.querySelector("#ponteiro");

    var btn = document.querySelector("button");

    btn.addEventListener("click", clickFunction);

    function clickFunction(){
        validarJogada();
    }


    function validarJogada(){
        chuteDoJogador = parseInt(entrada.value);
        entrada.value = "";
        entrada.focus();

        if(isNaN(chuteDoJogador)){
            saida.innerHTML = "Por favor, digite apenas números.";
        }else if(chuteDoJogador > 100 || chuteDoJogador < 0){
            saida.innerHTML = "Por favor, digite apenas valores entre 0 e 100.";
        }else {
            playGame();
        }
    }

    function playGame(){
        render();
    }


    function render(){
       ponteiro.style.left = (chuteDoJogador * 3.7) + 13 + "px";
    }

}