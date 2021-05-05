

//In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
//L’utente non può inserire più volte lo stesso numero.
//Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
//La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.







//Il computer deve generare 16 numeri casuali tra 1 e 100.
var min = 1;
var max = 100;

function randomNumber(min, max){
    
    var random = Math.floor(Math.random() * (max - min) + min);   
    return random;
}

//I numeri non possono essere duplicati.
var arrayBombe=[];
var i =0;
while(i < 16){
    var bomba = randomNumber(min, max);
    if(!arrayBombe.includes(bomba)){
        arrayBombe.push(bomba);
    }
    i++;
}

console.log(arrayBombe);
//In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.


    
    var arrayUtente =[];
    var j = 0;
    do{
        var numPlayer = Number(prompt('inserisci un numero tra 1 e 100 senza ripeterlo'));
    if(isNaN(numPlayer) ){
        alert ('Il valore inserito non è un numero')
        
        
            }else if (numPlayer < 1 || numPlayer >100){
                alert ('il numero inserito è fuori dal range');}
                else if(arrayBombe.includes(numPlayer)){
                    alert('hai perso');
                    break;
                }    
                else if( arrayUtente.includes(numPlayer)){
                        alert('numero già inserito');
                    }else{
                        arrayUtente.push(numPlayer);
                    }
                 
                j++;
                
                
                }
while( j < 5)

                 console.log(arrayUtente);

