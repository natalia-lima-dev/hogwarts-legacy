/*
    OBJETIVO - quando clicarmos no botão temos que mostrar a imagem de fundo correspondente
    - passo 1 - dar um jeito de pegar o elemento HTML dos botões
    - passo 2 - dar um jeito de identificar o clique do usuário no botão
    - passo 3 - desmarcar o botão selecionado anterior
    - passo 4 - marcar o botão clicado como se estivesse selecionada
    - passo 5 - esconder a imagem ativa de fundo anterior
    - passo 6 - fazer aparecer a imagem correspondente ao botão clicado
*/
//PASSO 1:
const botoesCarrossel = document.querySelectorAll('.botao'); //variavel para otimizar o código utilizando apenas "botoesCarrossel"
const imagens = document.querySelectorAll('.imagem');
//PASSO 2:
botoesCarrossel.forEach((botao, indice) => { //o laço forEach fica rodando até liberar a aplicação
    botao.addEventListener('click', () => {
        //PASSO 3:
        const botaoSelecionado = document.querySelector('.selecionado');
        botaoSelecionado.classList.remove('selecionado');
        //PASSO 4:
        botao.classList.add('selecionado');
        //PASSO 5:
        const imagemAtiva = document.querySelector('.ativa');
        imagemAtiva.classList.remove('ativa');
        //PASSO 6:
        imagens[indice].classList.add('ativa');
    })
})
