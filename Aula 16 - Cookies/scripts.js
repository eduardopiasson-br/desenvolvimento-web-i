// --------------------------------------------------------------
// Referente ao LocalStorage
// --------------------------------------------------------------
function criarLocalStorage() {
    // Variaveis locais para armazenar dados fornecidos pelo usuário
    var nome1 = window.prompt("Qual seu nome?");
    var email1 = window.prompt("Qual seu email?");
    var telefone1 = window.prompt("Qual seu telefone (45-xxxxx-xxxx)?");
    var interesse1 = window.prompt("Qual seu interesse?", "Hardware e Programação");

    // Inserir valores em objeto localStorage
    localStorage.setItem('nome', nome1);
    localStorage.setItem('email', email1);
    localStorage.setItem('telefone', telefone1);
    localStorage.setItem('interesse', interesse1);
}

function recuperarLocalStorage() {
    alert(localStorage.getItem('nome'));
    alert(localStorage.getItem('email'));
    alert(localStorage.getItem('telefone'));
    alert(localStorage.getItem('interesse'));
}

function deletarLocalStorage() {
    // localStorage.removeItem('nome');
    // localStorage.removeItem('email');
    // localStorage.removeItem('telefone');
    // localStorage.removeItem('interesse');
    localStorage.clear();
}

// --------------------------------------------------------------
// Referente ao SectionStorage
// --------------------------------------------------------------
function criarSectionStorage() {
    // Variavel local para armazenar dados fornecidos pelo usuário
    var proximoSO1 = window.prompt("Qual será o próximo sistema operacional que pretende testar?");
    
    // Armazenando na SectionStorage
    sessionStorage.setItem('proximoSO', proximoSO1);
}

function recuperarSectionStorage() {
    alert(sessionStorage.getItem('proximoSO'));
}

// --------------------------------------------------------------
// Referente aos Cookies
// --------------------------------------------------------------
function criarCookie() {
    // criar uma data futura - validade do cookie Y/M/D
    var data = new Date(2020,11,31);
    // converter data para formato gmt
    data = data.toGMTString();

    // criar Cookie * Necessário especificar path para direcionar um dominio * 
    document.cookie = 'nome=Eduardo Piasson; expire='+ data +'path=/';
}

function recuperarTodosOsCookie() {
    var cookies = document.cookie;
    alert(cookies);
}

function modificarCookie() {
    var data = new Date(2021,5,31);
    data = data.toGMTString();

    document.cookie = 'nome=Novo Nome; expire='+ data +'path=/';
}

function deletarCookie() {
    var data = new Date(2000,0,1);
    data = data.toGMTString();

    document.cookie = 'nome=; expire='+ data +'path=/';
}