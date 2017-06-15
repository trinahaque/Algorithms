// problems

// Reverse an array using recursion

function reverseArr(arr){
  if (arr.length == 0){
    return;
  }
  return arr;
}


// multiplies each array item by num
function arrMultiplier(arr, num){
  if (arr.length == 0){
    return;
  }
  var val = arr.pop();
  arrMultiplier(arr, num);
  // console.log(arr);
  arr.push(val*num);
  return arr;
}

console.log(arrMultiplier([1,2,3,4], 3));
