//let titulo = document.querySelector('h1');
//titulo.innerHTML = 'Jogo do número secreto';

//let paragrafo = document.querySelector('p');
//paragrafo.innerHTML = 'Escola um numero entre 1 e 10';

let numerosSorteados = [];
let numeroLimite = 100;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;


function exibirTextoTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilizan Portuguese female', {rate: 1.2});
}

function exibirMensagemInicial(){
exibirTextoTela('h1', 'Jogo do numero secreto');
exibirTextoTela('p', 'Escolha um número entre 1 e 10');
}

exibirMensagemInicial();

function verificarChute(){
    let chute = document.querySelector('input').value;

    if(chute == numeroSecreto){
        exibirTextoTela('h1', 'Acertou');
        let palavraTentativa = tentativas > 1? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}`;
        exibirTextoTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
        } else {
        if(chute > numeroSecreto){
        exibirTextoTela('p', 'O número secreto é menor');
            }else{
            exibirTextoTela('p', 'O número secreto é maior');
    }
    tentativas++;
    limparCampo();
    }
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeElementosLista = numerosSorteados.length;
if(quantidadeElementosLista == numeroLimite){
    numerosSorteados = [];
}

    if (numerosSorteados.includes(numeroEscolhido) ){
        return gerarNumeroAleatorio();
    } else {
        numerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

