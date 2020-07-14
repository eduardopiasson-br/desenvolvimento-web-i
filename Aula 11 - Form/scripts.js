// FUNÇÃO QUE MONTA OS DADOS PREENCHIDOS PELO USUÁRIO
function montarDados(){
    var fone = document.getElementById("fone").value;
    var fone_edit = fone.replace(/(\d{2})(\d{4})(\d{4})/, "($1) $2-$3");
    var celular = document.getElementById("celular").value;
    var celular_edit = celular.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");
    var cep = document.getElementById("cep").value;
    var cep_edit = cep.replace(/(\d{5})(\d{3})/, "$1-$2");
    var rg = document.getElementById("rg").value;
    var rg_edit = rg.replace(/(\d{1})(\d{3})(\d{3})(\d{1})/, "$1.$2.$3-$4");
    var cnpj = document.getElementById("cnpj").value;
    var cnpj_edit = cnpj.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, "$1.$2.$3/$4-$5");
    document.getElementById("paragrafo_fone").innerHTML = fone_edit;
    document.getElementById("paragrafo_celular").innerHTML = celular_edit;
    document.getElementById("paragrafo_cep").innerHTML = cep_edit;
    document.getElementById("paragrafo_rg").innerHTML = rg_edit;
    document.getElementById("paragrafo_cnpj").innerHTML = cnpj_edit;
}


