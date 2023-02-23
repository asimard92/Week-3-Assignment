// 1.  Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
let ages = [3, 9, 23, 64, 2, 8, 28, 93];


// 1a. Programmatically subtract the value of the first element in the array from the value in the last element of the array.
let calculatedAge = ages[ages.length-1] - ages[0];

console.log(calculatedAge);

// 1b. Add a new age to your array and repeat the step above to ensure it is dynamic. 
ages.push (20);
calculatedAge = ages[ages.length-1] - ages[0];

console.log(calculatedAge);

// 1c. Use a loop to iterate through the array and calculate the average age
let total = 0;
for(var i = 0; i < ages.length; i++) {
    total += ages[i];
}
let average1 = total / ages.length;

console.log(average1);

// 2.  Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’
let names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"];

// 2a. Use a loop to iterate through the array and calculate the average number of letters per name.
let nameTotal = 0; 
for(var i = 0; i < names.length; i++) {
    nameTotal += names[i].length;
}
let nameAverage = nameTotal / names.length;

console.log(nameAverage);

// 2b. Use a loop to iterate through the array again and concatenate all the names together, separated by spaces

let allNames = 0;

for(let i = 0; i < names; i++) {
    allNames = allNames + " " + names[i];
}

console.log(allNames);

// Or it can be written like this:
console.log(names.join(' '));

// 3.  How do you access the last element of any array?

// array.length[-1]
// To access the last element of any array, you will use [-1] at the end of the length of the array. 

// 4.  How do you access the first element of any array?

// array.length[0] 
// Arrays are zero based index so the first element is [0]. 

// 5.  Create a new array called nameLengths. Write a loop to iterate over the previously created names array
//     and add the length of each name to the nameLengths array.
let nameLengths = [];

for (let i = 0; i < names.length; i++){
    nameLengths.push(names[i].length);
}

console.log(nameLengths);

// 6.  Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array
let sum1 = 0

for (let i = 0; i < nameLengths.length; i++){
    sum1 += nameLengths[i];
}
console.log(sum1);

// 7.  Write a function that takes two parameters, word and n, as arguments and returns the word
//     concatenated to itself n number of times.
let newFunction = (word, n) => {
    let result = "";
    for (let i = 0; i < n; i++) {
        result += word;
    }
    return result;
}

console.log(newFunction("Marcia", 3));

// 8.  Write a function that takes two parameters, firstName and lastName, and returns a full name.
let fullName = (firstName, lastName) => `${firstName} ${lastName}`;

console.log(fullName("John", "Smith"));


// 9.  Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is
//     greater than 100.
let newArray1 = [7, 21, 19, 62, 5, 21]
let sum2 = 0;
for (let i = 0; i < newArray1.length; i++){
    sum2 += newArray1[i];
}

function addUp(sum2){
    return sum2 > 100;
}

console.log(addUp(sum2));


// 10.  Write a functon that takes an array of numbers and returns the average of all the elements in the array.
let newArray2 = [6, 9, 20, 11, 16, 30];
let sum3 = 0;

for (let i = 0; i < newArray2.length; i++){
    sum3 += newArray2[i];
}

average2 = sum3 / newArray2.length;

console.log(average2); 

// 11.  Write a function that takes two arrays of numbers and returns true if the average of the elements in the
//      first array is greater than the average of the elements in the second array.

function averageOfArrays(array1, array2) {
    let totalNumbers1 = 0;
    let totalNumbers2 = 0;

    for (let i = 0; i < array1.length; i++){
        totalNumbers1 += array1[i];
    }
    let average1 = totalNumbers1 / array1.length;
    
    for (let i = 0; i < array2.length; i++){
        totalNumbers2 += array2[i];
    }
    let average2 = totalNumbers2 / array2.length;

    return average1 > average2;
}


let numbers2 = [4, 9, 6];
let numbers3 = [7, 3, 2];

console.log(averageOfArrays(numbers2, numbers3));

// 12.  Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket,
//       and returns true if it is hot outside and if moneyInPocket is greater than 10.50.
let isHotOutside = true;
let moneyInPocket = 11;

function willBuyDrink(isHotOutside, moneyInPocket) {
   if (isHotOutside == true && moneyInPocket > 10.50) {
        return true; 
    } else {
        return false;
    }
}
console.log(willBuyDrink(isHotOutside, moneyInPocket));

// 13.  Create a function of your own that solves a problem.

console.log("\nTipping calculator: ");
percentTipped = 25;

function tippingCalculator(percentTipped){
    if (percentTipped >= 24){
        return ("This person was a great server!") ;
    }   if (percentTipped >= 20)  {
        return ("This person was a very good server.") ; 
    }   if (percentTipped >= 15) {
        return ("This person was an okay server.") ;
    }  else {
        return ("This server was not on their A game today.") ;
    }   
}
console.log(tippingCalculator(percentTipped));

// I used a tipping calculator for this question. The way it works is you put your percentage amount in the percentTipped 
// variable to determine how good the server was. The better the tip, the better the server did!