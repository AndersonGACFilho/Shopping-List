let items = [];
document.querySelector("input[type=submit]")
    .addEventListener("click", () => {
        let nomeProduto = document.querySelector("input[name=nome_produto]");
        let valorProduto = document.querySelector("input[name=valor_produto]");
        items.push({
            nome: nomeProduto.value,
            valor: valorProduto.value,
        })
        nomeProduto.value = ""
        valorProduto.value = ""
        /* 
        <div class="lista-produto-single">
            <h3>RedBull</h3>
            <h3 class="valor"><span>R$20,00</span></h3>
        </div>
        */
        let total = 0;
        let listaProdutos = document.querySelector(".lista-produtos");
        listaProdutos.innerHTML = ""
        items.map(function (val) {
            listaProdutos.innerHTML += `
            <div class="lista-produto-single">
            <h3>${val.nome}</h3>
            <h3 class="valor"><span>R\$ ${parseFloat(val.valor).toFixed(2)}</span></h3>
            </div>
            `
            total += parseFloat(val.valor);
        })
        document.querySelector(".total>h1").innerHTML = "TOTAL : R$ " + total
    })
document.querySelector("button")
    .addEventListener("click", () => {
        document.querySelector(".lista-produtos").innerHTML = ""
        items = [];
        document.querySelector(".total>h1").innerHTML = "TOTAL : R$ 0.00"
    })