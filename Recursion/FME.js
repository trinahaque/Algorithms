// Reverse an array using recursion


function revArr(arr, new_arr){
  if (!new_arr){
    new_arr = [];
  }
  if (arr.length == 0){
    return;
  }
  new_arr.push(arr.pop());
  revArr(arr, new_arr);
  return new_arr;
}


function revArrIf(arr, new_arr){
  if (!new_arr){
    new_arr = [];
  }
  if (arr.length > 0){
    new_arr.push(arr.pop());
    revArrIf(arr, new_arr);
  }
  return new_arr;
}


console.log(revArrIf([1,2,3,4,5]));

function reverseArr(arr, start, end){
  if (!start){
    start = 0;
    end = arr.length - 1;
  }
  if (start < end){
    var tmp = arr[start];
    arr[start] = arr[end];
    arr[end] = tmp;
    start++;
    end--;
    reverseArr(arr, start, end);
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


// console.log(reverseArr([1,2,3,4,5]));
// console.log(arrMultiplier([1,2,3,4], 3));
