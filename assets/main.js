/* CAMPO MINATO */
//BONUS: (da fare solo se funziona tutto il resto)
//all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali:
//con difficoltà 0 => tra 1 e 100
//con difficoltà 1 => tra 1 e 80
//con difficoltà 2 => tra 1 e 50

//Il computer deve generare 16 numeri casuali tra 1 e 100.
var min = 1;
var max = 100;
var limite = 5;


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
        if(isNaN(numPlayer)){
        alert ('Il valore inserito non è un numero');
        
            }else if (numPlayer < 1 || numPlayer >100){
                alert ('il numero inserito è fuori dal range');}
               
                //Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
                 else if(arrayBombe.includes(numPlayer)){
                    alert('hai perso');
                    break;
                } //L’utente non può inserire più volte lo stesso numero.  
                else if( arrayUtente.includes(numPlayer)){
                        alert('numero già inserito');
                    }else{
                        arrayUtente.push(numPlayer);
                        j++;
                    }
                 
                
                
                
        }
        while (j < limite)
//La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
if(j == limite){
    alert('Complimenti, Hai Vinto!!! il tuo punteggio è ' + limite); 
}  else{
    alert('il tuo punteggio è  ' + j);
}
