function NthLargestVal(arr, n){
  if (arr.length < 2){
    return null;
  }
  if (n > arr.length){
    return null;
  }
  var max = findMax(arr);
  // max is the index

  for (var i = 1; i < n; i++){
    max = findOtherMax(arr, max);
  }
  return arr[max];
}


function findMax(arr){
  if (arr.length < 2){
    return arr[0];
  }
  var max = 0;
  for (var i = 1; i < arr.length; i++){
    if (arr[max] < arr[i]){
      max = i;
    }
  }
  return max;
}

function findOtherMax(arr, max){

  for (var i = 0; i < arr.length;i++){
    if (arr[i] < arr[max]){
      var new_max = i;
      break;
    }
  }

  for (var i = arr.length - 1; i > 0; i--){
    if(arr[i] < arr[max] && arr[new_max] < arr[i]){
      new_max = i;
    }
  }

  return new_max;
}

var arr = [5,2,3,6,4,9,7];
console.log(NthLargestVal(arr, 3));
// console.log(findMax(arr));
