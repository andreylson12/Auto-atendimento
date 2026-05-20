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
nome:"Espetinho Carne Bovina",
preco:10,
categoria:"espetinhos",
imagem:"espetinho.png"
},
{
nome:"Espetinho Frango com bacon",
preco:10,
categoria:"espetinhos",
imagem:"espetinho frango com bacon.png"
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

const agrupados = {};

carrinho.forEach(item => {

if(agrupados[item.nome]){

agrupados[item.nome].quantidade++;

}else{

agrupados[item.nome] = {
preco:item.preco,
quantidade:1
};

}

});

itens.innerHTML = '';

for(let nome in agrupados){

itens.innerHTML += `
<p>
${nome} x${agrupados[nome].quantidade}
- R$ ${(agrupados[nome].preco * agrupados[nome].quantidade).toFixed(2)}
</p>
`;

}

document.getElementById('total').innerHTML =
`Total: R$ ${total.toFixed(2)}`;

}

function mostrarPix(){

if(total <= 0){

alert('Adicione produtos');

return;

}

document.getElementById('pixArea').style.display = 'block';

document.getElementById('tituloPagamento').innerHTML =
'💳 PAGAMENTO PIX';

document.getElementById('valorPix').innerHTML =
`R$ ${total.toFixed(2)}`;

document.getElementById('imagemPix').style.display =
'block';

document.getElementById('mensagemPagamento').innerHTML =
'📱 Escaneie o QR Code e realize o pagamento';

}

function mostrarCartao(){

if(total <= 0){

alert('Adicione produtos');

return;

}

document.getElementById('pixArea').style.display =
'block';

document.getElementById('tituloPagamento').innerHTML =
'💳 PAGAMENTO CARTÃO';

document.getElementById('valorPix').innerHTML =
`R$ ${total.toFixed(2)}`;

document.getElementById('imagemPix').style.display =
'none';

document.getElementById('mensagemPagamento').innerHTML =
'💳 Aproxime ou insira seu cartão na maquininha ao lado';

}

function mostrarDinheiro(){

if(total <= 0){

alert('Adicione produtos');

return;

}

document.getElementById('pixArea').style.display =
'block';

document.getElementById('tituloPagamento').innerHTML =
'💵 PAGAMENTO DINHEIRO';

document.getElementById('valorPix').innerHTML =
`R$ ${total.toFixed(2)}`;

document.getElementById('imagemPix').style.display =
'none';

document.getElementById('mensagemPagamento').innerHTML =
'💵 Realize o pagamento em dinheiro';

}

function limparCarrinho(){

carrinho = [];

total = 0;

atualizarCarrinho();

document.getElementById('pixArea').style.display =
'none';

}
