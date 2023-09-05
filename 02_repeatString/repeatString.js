const repeatString = function(stringToRepeat, numberOfRepetition) {
    repeatedString = "";
    if (numberOfRepetition < 0) {
        return "ERROR";
    }
    else {
        for (let index = 0; index < numberOfRepetition; index++) {
            repeatedString = repeatedString.concat(stringToRepeat);   
        }
    return repeatedString;
    }

    
};

console.log(repeatString("hey",3));

//Note Solution ULTIME//
// const repeatString = function (word, times) {
//     if (times < 0) return "ERROR";
//     let string = "";
//     for (let i = 0; i < times; i++) {
//       string += word;
//     }
//     return string;
//   };






// Do not edit below this line
module.exports = repeatString;
