/*
TURMA 1 - Grupo: 05
Integrantes: Belicio Cardoso, Marcio Silva, Fabio Augusto, Amanda Jesus, Lucas Bernardo e Felipe Cabuto
*/

// Precisamos desenvolver um menu para um microondas super veloz, onde teremos 5 opções de comida com seus respectivos tempos pré-definidos. 

// 1. Pipoca – 10 segundos (padrão);
// 2. Macarrão – 8 segundos (padrão);
// 3. Carne – 15 segundos (padrão);
// 4. Feijão – 12 segundos (padrão);
// 5. Brigadeiro – 8 segundos (padrão); 

// O usuário poderá alterar o tempo padrão, aumentando ou diminuindo de acordo com sua vontade.
// Se o tempo informado for maior que 2x o necessário, exibir mensagem que a comida queimou.
// Se o tempo for menor que o padrão, exibir a mensagem: "tempo insuficiente"; 
// Se o tempo for 3x maior que o necessário para o prato, o microondas deve exibir a mensagem: “kabumm”;
// Opções não listadas no menu, devem exibir uma mensagem de erro: "Prato inexistente";
// No final de cada tarefa, o microondas deverá exibir a mensagem: "Prato pronto, bom apetite!!!".

function verificar(tempoPadrao, tempo) {

    if (tempo < tempoPadrao) {
        console.log("Tempo Insuficiente")
    }
    else if (tempo >= 3 * tempoPadrao) {
        console.log("Kabum")
    }
    else if (tempo >= 2 * tempoPadrao) {
        console.log("A comida queimou")
    }
    else {
        console.log("Prato pronto, bom apetite")
    }

}

function menu(prato, tempo) {

    let tempoPadrao = 0;

    switch (prato) {

        case "Pipoca":
            tempoPadrao = 10;
            verificar(tempoPadrao, tempo)
            break;

        case "Macarrão":
            tempoPadrao = 8;
            verificar(tempoPadrao, tempo)
            break;

        case "Carne":
            tempoPadrao = 15;
            verificar(tempoPadrao, tempo)
            break;

        case "Feijão":
            tempoPadrao = 12;
            verificar(tempoPadrao, tempo)
            break;

        case "Brigadeiro":
            tempoPadrao = 8;
            verificar(tempoPadrao, tempo)
            break;

        default:
            console.log("Prato Inexistente")
    }
}

console.log("- Pipoca:")
menu("Pipoca", 5)
menu("Pipoca", 10)
menu("Pipoca", 20)
menu("Pipoca", 60)
menu("Chocolate", 10)

console.log("- Macarrão:")
menu("Macarrão", 4)
menu("Macarrão", 8)
menu("Macarrão", 16)
menu("Macarrão", 24)
menu("Chocolate", 8)

console.log("- Carne:")
menu("Carne", 10)
menu("Carne", 15)
menu("Carne", 30)
menu("Carne", 45)
menu("Chocolate", 15)

console.log("- Feijão:")
menu("Feijão", 10)
menu("Feijão", 12)
menu("Feijão", 24)
menu("Feijão", 36)
menu("Chocolate", 12)

console.log("- Brigadeiro:")
menu("Brigadeiro", 5)
menu("Brigadeiro", 8)
menu("Brigadeiro", 16)
menu("Brigadeiro", 24)
menu("Chocolate", 8)

// Felipe Ruggeri Cabuto - Turma 01