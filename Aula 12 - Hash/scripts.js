letra = "X";
function joga(celula) {
    celulaclicada = document.getElementById(celula).innerHTML;//capturar o conteúdo da célula
    if (celulaclicada == '') {
        document.getElementById(celula).innerHTML = letra;//inserindo X ou O
        if (letra == "X") {
            letra = "O";
        } else {
            letra = "X";
        }
    }
    verificar();
}

function verificar() {
    c11 = document.getElementById('cel11').innerHTML;
    c12 = document.getElementById('cel12').innerHTML;
    c13 = document.getElementById('cel13').innerHTML;
    c21 = document.getElementById('cel21').innerHTML;
    c22 = document.getElementById('cel22').innerHTML;
    c23 = document.getElementById('cel23').innerHTML;
    c31 = document.getElementById('cel31').innerHTML;
    c32 = document.getElementById('cel32').innerHTML;
    c33 = document.getElementById('cel33').innerHTML;

    if(
        // Verifica Linhas
        ((c11 != '') && (c11 == c12) && (c12 == c13)) ||
        ((c21 != '') && (c21 == c22) && (c22 == c23)) ||
        ((c31 != '') && (c31 == c32) && (c32 == c33)) ||
        // Verifica Colunas
        ((c11 != '') && (c11 == c21) && (c21 == c31)) ||
        ((c12 != '') && (c12 == c22) && (c22 == c32)) ||
        ((c13 != '') && (c13 == c23) && (c23 == c33)) ||
        // Verifica Diagonais
        ((c22 != '') && (c11 == c22) && (c22 == c33)) ||
        ((c22 != '') && (c31 == c22) && (c22 == c13))
    ) {
        alert("Parabéns! Você derrotou o Jogador " + letra + "!!");
    }
}