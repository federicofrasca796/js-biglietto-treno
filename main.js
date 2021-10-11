//Ask train user how many kilometers is his commute and his age.
const commuteKm = parseFloat(prompt("How many kilometers is your commute?"));

//Ask train user his age.
const userAge = prompt("How old are you?");

//Assume price per km = 0.21€/km. 
const pricePerKm = 0.21;
//Calculate commute gross price.
const grossPrice = pricePerKm * commuteKm;

//Discount 20% off for under 18 users and 40% for over 65 users.
let discount_20;
let discount_40;

if (userAge < 18) {

    discount_20 = grossPrice - (grossPrice * 20/100);
    console.log(`${discount_20}€`);

} else if  (userAge > 65) {

    discount_40 = grossPrice - (grossPrice * 40/100);
    console.log(`${discount_40}€`);

} else {

    console.log(`${grossPrice}€`);
    
}
//Output must be rounded to 2 decimal places maximum.