//Ask train user how many kilometers is his commute and his age.
const commuteKm = prompt("How many kilometers is your commute?");

//Ask train user his age.
const userAge = prompt("How old are you?");

//Assume price per km = 0.21€/km. 
const pricePerKm = 0.21;
//Calculate commute gross price.
const grossPrice = pricePerKm * commuteKm;
console.log(`${grossPrice}€`);
//Discount 20% off for under 18 users and 40% for over 65 users.

//Output must be rounded to 2 decimal places maximum.