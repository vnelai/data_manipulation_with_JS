// Data Manipulation with Javascript

// Planning a cross-country road trip!

// The initial values
const tripDistance = 1500;
const milesPerHourSpeed55 = 55;
const milesPerHourSpeed60 = 60;
const milesPerHourSpeed75 = 75;
const milesPerGallonSpeed55 = 30;
const milesPerGallonSpeed60 = 28;
const milesPerGallonSpeed75 = 23;
const fuelBudget = 175;
const averageCostPerGallon = 3;

//How many gallons of fuel will you need for the entire trip?
let totalGallonsForSpeed55 = tripDistance / milesPerGallonSpeed55;
let totalGallonsForSpeed60 = tripDistance / milesPerGallonSpeed60;
let totalGallonsForSpeed75 = tripDistance / milesPerGallonSpeed75;

console.log(`totalGallonsSpeed55= ${totalGallonsForSpeed55.toFixed(2)}`);
console.log(`totalGallonsSpeed60= ${totalGallonsForSpeed60.toFixed(2)}`);
console.log(`totalGallonsSpeed75= ${totalGallonsForSpeed75.toFixed(2)}`);

// Will your budget be enough to cover the fuel expense?
let fuelBudgetEnoughForSpeed55 = (totalGallonsForSpeed55 * 3) <= 175;
let fuelBudgetEnoughForSpeed60 = (totalGallonsForSpeed60 * 3) <= 175;
let fuelBudgetEnoughForSpeed75 = (totalGallonsForSpeed75 * 3) <= 175;

console.log(`fuelBudgetEnoughForSpeed55: ${fuelBudgetEnoughForSpeed55}`);
console.log(`fuelBudgetEnoughForSpeed60: ${fuelBudgetEnoughForSpeed60}`);
console.log(`fuelBudgetEnoughForSpeed75: ${fuelBudgetEnoughForSpeed75}`);

// How long will the trip take, in hours?
let hoursTraveledSpeed55 = tripDistance / milesPerGallonSpeed55;
let hoursTraveledSpeed60 = tripDistance / milesPerGallonSpeed60;
let hoursTraveledSpeed75 = tripDistance / milesPerGallonSpeed75;

console.log(`hoursTraveledSpeed55 = ${hoursTraveledSpeed55.toFixed(2)}`);
console.log(`hoursTraveledSpeed60 = ${hoursTraveledSpeed60.toFixed(2)}`);
console.log(`hoursTraveledSpeed75 = ${hoursTraveledSpeed75.toFixed(2)}`);