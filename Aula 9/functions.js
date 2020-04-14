// EXERCÍCIO UM - SOMAR, SUBTRAIR, MULTIPLICAR, DIVIR.

var form = document.getElementById('formulario');

function calc(e){
    var op = e.value;
    var A = parseFloat(document.getElementById("A").value);
    var B = parseFloat(document.getElementById("B").value);

    var C = eval(A+op+B);

    alert(`O resultado da operação é = ` + C);
}

//  EXERCÍCIO DOIS - VERIFICAR QUAL VALOR É O MAIOR

function maior(){
    var K = parseFloat(document.getElementById("K").value);
    var E = parseFloat(document.getElementById("E").value);
    
    var arr = [K, E];
    var max = arr.reduce(function(a, b) {
    return Math.max(a, b);
    });

    alert(`O maior número é = ` + max);
}

// EXERCÍCIO TRES - CALCULAR A ÁREA DE UM CÍRCULO

function areaCirculo(){
    var X = parseFloat(document.getElementById("X").value);

    var area = Math.PI * X * X;

    alert(`A área do circulo com valor ` + X + ` é = ` + area);
}

// EXERCÍCIO QUATRO - CALCULAR ÁREA DE UM RETÂNGULO

function areaRetangulo() {
    var Y = parseFloat(document.getElementById("Y").value);
    var Z = parseFloat(document.getElementById("Z").value);

    var area = Y * Z;

    alert(`A área do retangulo com valor de base ` + Y + ` e valor de altura ` + Z + ` é = ` + area);
}

// FUNÇÃO PARA LIMPAR 

function limpar(){
    var A = f.A;
    var B = f.B;
    A.value = "";
    B.value = "";
 }
