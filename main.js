function generaPrezzo() {
    let valueChilometri = document.getElementById('quantiChilometri').value;
    let valueEta = document.getElementById('lasuaeta').value;

    const priceKm = 0.21;

    let ticketPrice = valueChilometri * priceKm;

    let underdiscount = ticketPrice * 0.2;

    let upperdiscount = ticketPrice * 0.4;

    const ticketKidPrice = ticketPrice - underdiscount;
    const ticketSeniorPrice = ticketKidPrice - upperdiscount;

    if (valueEta >= 65){
        ticketPrice = ticketSeniorPrice.toFixed(2);
    }
    
    else if (valueEta <= 18){
        ticketPrice = ticketKidPrice.toFixed(2);
    }

    else{
        ticketPrice = ticketPrice.toFixed(2);
    }

    document.getElementById('prezzototale').innerHTML = "prezzototale " + ticketPrice+ "$"
}