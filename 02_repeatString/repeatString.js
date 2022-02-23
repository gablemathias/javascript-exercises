//Write a function that simply repeats the string a given number of times:

let stringComplete;

const repeatString = function(string, num) {
  stringComplete = string;
  if (num == 0){
    return stringComplete = '';
  } else if(num < 0){ 
    return stringComplete = 'ERROR';
  }
  for(let i = 1; i < num; i++){
    stringComplete += string;
  }
  return stringComplete;
};

// Do not edit below this line
module.exports = repeatString;
