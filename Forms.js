document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('order-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Impede o envio do formulário

        // Coleta os valores dos campos do formulário
        const clientName = document.getElementById('client-name').value;
        const unitPrice = parseFloat(document.getElementById('unit-price').value);
        const quantity = parseInt(document.getElementById('quantity').value);
        const product = document.getElementById('product').value;

        // Verifica se o campo "Nome do cliente" está vazio
        if (clientName === '') {
        console.log('O nome do cliente não pode ser vazio.');
        return; // Interrompe o processo se o nome do cliente estiver vazio
    }

        // Calcula o total da encomenda
        const total = unitPrice * quantity;

        // Adiciona uma nova linha à tabela com os dados da encomenda
        const tableBody = document.querySelector('table tbody');
        const newRow = tableBody.insertRow(-1); // Insere uma nova linha na última posição
        newRow.innerHTML = `
            <td class="nome">${clientName}</td>
            <td>${product}</td>
            <td class="qtde">${quantity}</td>
            <td class="unitario">R$ ${unitPrice.toFixed(2)}</td>
            <td class="total">R$ ${total.toFixed(2)}</td>
        `;

        // Limpa os campos do formulário após adicionar a linha na tabela
        form.reset();
    });
});