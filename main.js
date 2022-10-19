
let eta = prompt('Scrivimi quanti anni hai:');
console.log(eta);

let chilometri = prompt('Scrivimi i chilometri che vuoi fare:');
console.log(chilometri);

    const priceKm = 0.21;

    let ticketPrice = chilometri * priceKm;

    let underdiscount = ticketPrice * 0.2;

    let upperdiscount = ticketPrice * 0.4;

    const ticketKidPrice = ticketPrice - underdiscount;
    const ticketSeniorPrice = ticketPrice - upperdiscount;

    if (eta >= 65){
        ticketPrice = ticketSeniorPrice.toFixed(2);
    }
    
    else if (eta <= 18){
        ticketPrice = ticketKidPrice.toFixed(2);
    }

    else{
        prezzototale = prezzototale.toFixed(2);
    }

    document.getElementById('prezzototale').innerHTML = "prezzototale " + ticketPrice+ "$"
