///cria um constante que seliciona o botão no html
const botao = document.querySelector("button");
botao.addEventListener("click", botaoClicado);

///cria a função que fará com que o texto do numero zero some + 1 a cada click.
function botaoClicado() {
   let texto = botao.querySelector("span");
   texto.textContent++;
}

//###legendas:
//querySelector: seleciona o primeiro elemento que corresponde a umselector CSS especficado.
//addEventListener: adiciona um evento de click, permintindo que voce execute uma função quando o evento ocorrer.
//textContent: modifica o conteudo de texto de um elemento html
