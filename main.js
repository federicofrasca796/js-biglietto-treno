//Ask train user how many kilometers is his commute and his age.
const commuteKm = parseInt(prompt("How many kilometers is your commute?"));

//Ask train user his age.
const userAge = parseInt(prompt("How old are you?"));

//Assume price per km = 0.21€/km. Calculate commute gross price.
let price = .21 * commuteKm;

//Discount 20% off for under 18 users and 40% for over 65 users.
//Output must be rounded to 2 decimal places maximum.
if (userAge < 18) {

    price -= price * 0.2;   
    
} else if (userAge > 65) {

    price -= price * 0.4; 

}

//Round decimals to a maximum of 2:
document.getElementById('ticket_price').innerHTML = `Your ticket will cost ${Math.round(price * 100) / 100 + '€'}`;