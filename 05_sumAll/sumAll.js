const sumAll = function(int1, int2) {
  const betweenList = [int1, int2];
  betweenList.sort(function(a, b){return a-b});
  console.log(betweenList)
  if (betweenList[0] < 0){
    return 'ERROR';
  }
  for(let value of betweenList){
    if(typeof(value) !== 'number'){
      return 'ERROR';
    }
  }
  let sum = 0;
  for(let i = betweenList[0]; i <= betweenList[1]; i++){
    sum += i;
  } return sum;
};

// Do not edit below this line
module.exports = sumAll;