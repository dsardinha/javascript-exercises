// xF = (x - 32) * (5/9)C
const convertToCelsius = function(degreesFahrenheit) {
  return Math.round(((degreesFahrenheit - 32) * 5 / 9) * 10) / 10;
};

// xC = (x * (9/5) + 32)F
const convertToFahrenheit = function(degreesCelsius) {
  return Math.round((degreesCelsius * 9 / 5 + 32) * 10) / 10
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
