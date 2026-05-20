let produtos = [];
let carrinho = [];
let total = 0;

async function carregarProdutos(){

const response = await fetch('http://localhost:3000/produtos');

produtos = await response.json();

renderizarProdutos(produtos);

}

function renderizarProdutos(lista){

const area = document.getElementById('produtos');

area.innerHTML = '';

lista.forEach(produto => {

area.innerHTML += `
<div class="card">
<img src="imagens/${produto.imagem}">
<h2>${produto.nome}</h2>
<div class="preco">R$ ${produto.preco}</div>
<button onclick="addCarrinho('${produto.nome}',${produto.preco})">
Adicionar
</button>
</div>
`;

});

}

function filtrar(categoria){

const filtrados = produtos.filter(
p => p.categoria === categoria
);

renderizarProdutos(filtrados);

}

function addCarrinho(nome, preco){

carrinho.push({nome, preco});

total += preco;

atualizarCarrinho();

}

function atualizarCarrinho(){

const itens = document.getElementById('itens');

itens.innerHTML = '';

carrinho.forEach(item => {

itens.innerHTML += `
<p>${item.nome} - R$ ${item.preco}</p>
`;

});

document.getElementById('total').innerHTML =
`Total: R$ ${total.toFixed(2)}`;

}

function mostrarPix(){

if(total <= 0){
alert('Adicione produtos');
return;
}

const area = document.getElementById('pixArea');

area.style.display = 'block';

document.getElementById('valorPix').innerHTML =
`R$ ${total.toFixed(2)}`;

}

carregarProdutos();