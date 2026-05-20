let produtos = [

{
nome:"Heineken",
preco:9,
categoria:"cervejas",
imagem:"heineken.png"
},

{
nome:"Skol 600ml",
preco:10,
categoria:"cervejas",
imagem:"skol_600.png"
},

{
nome:"Original 600ml",
preco:12,
categoria:"cervejas",
imagem:"original_600.png"
},

{
nome:"Refrigerante Lata",
preco:6,
categoria:"refrigerantes",
imagem:"refri_lata.png"
},

{
nome:"Refrigerante 2L",
preco:12,
categoria:"refrigerantes",
imagem:"refri_2lt.png"
},

{
nome:"Espetinho",
preco:10,
categoria:"espetinhos",
imagem:"espetinho.png"
}

];

let carrinho = [];
let total = 0;

renderizarProdutos(produtos);

function renderizarProdutos(lista){

const area = document.getElementById('produtos');

area.innerHTML = '';

lista.forEach(produto => {

area.innerHTML += `

<div class="card">

<img src="frontend/imagens/${produto.imagem}">

<h2>${produto.nome}</h2>

<div class="preco">
R$ ${produto.preco}
</div>

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

document.getElementById('pixArea').style.display = 'block';

document.getElementById('valorPix').innerHTML =
`R$ ${total.toFixed(2)}`;

}
