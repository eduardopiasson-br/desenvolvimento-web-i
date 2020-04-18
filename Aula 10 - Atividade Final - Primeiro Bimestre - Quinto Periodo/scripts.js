// Recebe o id adicionado ao botão 
let conteudo = document.getElementById('conteudo');
// Função que gera o formulário e aplica a função fade para que o formulário apareça
function montarDados(){
    document.getElementById("paragrafo_nome").innerHTML = document.getElementById("input_nome").value;
    document.getElementById("paragrafo_sobrenome").innerHTML = document.getElementById("input_sobrenome").value;
    document.getElementById("paragrafo_cpf").innerHTML = document.getElementById("input_cpf").value;
    document.getElementById("paragrafo_telefone").innerHTML = document.getElementById("input_telefone").value;
    document.getElementById("paragrafo_email").innerHTML = document.getElementById("input_email").value;
    document.getElementById("paragrafo_endereco").innerHTML = document.getElementById("input_endereco").value;
    document.getElementById("paragrafo_quarto").innerHTML = document.getElementById("input_quarto").value;
    document.getElementById("paragrafo_ocupantes").innerHTML = document.getElementById("input_ocupantes").value;
    document.getElementById("paragrafo_obs").innerHTML = document.getElementById("input_obs").value;
    conteudo.classList.toggle('fade');
}

