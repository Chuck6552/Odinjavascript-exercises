const removeFromArray = function(array, ...valueToRemove ) {
    finalArray = array;
    for (let index = 0; index < (valueToRemove.length); index++) {
        singleValueToRemove = valueToRemove[index];
        while (finalArray.indexOf(singleValueToRemove) != -1) {
            let positionToRemove = finalArray.indexOf(singleValueToRemove);
            finalArray = finalArray.toSpliced(positionToRemove,1);
        }
    }
    
return finalArray;
};



//TEST//

removeFromArray([1,2,3,4],"3",2);
console.log("This is the final array " + finalArray);


//NOTES//
// check if the item is in the array : 
//Array.includes = Boolean// array.includes(item, fromIndex)
// Find the item position in the array.
    //.indexOf();
//remove the item in question .splice(indexOf,number to eliminate)
//return the new array



// Do not edit below this line
module.exports = removeFromArray;
