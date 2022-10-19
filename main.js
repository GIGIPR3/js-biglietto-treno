
let Eta = prompt('Scrivimi quanti anni hai:');
console.log(latuaeta);

let Chilometri = prompt('Scrivimi i chilometri che vuoi fare:');
console.log(chilometrichevuoifare);

    const priceKm = 0.21;

    let prezzototale = Chilometri * priceKm;

    let underdiscount = ticketPrice * 0.2;

    let upperdiscount = ticketPrice * 0.4;

    const ticketKidPrice = ticketPrice - underdiscount;
    const ticketSeniorPrice = ticketKidPrice - upperdiscount;

    if (Eta >= 65){
        ticketPrice = ticketSeniorPrice.toFixed(2);
    }
    
    else if (Eta <= 18){
        ticketPrice = ticketKidPrice.toFixed(2);
    }

    else{
        ticketPrice = ticketPrice.toFixed(2);
    }

    document.getElementById('prezzototale').innerHTML = "prezzototale " + ticketPrice+ "$"
