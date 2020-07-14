// Metodo concat realiza a função de concatenar dois arrays
var animais = ["Leão", "Tigre", "Onça"];
var carros = ["HB20", "Opala", "Uno"];
var coisas = animais.concat(carros);
console.log(coisas);

// Metodo join especifica um separador para apresentação dos itens do array
const dias = ["Sabado", "Domingo", "Segunda"];
console.log(dias.join(' & '));

// Metodo push adiciona um ou mais itens ao final do array
var motos = ["CB300", "ER6n", "883 Iron"];
motos.push("POP100");
console.log(motos);

// Metodo pop remove o ultimo elemento de um array
var planetas = ["Terra", "Marte", "Venus"];
var doisPlanetas = planetas.pop();
console.log(planetas);

// Metodo shift remove o primeiro elemento de um array
const professores = ["Marciely", "Marcos", "Leonardo", "Patrícia"];
const professorSaiu = professores.shift();
console.log(professores);

// Metodo unshift adiciona um ou mais elementos no início de um array
var problemas = ["Contas", "Manutenção da Moto"];
problemas.unshift("Corona", "Esposa em Casa 24hrs");
console.log(problemas);

// Metodo slice permite apresentar dados em determinada posição do array
var carnes = ["Costela", "Maminha", "Picanha", "Alcatra"];
var melhores = carnes.slice(2 & 3);
console.log(melhores);

// Metodo reverse inverte a posição dos itens em um array
var posicoes = [1, 2, 3];
posicoes.reverse();
console.log(posicoes);

// Metodo sort ordena logicamente os itens de um array bagunçado
var idades = [55, 12, 17, 88];
idades.sort();
console.log(idades);

// Exercício 2, 3 & 4
var cadastros = new Array(10);

var apresenta = document.getElementById('apresenta');

function adicionar(){
    for(i = 0; i < 10; i++) {
        cadastros[i] = new Array(10);
        for (j = 0; j < 4; j++) {
            document.getElementById("paragrafo_nome").innerHTML = document.getElementById("input_nome").value;
            document.getElementById("paragrafo_idade").innerHTML = document.getElementById("input_idade").value;
            document.getElementById("paragrafo_telefone").innerHTML = document.getElementById("input_telefone").value;
            document.getElementById("paragrafo_endereco").innerHTML = document.getElementById("input_endereco").value;
            
        }
        cont ++;
    }
    apresenta.cadastros;
}
