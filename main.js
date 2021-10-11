//Ask train user how many kilometers is his commute and his age.
const commuteKm = parseFloat(prompt("How many kilometers is your commute?"));

//Ask train user his age.
const userAge = prompt("How old are you?");

//Assume price per km = 0.21€/km. 
const pricePerKm = 0.21;
//Calculate commute gross price.
const grossPrice = pricePerKm * commuteKm;

//Discount 20% off for under 18 users and 40% for over 65 users.
//Output must be rounded to 2 decimal places maximum.
if (userAge < 18) {

    const discount_20 = grossPrice - (grossPrice * 20/100);    
    //Round decimals to a maximum of 2:
    console.log(Math.round(discount_20 * 100) / 100 + '€');
    document.getElementById('ticket_price').innerHTML = `Your ticket will cost ${Math.round(discount_20 * 100) / 100 + '€'}`;
    
} else if (userAge > 65) {

    const discount_40 = grossPrice - (grossPrice * 40/100);    
    //Round decimals to a maximum of 2:
    console.log(Math.round(discount_40 * 100) / 100 + '€');
    document.getElementById('ticket_price').innerHTML = `Your ticket will cost ${Math.round(discount_40 * 100) / 100 + '€'}`;

} else {    
    //Round decimals to a maximum of 2:
    console.log(Math.round(grossPrice * 100) / 100 + '€');
    document.getElementById('ticket_price').innerHTML = `Your ticket will cost ${Math.round(grossPrice * 100) / 100 + '€'}`;
}

