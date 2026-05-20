let produtos = [];

async function carregarProdutos(){

const response = await fetch(
'produtos.json'
);

produtos = await response.json();

atualizarLista();

}

function cadastrarProduto(){

const nome =
document.getElementById('nome').value;

const preco =
Number(document.getElementById('preco').value);

const categoria =
document.getElementById('categoria').value;

const imagem =
document.getElementById('imagem').value;

if(!nome || !preco || !imagem){

alert('Preencha todos campos');

return;

}

produtos.push({
nome,
preco,
categoria,
imagem
});

atualizarLista();

limparCampos();

}

function atualizarLista(){

const lista =
document.getElementById('lista');

lista.innerHTML = '';

produtos.forEach((produto,index)=>{

lista.innerHTML += `

<div class="itemAdmin">

<h3>${produto.nome}</h3>

<p>
💰 R$ ${produto.preco}
</p>

<p>
📂 ${produto.categoria}
</p>

<p>
🖼️ ${produto.imagem}
</p>

<button onclick="removerProduto(${index})"
style="
margin-top:10px;
background:red;
color:white;
padding:10px;
border:none;
border-radius:10px;
cursor:pointer;
">
Excluir
</button>

</div>

`;

});

document.getElementById('jsonArea').value =
JSON.stringify(produtos,null,2);

}

function removerProduto(index){

produtos.splice(index,1);

atualizarLista();

}

function limparCampos(){

document.getElementById('nome').value = '';

document.getElementById('preco').value = '';

document.getElementById('imagem').value = '';

}

carregarProdutos();
