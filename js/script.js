window.onload = function(){
    //Variáveis
    var numeroMisterioso = Math.floor(Math.random() * 101);
    //alert(numeroMisterioso);
    var chuteDoJogador = 0;
    var tentativasRestantes = 10;
    var tentativas = 0;
    var mensagemAoJogador = "";
    var vitoria = false;

    //Elementos interativos
    var entrada = document.querySelector("#entrada");
    var saida = document.querySelector("#saida");
    var ponteiro = document.querySelector("#ponteiro");
    var btn = document.querySelector("button");

    //Função atribuída ao elemento button
    btn.addEventListener("click", clickFunction);

    function clickFunction(){
        validarJogada();
    }

    //Função atribuída ao teclado (tecla enter)
    window.addEventListener("keydown", keydownFunction);

    function keydownFunction(e){
        if(e.keyCode == 13){
            validarJogada();
        }
    }

   

    function validarJogada(){
        chuteDoJogador = parseInt(entrada.value);
        entrada.value = "";
        entrada.focus();

        if(isNaN(chuteDoJogador)){ //o comando isNaN() retorna true se o valor não for um número e false se for um número
            saida.innerHTML = "Por favor, digite apenas números.";
        }else if(chuteDoJogador > 100 || chuteDoJogador < 0){
            saida.innerHTML = "Por favor, digite apenas valores entre 0 e 100.";
        }else {
            playGame();
        }
    }

    function playGame(){
        render();
        tentativas++;
        tentativasRestantes--;
        mensagemAoJogador = "<br>Tentativas: " + tentativas + " | Restantes: " + tentativasRestantes;

        if(chuteDoJogador > numeroMisterioso){
            saida.innerHTML = "Meu número é menor que " + chuteDoJogador + ". " + mensagemAoJogador;

            if(tentativasRestantes < 1){
                fimDoJogo();
            }

        }else if(chuteDoJogador < numeroMisterioso){
            saida.innerHTML = "Meu número é maior que " + chuteDoJogador + ". " + mensagemAoJogador;

            if(tentativasRestantes < 1){
                fimDoJogo();
            }

        }else if(chuteDoJogador === numeroMisterioso){
            vitoria = true;
            fimDoJogo();
        }
    }

    function fimDoJogo(){
        if(vitoria){ //Estruturas condicionais trabalham com valores true ou false; então dá na mesma usar if(vitoria) e if(vitoria == true)
            saida.innerHTML = "Parabéns, você adivinhou! o número era " + numeroMisterioso + "<br>"
             + "Foram feitas " + tentativas + " tentativas";
        }else {
            saida.innerHTML = "Acabaram suas tentativas. <br> O núero era " + numeroMisterioso;
        }

        //desabilitamos os elementos de interação com o usuário
        btn.removeEventListener("click", clickFunction);
        window.removeEventListener("keydown", keydownFunction);
        btn.disabled = true;
        entrada.disabled = true;
    }

    //função responsável pela movimentação do ponteiro
    function render(){
       ponteiro.style.left = (chuteDoJogador * 3.7) + 13 + "px";
    }

}