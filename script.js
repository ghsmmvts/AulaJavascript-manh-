// let numero = 0;

// function teste (){
// console.log('Estou logando a variavel "número", ela tem o valor' + numero)´;
// }

// function casa(){
//     let luminaria = "Vermelho";

//     function quarto(){
//         let cama = "mola";

//         console.log(luminaria);
//     }
// }

// let numero1 = 10;
// let numero2 = 20;

// function escolhermaior(numero1, numero2){
//     // let maior = numero1 > numero2 ? numero1 : numero2;
//     // let maior;

//     if(numero1 > numero2){
//         return numero1;
//     }        
    
//     return numero2;
// }



// Exercicio buscar palavra

let palavras = ['avião', 'carro', 'feijão', 'batata'];
let palavraBuscada = 'batata';

// verificarPalavraExiste(palavras, palavraBuscada) -> true

function verificarPalavraExiste (palavras, palavraBuscada){
    for (let palavra of palavras){
        if (palavra == palavraBuscada){
            return true;
            }
    }
    return false;
}