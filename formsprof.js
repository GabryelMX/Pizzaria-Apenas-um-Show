var botaoAdicionar=document.querySelector("#adicionar-encomenda");

botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault();

    //Captura os dados do formulário
    var form = document.querySelector("#form-adiciona");
    });

    //Função para capturar os dados da encomenda
    function obtemEncomenda(dadosForm){
        
        var encomenda = {
            nome: dadosForm.nome.value,
            qtde: dadosForm.qtde.value,
            produto: dadosForm.produto.value,
            unitario:dadosForm.unitario.value,
        }
    }

    //Função para inserir a encomenda na tabela
    function addEncomenda(dadosEncomenda){
        
       // 1. Capturar os dados da encomenda
       // 2. Criar as colunas da encomenda
       // 3. Criar a linha
       // 4. Colocas as colunas deentro da linha
      //  5. Colocar a linha na tabela
        
    }
    
      