document.addEventListener('DOMContentLoaded', function(){
    const botaoDeAcessibilidade = document.getElementById('botao-acessibilidade')
    const opcoesDeAcessibilidade = document.getElementById('opcoes-acessibilidade')
 
    botaoDeAcessibilidade.addEventListener('click', function (){
     botaoDeAcessibilidade.classList.toggle('rotacao-botao');
     opcoesDeAcessibilidade.classList.toggle('apresenta-lista')
 
     const botaoSelecionado = botaoDeAcessibilidade.getAttribute('aria-expanded') === 'true';
     botaoDeAcessibilidade.setAttribute('aria-expanded', !botaoSelecionado)
   
    })
 
     const aumentaFonteBotao = document.getElementById('aumentar-fonte');
     const diminuiFonteBotao = document.getElementById('diminuir-fonte');
     
     const alternaContraste = document.getElementById('alterna-contraste')
 
     let tamanhoAtualFonte = 1;
 
     aumentaFonteBotao.addEventListener('click', function(){
         tamanhoAtualFonte += 0.1;
         document.body.style.fontSize = `${tamanhoAtualFonte}rem`
 
     })
 
     diminuiFonteBotao.addEventListener('click', function(){
         tamanhoAtualFonte -= 0.1;
         document.body.style.fontSize = `${tamanhoAtualFonte}rem`
 
     })
 
     alternaContraste.addEventListener('click', function(){
         document.body.classList.toggle('alto-contraste')
     })
 
     const btn = document.getElementById("toggle-contrast");
     const text = document.getElementById("contrast-text");

     btn.addEventListener("click", () => {
         document.body.classList.toggle("high-contrast");
    
     if (document.body.classList.contains("high-contrast")) {
      text.style.display = "inline";
     } else {
      text.style.display = "none";
     }
  });

     const botaoContraste = document.getElementById("alterna-contraste");
     const mensagemContraste = document.getElementById("mensagem-contraste");

     botaoContraste.addEventListener("click", () => {
     document.body.classList.toggle("high-contrast");

  if (document.body.classList.contains("high-contrast")) {
    mensagemContraste.textContent = "Contraste ativado";
    mensagemContraste.style.display = "block";
  } else {
    mensagemContraste.textContent = "Contraste desativado";
    mensagemContraste.style.display = "block";
  }

});

 })
 
 ScrollReveal().reveal('#inicio', { delay: 500 });
 ScrollReveal().reveal('#tropicalia', { delay: 500 });
 ScrollReveal().reveal('#galeria', { delay: 500 });
 ScrollReveal().reveal('#contato', { delay: 500 });