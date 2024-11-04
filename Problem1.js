// Data Manipulation with Javascript


// The initial numbers that must be verified.
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;


// Check one: add up to 50
const isSum50 = (n1 + n2 + n3 + n4) == 50;
console.log("is sum 50: ", isSum50);


// Check two: at least two odd numbers
const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;
console.log("is two odd ", isTwoOdd);


// Check three: no number larger than 25
const isOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;
console.log("is there a number over 25: ", isOver25);


// Check four: all unique numbers
const isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;
console.log("are all the numbers unique: ", isUnique);


// Check to see if the values of the variables meet the criteria
const isValid = isSum50 && isTwoOdd && !isOver25 && isUnique;
console.log("is the code valid ", isValid);


// Check if all numbers are divisible by 5
 let divisibleByFive = (n1%5==0) && (n2%5==0) && (n3%5==0) && (n4%5==0);
console.log("is_all_divisible_by_five: ", divisibleByFive);


// Check if the first number is larger than the last
let firstNumberLargerThanLast = (n1 > n4);
console.log("first number larger than last: ", firstNumberLargerThanLast);

// Subtract the first number from the second number.
let n2Minusn1 = (n2-n1);
console.log("Subtract the first number from the second number.: ", n2Minusn1);

// Multiply the result (n2_Minus_n1) by the third number.
let n2Minusn1ResultTimesn3 = (n2Minusn1)*n3;
console.log("Multiply the result (n2_Minus_n1) by the third number: ", n2Minusn1ResultTimesn3);

// Find the remainder of dividing the result by the fourth number.
let remainderResultDividedByn4 = ( n2Minusn1ResultTimesn3)%n4;
console.log("remainder of dividing the result by the fourth number.: ",remainderResultDividedByn4 );

// Change the way that isOver25 calculates so that we do not need to use the NOT operator (!) in other logic comparisons. 
const isUnder25 = n1 < 25 && n2 < 25 && n3 < 25 && n4 < 25;
console.log("Are all numbers under 25: ", isUnder25);

