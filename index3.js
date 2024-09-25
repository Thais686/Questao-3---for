let cartas= Number( prompt("Quantas cartas voce quer sortear?"))
let i
let valor=0

for(i=1;i<=cartas;i++){

    let valor=Math.floor(Math.random() * 9 )+1 

    let naipe = Math.floor(Math.random() * 4)
    if(naipe == 0){
        naipe = "copas"
     }
     else if(naipe==1){

        naipe="ouros"

     }
     else if(naipe==2){

        naipe="espadas"

     }
     else{

        naipe="paus"
     }
     console.log(`Carta: ${valor} de ${naipe}`);
}