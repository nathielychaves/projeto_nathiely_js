var meuFormulario = document.getElementById("formulario");
meuFormulario.addEventListener("submit", function(event) {
  event.preventDefault();

  //Chama a função identificar
verificarletra();

});


//Função identificar
FunçãoVerificarletra ()

  //Captura o que está dentro do primeiro input no formulário
  //primeira letra - Captura a primeira letra da palavra e identifica se é maiúscula ou não
  let Digite a palavra = Letra (document.getElementById("Digite a palavra").value);

  //Realiza a identificação da primeira letra da palavra "Digite a palavra" e ve se é ou não maiúscula
  //E a variável "resultado" mostra "sim" para maiúscula e "não" para minúscula
  let resultado = primeira palavra;

  //Aqui vai escrever no input "resultado" a informação que está armazenado no "resultado"
  document.getElementById("resultado").value = resultado;


}
