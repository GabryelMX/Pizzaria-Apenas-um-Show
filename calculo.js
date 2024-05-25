var clientes = document.querySelectorAll(".cliente");

for (var i = 0; i < clientes.length; i++) {
    var qtdeElement = clientes[i].querySelector(".qtde");
    var valorUnitarioElement = clientes[i].querySelector(".unitario");

    var qtde = parseInt(qtdeElement.textContent);
    var valorUnitario = parseFloat(valorUnitarioElement.textContent.replace("R$ ", "").replace(",", "."));

    // Resetando o estilo da linha
    clientes[i].style.color = "white";
    clientes[i].style.backgroundColor = "transparent";

    // Verificação da quantidade
    if (qtde < 1 || isNaN(qtde)) {
        qtdeElement.innerHTML = "<span style='color: red;'>Qtde inválida</span>";
        clientes[i].style.color = "white";
        clientes[i].style.backgroundColor = "black";
    } else {
        // Verificação do Valor Unitário
        if (isNaN(valorUnitario)) {
            valorUnitarioElement.innerHTML = "<span style='color: red;'>Valor inválido</span>";
            clientes[i].style.color = "white";
            clientes[i].style.backgroundColor = "red";
        } else {
            // Cálculo do total
            var total = calculaTotal(qtde, valorUnitario);

            // Atualização do elemento .total
            clientes[i].querySelector(".total").textContent = "R$ " + total.toFixed(2);

            // Resetando o estilo e texto da quantidade e Valor Unitário
            qtdeElement.innerHTML = qtde;
            valorUnitarioElement.innerHTML = "R$ " + valorUnitario.toFixed(2);
        }
    }
}

function calculaTotal(qtde, valorUnitario) {
    var total = qtde * valorUnitario;
    return total;
}