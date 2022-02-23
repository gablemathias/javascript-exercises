//( 	[°C] = ([°F] − 32) × 5⁄9
const ftoc = function(value) {
  let celsius
    , celsiusRounded;
  celsius = (value - 32) * (5/9);
  celsiusRounded = Math.round(celsius * 10) / 10;
  return celsiusRounded;
};

const ctof = function(value) {
  let fahrenheit
    , fahrenheitRounded;
  
  fahrenheit = (value * (9/5)) + 32;
  fahrenheitRounded = Math.round(fahrenheit * 10) / 10;
  return fahrenheitRounded;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};