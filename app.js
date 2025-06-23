function criaCartao(categoria, pergunta, resposta) {
        let container
}
function criaCartao(categoria, pergunta, resposta) {
        let container = document.getElementById('container')
}
function criaCartao(categoria, pergunta, resposta) {
        let container = document.getElementById('container')
        let cartao = document.createElement('article')
}function criaCartao(categoria, pergunta, resposta) {
        let container = document.getElementById('container')
        let cartao = document.createElement('article')
        cartao.className = 'cartao'
}
cartao.innerHTML = `
<div class="cartao__conteudo">
<h3>Programação</h3>
<div class="cartao__conteudo__pergunta">
        <p>O que é JavaScript?</p>
</div>
<div class="cartao__conteudo__resposta">
        <p>O JavaScript é uma linguagem de programação</p>
</div>
</div>
`function criaCartao(categoria, pergunta, resposta) {

        // código omitido…
        container.appendChild(cartao)
}cartao.innerHTML = `
<div class="cartao__conteudo">
<h3>${categoria}</h3>
<div class="cartao__conteudo__pergunta">
        <p>${pergunta}</p>
</div>
<div class="cartao__conteudo__resposta">
        <p>${resposta}</p>
</div>
</div>
`
function viraCartao() {
    respostaEstaVisivel = !respostaEstaVisivel
    cartao.classList.toggle('active', respostaEstaVisivel)
}
function viraCartao() {
    respostaEstaVisivel = !respostaEstaVisivel
    cartao.classList.toggle('active', respostaEstaVisivel)
}
cartao.addEventListener('click', viraCartao)