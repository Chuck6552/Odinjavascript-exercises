// //Variable declaration//
// let lengthOfStringToReverse = 0;
// let stringToReverse = "";
// let finalString = "";

const reverseString = function(stringToReverse) {
let lengthOfStringToReverse = stringToReverse.length;
let finalString = "";
for (let index = (lengthOfStringToReverse - 1); index > -1; index--) {
    finalString += (stringToReverse.at(index));
};
return finalString;
};


//notes//
//Get lenght of string 
//loop for all string : 
    //store last position in array
    // loop the number of time the lenght of string
        //concatenate last position + new position
        // new position = "";
//TEST//
// if( (reverseString("hello there")) === ("ereht olleh"))
// {
//     console.log("YAYYYYYY!!");
// }
// console.log(reverseString("hello there"));



// Do not edit below this line
module.exports = reverseString;