


console.log("     |----------Passagens Áereas-----------|");
console.log("     |                                     |");
console.log("     |         1- Comprar passagem         |");
console.log("     |         2- Consultar Voos           |");
console.log("     |         3- Mapa de Assentos         |");
console.log("     |         4- Comprar passagem         |");
console.log("     |         0- Encerrar o programa      |");
console.log("     |                                     |");
console.log("     |-------------------------------------|");
var readline = require('readline-sync');
var resposta = readline.question('');

if(resposta == 1){
    var Nome= readline.question('Digite seu nome: ');
console.log("     |-----------Passagens áereas----------|");
console.log("     |                                     |");
console.log("     |<--Você está em: comprar passagens-->|");
console.log("     |                                     |");
console.log("     |         Nome:",(Nome),"              |");  
console.log("     |         Sobrenome:                  |");
console.log("     |         Idade:                      |");
console.log("     |         Origem:                     |");
console.log("     |         Destino:                    |");
console.log("     |         Assento:                    |");
console.log("     |                                     |")
console.log("     |-------------------------------------|")

var Sobrenome= readline.question('Digite seu sobrenome: ');
console.log("     |-----------Passagens áereas----------|");
console.log("     |                                     |");
console.log("     |<--Você está em: comprar passagens-->|");
console.log("     |                                     |");
console.log("     |         Nome:",(Nome),"              ");  
console.log("     |         Sobrenome:",(Sobrenome),"    ");
console.log("     |         Idade:                      ");
console.log("     |         Origem:                     |");
console.log("     |         Destino:                    |");
console.log("     |         Assento:                    |");
console.log("     |                                     |")
console.log("     |-------------------------------------|")

var Idade= readline.question('Digite sua idade: ');
console.log("     |-----------Passagens áereas----------|");
console.log("     |                                     |");
console.log("     |<--Você está em: comprar passagens-->|");
console.log("     |                                     |");
console.log("     |         Nome:",(Nome),"              ");  
console.log("     |         Sobrenome:",(Sobrenome),"    ");
console.log("     |         Idade:",(Idade),"            ");
console.log("     |         Origem:                     ");
console.log("     |         Destino:                    ");
console.log("     |         Assento:                    ");
console.log("     |                                     |")
console.log("     |-------------------------------------|")
var Origem= readline.question('Digite sua origem: ')
}

            
if (Origem=="Presidente Prudente" , "presidente prudente"){
console.log("     |---------------Passagens Áereas-----------------|");
console.log("     |                                                |")
console.log("     |        Você esta em --> Consulta de voos       |")
console.log("     |                                                |")
console.log("     |   Origem                X     Destino          |")
console.log("     |------------------------------------------------|")
console.log("     |                                                |")
console.log("     |   Presidente Prudente           Dublin         |")
console.log("     |   Presidente Prudente           Ceará          |")
console.log("     |   Presidente Prudente           São Paulo      |")
console.log("     |   Presidente Prudente           New York       |")
console.log("     |------------------------------------------------|");

}
var Destino= readline.question('Digite seu Destino: ')

if (Desitino = "Dublin" , "dublin"  , "Ceara" , "ceara" , "nova york" , "new york" , "são paulo" , "sao paulo" , "São Paulo" , "Sao Paulo" , "Ceará" , "Nova York"){
    console.log("     |-----------Passagens áereas----------      |");
    console.log("     |                                           |");
    console.log("     | Você está em ----> Mapa de Assentos       |");
    console.log("     |                                           |");
    console.log("     |-------------------------------------      |");
    console.log("     |                                           |");
    console.log("     | A1 A2 A3 A4 A5 A6 A7 A8 A9 A10 A11 A12    |");
    console.log("     | B1 B2 B3 B4 B5 B6 B7 B8 B9 B10 B11 B12    |");
    console.log("     |                                           |");
    console.log("     |---------------------------------------    |");}
    else{
    console.log("     |----------Passagens Áereas-----------|");
    console.log("     |                                     |");
    console.log("     |                                     |");
    console.log("     |                                     |");
    console.log("     |                ERROR                |");
    console.log("     |                                     |");
    console.log("     |                                     |");
    console.log("     |                                     |");
    console.log("     |-------------------------------------|");
    var readline = require('readline-sync');
    var resposta = readline.question('');
    
    }

