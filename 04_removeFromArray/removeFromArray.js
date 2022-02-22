function spliceArray(array, itemRemoval){
  let counter = array.length;
  while (counter--){
    if (array[counter] === itemRemoval){
      array.splice(array.indexOf(itemRemoval),1);
    }
  }
}

const removeFromArray = function(array, ...removeTargetItem) {
  let targetArray = array;
  for(let i = 0; i <= removeTargetItem.length; i++){
    targetRemoval = removeTargetItem[i]
    spliceArray(targetArray, targetRemoval);
  }
  return targetArray;
};

// Do not edit below this line
module.exports = removeFromArray;