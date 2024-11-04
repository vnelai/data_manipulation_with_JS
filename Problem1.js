// Data Manipulation with Javascript



// The initial numbers that must be verified.
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;

// Check one: add up to 50
// This is a fairly simple operation using
// arithmetic operators and a comparison.
const isSum50 = (n1 + n2 + n3 + n4) == 50;

console.log("is sum 50: ", isSum50);

// Check two: at least two odd numbers
// Here, we use modulus to check if something is odd.
// Since % 2 is 0 if even and 1 if odd, we can use
// arithmetic to count the total number of odd numbers.
const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;

console.log("is two odd ", isTwoOdd);

// Check three: no number larger than 25
// This time, we use the OR operator to check
// if ANY of the numbers is larger than 25.
const isOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;


console.log("is there a number over 25: ", isOver25);

// Check four: all unique numbers
// This is long, and there are more efficient
// ways of handling it with other data structures
// that we will review later.
const isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;

console.log("are all the numbers unique: ", isUnique);


// Here, we put the results into a single variable 
// for convenience. Note how we negate isOver25 using
// the ! operator. We could also have tested for 
// "isUnder25" as an alternative.
const isValid = isSum50 && isTwoOdd && !isOver25 && isUnique;


// Finally, log the results.
console.log("is the code valid ", isValid);


// Check if all numbers are divisible by 5
 let divisible_By_Five = (n1%5==0) && (n2%5==0) && (n3%5==0) && (n4%5==0);
console.log("is_all_divisible_by_five: ", divisible_By_Five);


// Check if the first number is larger than the last
let first_Number_Larger_Than_Last = (n1 > n4);
console.log("first number larger than last: ", first_Number_Larger_Than_Last);

// Subtract the first number from the second number.
let n2_Minus_n1 = (n2-n1);
console.log("Subtract the first number from the second number.: ", n2_Minus_n1);

// Multiply the result (n2_Minus_n1) by the third number.
let n2_Minus_n1_result_times_n3 = (n2_Minus_n1)*n3;
console.log("Multiply the result (n2_Minus_n1) by the third number: ", n2_Minus_n1_result_times_n3);

// Find the remainder of dividing the result by the fourth number.
let remainder_Result_Divided_By_n4 = ( n2_Minus_n1_result_times_n3)%n4;
console.log("remainder of dividing the result by the fourth number.: ",remainder_Result_Divided_By_n4 );


