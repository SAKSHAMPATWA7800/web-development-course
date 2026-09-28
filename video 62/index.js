/* Create a business name generator that combines list of adjectives and shop name another word


Adjectives:
Crazy 
Amazing
Fire

Shop Name:
Engine
Foods
Garments

Another word:
Bros
Limited
Hub

Adjective + Shop Name + Another Word

*/

// Business Name Generator (Without Arrays)

// Generate random numbers (0 to 2)
let adj = Math.floor(Math.random() * 3);
let shop = Math.floor(Math.random() * 3);
let word = Math.floor(Math.random() * 3);

// Adjective
let first;
if (adj === 0) {
    first = "Crazy";
} else if (adj === 1) {
    first = "Amazing";
} else {
    first = "Fire";
}

// Shop Name
let second;
if (shop === 0) {
    second = "Engine";
} else if (shop === 1) {
    second = "Foods";
} else {
    second = "Garments";
}

// Another Word
let third;
if (word === 0) {
    third = "Bros";
} else if (word === 1) {
    third = "Limited";
} else {
    third = "Hub";
}

// Final Business Name
console.log("Business Name: " + first + " " + second + " " + third);












