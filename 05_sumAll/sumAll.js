//Implement a function that takes 2 integers and returns the sum of every number between(and including) them://

const sumAll = function(number1,number2) {
    if ( Number.isInteger(number1) && Number.isInteger(number2)) {
        if ((number1 > 0) && (number2 > 0)) {
            let sum = 0;
                if (number1 > number2) {
                        // switch the parameter order if the first parameter is bigger than the second.
                        let temp = number1;
                        number1 = number2;
                        number2 = temp;
                }
            for (let index = number1; index <=  number2; index++) {
                sum += index;        
                }        
            return sum;
            
            }
            else {
                return "ERROR";
            }
        }
    else {
            return "ERROR";
        }
};

// NOTES//
//return ERROR is number not number or not positive.
// Loop from start number to end number exclusive. 
// Sum of all
// Add start number + last number
console.log(sumAll(-1, 1));

// Do not edit below this line
module.exports = sumAll;
