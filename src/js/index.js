// when I touch the button, the image change
/*  
1-Pegar o elemento HTML dos botões 
2-identificar o click do usuário
3-desmarcar o botão selecionado anterior 
4-marcar o botão selecionado
5-esconder a imagem de fundo anterior
6-fazer a imagem de fundo correspondente ao botão clicado
*/

const botoesCarrossel = document.querySelectorAll('.botao');

const imagens = document.querySelectorAll('.imagens')


botoesCarrossel.forEach((botao, indice)=> {
    botao.addEventListener('click', ()=> {
        const botaoSelecionado = document.querySelector('.selecionado');
        botaoSelecionado.classList.remove('selecionado');
        botao.classList.add('selecionado');
        const imagemAtiva = document.querySelector('.ativa');
        imagemAtiva.classList.remove('ativa');
        imagens[1].classList.add('ativa');
    })


    
    
})


