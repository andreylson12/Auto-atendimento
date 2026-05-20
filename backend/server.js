const express = require('express');
const cors = require('cors');
const fs = require('fs');

const app = express();

app.use(cors());
app.use(express.json());

const arquivo = './database/produtos.json';

app.get('/produtos',(req,res)=>{

const produtos = JSON.parse(
fs.readFileSync(arquivo)
);

res.json(produtos);

});

app.post('/produtos',(req,res)=>{

const produtos = JSON.parse(
fs.readFileSync(arquivo)
);

produtos.push(req.body);

fs.writeFileSync(
arquivo,
JSON.stringify(produtos,null,2)
);

res.json({
mensagem:'Produto cadastrado'
});

});

app.listen(3000,()=>{
console.log('Servidor rodando');
});