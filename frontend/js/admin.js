async function cadastrarProduto(){

const nome = document.getElementById('nome').value;
const preco = document.getElementById('preco').value;
const categoria = document.getElementById('categoria').value;
const imagem = document.getElementById('imagem').value;

await fetch('http://localhost:3000/produtos',{
method:'POST',
headers:{
'Content-Type':'application/json'
},
body:JSON.stringify({
nome,
preco,
categoria,
imagem
})
});

alert('Produto cadastrado');

listarProdutos();

}

async function listarProdutos(){

const response = await fetch('http://localhost:3000/produtos');

const produtos = await response.json();

const lista = document.getElementById('listaProdutos');

lista.innerHTML = '';

produtos.forEach(produto => {

lista.innerHTML += `
<p>
${produto.nome} - R$ ${produto.preco}
</p>
`;

});

}

listarProdutos();