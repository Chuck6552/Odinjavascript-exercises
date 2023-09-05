const leapYears = function(year) {
    if  (year % 4 === 0){         
        if ((year % 100 === 0)) 
        {
            if (year % 400 === 0) {
                return true;
            }
            else {
                return false;
            }
        }
    return true;
    }
    else {
        return false;
    }
};

// console.log(leapYears(1900));

//NOTES//
// %4 doit etre 0 
// % 100 seulement == FALSE 
// %100 ET %400 == TRUE

// Do not edit below this line
module.exports = leapYears;
