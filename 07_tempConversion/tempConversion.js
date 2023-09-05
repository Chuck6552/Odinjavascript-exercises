const convertToCelsius = function(fahrenheitTemperature) {
  let celsius = 0; 
  celsius = ((fahrenheitTemperature - 32) * (5/9) );
  //Multiply by 10 to get the last digit we want and Math.round to round it and finlay / 10 to get back at our original number
  celsius = (Math.round(celsius * 10))/10;
  return celsius;
};

const convertToFahrenheit = function(celsiusTemperature) {
  let fahrenheit = 0; 
  fahrenheit = ( (celsiusTemperature * 9/5) + 32) ;
  //Multiply by 10 to get the last digit we want and Math.round to round it and finlay / 10 to get back at our original number
   fahrenheit = (Math.round(fahrenheit * 10))/10;
  return fahrenheit;
};

console.log(convertToCelsius(100));
console.log(convertToFahrenheit(0));



//Fahrenheit to Celsius formula
// Celsius = (F -32) * 9/5

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