var Assento= readline.question('Digite seu Assento: ')
if(Assento=="A1"){
    console.log("     |-----------Passagens áereas----------      |");
    console.log("     |                                           |");
    console.log("     | Você está em ----> Mapa de Assentos       |");
    console.log("     |                                           |");
    console.log("     |-------------------------------------      |");
    console.log("     |                                           |");
    console.log("     | X A2 A3 A4 A5 A6 A7 A8 A9 A10 A11 A12    |");
    console.log("     | B1 B2 B3 B4 B5 B6 B7 B8 B9 B10 B11 B12    |");
    console.log("     |                                           |");
    console.log("     |---------------------------------------    |");
}
if(Assento=="A2"){
    console.log("     |-----------Passagens áereas----------      |");
    console.log("     |                                           |");
    console.log("     | Você está em ----> Mapa de Assentos       |");
    console.log("     |                                           |");
    console.log("     |-------------------------------------      |");
    console.log("     |                                           |");
    console.log("     | A1 X A3 A4 A5 A6 A7 A8 A9 A10 A11 A12    |");
    console.log("     | B1 B2 B3 B4 B5 B6 B7 B8 B9 B10 B11 B12    |");
    console.log("     |                                           |");
    console.log("     |---------------------------------------    |");
}
if(Assento=="A3"){
    console.log("     |-----------Passagens áereas----------      |");
    console.log("     |                                           |");
    console.log("     | Você está em ----> Mapa de Assentos       |");
    console.log("     |                                           |");
    console.log("     |-------------------------------------      |");
    console.log("     |                                           |");
    console.log("     | A1 A2 X A4 A5 A6 A7 A8 A9 A10 A11 A12    |");
    console.log("     | B1 B2 B3 B4 B5 B6 B7 B8 B9 B10 B11 B12    |");
    console.log("     |                                           |");
    console.log("     |---------------------------------------    |");
}
if(Assento=="A4"){
    console.log("     |-----------Passagens áereas----------      |");
    console.log("     |                                           |");
    console.log("     | Você está em ----> Mapa de Assentos       |");
    console.log("     |                                           |");
    console.log("     |-------------------------------------      |");
    console.log("     |                                           |");
    console.log("     | A1 A2 A3 X A5 A6 A7 A8 A9 A10 A11 A12    |");
    console.log("     | B1 B2 B3 B4 B5 B6 B7 B8 B9 B10 B11 B12    |");
    console.log("     |                                           |");
    console.log("     |---------------------------------------    |");
}
if(Assento=="A5"){
    console.log("     |-----------Passagens áereas----------      |");
    console.log("     |                                           |");
    console.log("     | Você está em ----> Mapa de Assentos       |");
    console.log("     |                                           |");
    console.log("     |-------------------------------------      |");
    console.log("     |                                           |");
    console.log("     | A1 A2 A3 A4 X A6 A7 A8 A9 A10 A11 A12    |");
    console.log("     | B1 B2 B3 B4 B5 B6 B7 B8 B9 B10 B11 B12    |");
    console.log("     |                                           |");
    console.log("     |---------------------------------------    |");
}
if(Assento=="A6"){
    console.log("     |-----------Passagens áereas----------      |");
    console.log("     |                                           |");
    console.log("     | Você está em ----> Mapa de Assentos       |");
    console.log("     |                                           |");
    console.log("     |-------------------------------------      |");
    console.log("     |                                           |");
    console.log("     | A1 A2 A3 A4 A5 X A7 A8 A9 A10 A11 A12    |");
    console.log("     | B1 B2 B3 B4 B5 B6 B7 B8 B9 B10 B11 B12    |");
    console.log("     |                                           |");
    console.log("     |---------------------------------------    |");
}
if(Assento=="A7"){
    console.log("     |-----------Passagens áereas----------      |");
    console.log("     |                                           |");
    console.log("     | Você está em ----> Mapa de Assentos       |");
    console.log("     |                                           |");
    console.log("     |-------------------------------------      |");
    console.log("     |                                           |");
    console.log("     | A1 A2 A3 A4 A5 A6 X A8 A9 A10 A11 A12     |");
    console.log("     | B1 B2 B3 B4 B5 B6 B7 B8 B9 B10 B11 B12    |");
    console.log("     |                                           |");
    console.log("     |---------------------------------------    |");
}
if(Assento=="A8"){
    console.log("     |-----------Passagens áereas----------      |");
    console.log("     |                                           |");
    console.log("     | Você está em ----> Mapa de Assentos       |");
    console.log("     |                                           |");
    console.log("     |-------------------------------------      |");
    console.log("     |                                           |");
    console.log("     | A1 A2 A3 A4 A5 A6 A7 X A9 A10 A11 A12     |");
    console.log("     | B1 B2 B3 B4 B5 B6 B7 B8 B9 B10 B11 B12    |");
    console.log("     |                                           |");
    console.log("     |---------------------------------------    |");
}
if(Assento=="A9"){
    console.log("     |-----------Passagens áereas----------      |");
    console.log("     |                                           |");
    console.log("     | Você está em ----> Mapa de Assentos       |");
    console.log("     |                                           |");
    console.log("     |-------------------------------------      |");
    console.log("     |                                           |");
    console.log("     | A1 A2 A3 A4 A5 A6 A7 A8 X A10 A11 A12    |");
    console.log("     | B1 B2 B3 B4 B5 B6 B7 B8 B9 B10 B11 B12    |");
    console.log("     |                                           |");
    console.log("     |---------------------------------------    |");
}
if(Assento=="A10"){
    console.log("     |-----------Passagens áereas----------      |");
    console.log("     |                                           |");
    console.log("     | Você está em ----> Mapa de Assentos       |");
    console.log("     |                                           |");
    console.log("     |-------------------------------------      |");
    console.log("     |                                           |");
    console.log("     | A1 A2 A3 A4 A5 A6 A7 A8 A9 X A11 A12      |");
    console.log("     | B1 B2 B3 B4 B5 B6 B7 B8 B9 B10 B11 B12    |");
    console.log("     |                                           |");
    console.log("     |---------------------------------------    |");
}
if(Assento=="A11"){
    console.log("     |-----------Passagens áereas----------      |");
    console.log("     |                                           |");
    console.log("     | Você está em ----> Mapa de Assentos       |");
    console.log("     |                                           |");
    console.log("     |-------------------------------------      |");
    console.log("     |                                           |");
    console.log("     | A1 A2 A3 A4 A5 A6 A7 A8 A9 A10 X A12      |");
    console.log("     | B1 B2 B3 B4 B5 B6 B7 B8 B9 B10 B11 B12    |");
    console.log("     |                                           |");
    console.log("     |---------------------------------------    |");
}
if(Assento=="A12"){
    console.log("     |-----------Passagens áereas----------      |");
    console.log("     |                                           |");
    console.log("     | Você está em ----> Mapa de Assentos       |");
    console.log("     |                                           |");
    console.log("     |-------------------------------------      |");
    console.log("     |                                           |");
    console.log("     | A1 A2 A3 A4 A5 A6 A7 A8 A9 A10 A11 X      |");
    console.log("     | B1 B2 B3 B4 B5 B6 B7 B8 B9 B10 B11 B12    |");
    console.log("     |                                           |");
    console.log("     |---------------------------------------    |");
}
if(Assento=="B1"){
    console.log("     |-----------Passagens áereas----------      |");
    console.log("     |                                           |");
    console.log("     | Você está em ----> Mapa de Assentos       |");
    console.log("     |                                           |");
    console.log("     |-------------------------------------      |");
    console.log("     |                                           |");
    console.log("     | A1 A2 A3 A4 A5 A6 A7 A8 A9 A10 A11 A12    |");
    console.log("     | X B2  B3 B4 B5 B6 B7 B8 B9 B10 B11 B12    |");
    console.log("     |                                           |");
    console.log("     |---------------------------------------    |");
}
if(Assento=="B2"){
    console.log("     |-----------Passagens áereas----------      |");
    console.log("     |                                           |");
    console.log("     | Você está em ----> Mapa de Assentos       |");
    console.log("     |                                           |");
    console.log("     |-------------------------------------      |");
    console.log("     |                                           |");
    console.log("     | A1 A2 X A4 A5 A6 A7 A8 A9 A10 A11 A12    |");
    console.log("     | B1 X B3 B4 B5 B6 B7 B8 B9 B10 B11 B12    |");
    console.log("     |                                           |");
    console.log("     |---------------------------------------    |");
}
if(Assento=="B3"){
    console.log("     |-----------Passagens áereas----------      |");
    console.log("     |                                           |");
    console.log("     | Você está em ----> Mapa de Assentos       |");
    console.log("     |                                           |");
    console.log("     |-------------------------------------      |");
    console.log("     |                                           |");
    console.log("     | A1 A2 A3 A4 A5 A6 A7 A8 A9 A10 A11 A12    |");
    console.log("     | B1 B2 X B4 B5 B6 B7 B8 B9 B10 B11 B12    |");
    console.log("     |                                           |");
    console.log("     |---------------------------------------    |");
}
if(Assento=="B4"){
    console.log("     |-----------Passagens áereas----------      |");
    console.log("     |                                           |");
    console.log("     | Você está em ----> Mapa de Assentos       |");
    console.log("     |                                           |");
    console.log("     |-------------------------------------      |");
    console.log("     |                                           |");
    console.log("     | A1 A2 A3 A4 A5 A6 A7 A8 A9 A10 A11 A12    |");
    console.log("     | B1 B2 B3 X B5 B6 B7 B8 B9 B10 B11 B12    |");
    console.log("     |                                           |");
    console.log("     |---------------------------------------    |");
}
if(Assento=="B5"){
    console.log("     |-----------Passagens áereas----------      |");
    console.log("     |                                           |");
    console.log("     | Você está em ----> Mapa de Assentos       |");
    console.log("     |                                           |");
    console.log("     |-------------------------------------      |");
    console.log("     |                                           |");
    console.log("     | A1 A2 A3 A4 A5 A6 A7 A8 A9 A10 A11 A12    |");
    console.log("     | B1 B2 B3 B4 X B6 B7 B8 B9 B10 B11 B12    |");
    console.log("     |                                           |");
    console.log("     |---------------------------------------    |");
}
if(Assento=="B6"){
    console.log("     |-----------Passagens áereas----------      |");
    console.log("     |                                           |");
    console.log("     | Você está em ----> Mapa de Assentos       |");
    console.log("     |                                           |");
    console.log("     |-------------------------------------      |");
    console.log("     |                                           |");
    console.log("     | A1 A2 A3 A4 A5 A6 A7 A8 A9 A10 A11 A12    |");
    console.log("     | B1 B2 B3 B4 B5 X B7 B8 B9 B10 B11 B12    |");
    console.log("     |                                           |");
    console.log("     |---------------------------------------    |");
}
if(Assento=="B7"){
    console.log("     |-----------Passagens áereas----------      |");
    console.log("     |                                           |");
    console.log("     | Você está em ----> Mapa de Assentos       |");
    console.log("     |                                           |");
    console.log("     |-------------------------------------      |");
    console.log("     |                                           |");
    console.log("     | A1 A2 A3 A4 A5 A6 A7 A8 A9 A10 A11 A12    |");
    console.log("     | B1 B2 B3 B4 B5 B6 X B8 B9 B10 B11 B12    |");
    console.log("     |                                           |");
    console.log("     |---------------------------------------    |");
}
if(Assento=="B8"){
    console.log("     |-----------Passagens áereas----------      |");
    console.log("     |                                           |");
    console.log("     | Você está em ----> Mapa de Assentos       |");
    console.log("     |                                           |");
    console.log("     |-------------------------------------      |");
    console.log("     |                                           |");
    console.log("     | A1 A2 A3 A4 A5 A6 A7 A8 A9 A10 A11 A12    |");
    console.log("     | B1 B2 B3 B4 B5 B6 B7 X B9 B10 B11 B12    |");
    console.log("     |                                           |");
    console.log("     |---------------------------------------    |");
}
if(Assento=="B9"){
    console.log("     |-----------Passagens áereas----------      |");
    console.log("     |                                           |");
    console.log("     | Você está em ----> Mapa de Assentos       |");
    console.log("     |                                           |");
    console.log("     |-------------------------------------      |");
    console.log("     |                                           |");
    console.log("     | A1 A2 A3 A4 A5 A6 A7 A8 A9 A10 A11 A12    |");
    console.log("     | B1 B2 B3 B4 B5 B6 B7 B8 X B10 B11 B12     |");
    console.log("     |                                           |");
    console.log("     |---------------------------------------    |");
}
if(Assento=="B10"){
    console.log("     |-----------Passagens áereas----------      |");
    console.log("     |                                           |");
    console.log("     | Você está em ----> Mapa de Assentos       |");
    console.log("     |                                           |");
    console.log("     |-------------------------------------      |");
    console.log("     |                                           |");
    console.log("     | A1 A2 A3 A4 A5 A6 A7 A8 A9 A10 A11 A12    |");
    console.log("     | B1 B2 B3 B4 B5 B6 B7 B8 B9 B10 B11 B12    |");
    console.log("     |                                           |");
    console.log("     |---------------------------------------    |");
}
if(Assento=="B11"){
    console.log("     |-----------Passagens áereas----------      |");
    console.log("     |                                           |");
    console.log("     | Você está em ----> Mapa de Assentos       |");
    console.log("     |                                           |");
    console.log("     |-------------------------------------      |");
    console.log("     |                                           |");
    console.log("     | A1 A2 A3 A4 A5 A6 A7 A8 A9 A10 A11 A12    |");
    console.log("     | B1 B2 B3 B4 B5 B6 B7 B8 B9 B10 X B12      |");
    console.log("     |                                           |");
    console.log("     |---------------------------------------    |");
}
if(Assento=="B12"){
    console.log("     |-----------Passagens áereas----------      |");
    console.log("     |                                           |");
    console.log("     | Você está em ----> Mapa de Assentos       |");
    console.log("     |                                           |");
    console.log("     |-------------------------------------      |");
    console.log("     |                                           |");
    console.log("     | A1 A2 A3 A4 A5 A6 A7 A8 A9 A10 A11 A12    |");
    console.log("     | B1 B2 B3 B4 B5 B6 B7 B8 B9 B10 B11 X      |");
    console.log("     |                                           |");
    console.log("     |---------------------------------------    |");
}







