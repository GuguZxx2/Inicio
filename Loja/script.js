// Lista de produtos da loja
const produtos = [
    { nome: "Camiseta", preco: 49.90 },
    { nome: "Boné", preco: 29.90 },
    { nome: "Tênis", preco: 129.90 },
];

// Carrinho de compras
let carrinho = [];

// Adiciona os produtos na tela
function exibirProdutos() {
    const produtosDiv = document.getElementById('produtos');
    produtos.forEach((produto, indice) => {
        const prodDiv = document.createElement('div');
        prodDiv.className = 'produto';
        prodDiv.innerHTML = `
            <h3>${produto.nome}</h3>
            <p>R$ ${produto.preco.toFixed(2)}</p>
            <button onclick="adicionarCarrinho(${indice})">Adicionar ao carrinho</button>
        `;
        produtosDiv.appendChild(prodDiv);
    });
}

// Adiciona um produto ao carrinho
function adicionarCarrinho(indice) {
    carrinho.push(produtos[indice]);
    atualizarCarrinho();
}

// Atualiza a exibição do carrinho e o total
function atualizarCarrinho() {
    const carrinhoUl = document.getElementById('carrinho');
    carrinhoUl.innerHTML = '';
    let total = 0;
    carrinho.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.nome} - R$ ${item.preco.toFixed(2)}`;
        carrinhoUl.appendChild(li);
        total += item.preco;
    });
    document.getElementById('total').textContent = total.toFixed(2);
}

// Inicializa a loja ao carregar a página
exibirProdutos();