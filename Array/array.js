function pushFront(arr, val){
  if (arr.length < 1){
    arr.push(val);
    return arr;
  }

  for (var i = arr.length; i > 0; i--){
    arr[i] = arr[i-1];
  }
  arr[0] = val;
  return arr;
}

function insertAt(arr, index, val){
  if (arr.length < index){
    // arr[index] = val;
    arr.push(val);
    return arr;
  }
  for (var i = arr.length; i > index; i--){
    arr[i] = arr[i-1];
  }
  arr[index] = val;
  return arr;
}

function popFront(arr){
  var front = arr[0];
  for (var i = 0; i < arr.length; i++){
    arr[i] = arr[i+1];
  }
  console.log("The removed item is", front);
  // arr.length = arr.length - 1;
  arr.pop();
  // arr = arr.splice(1);
  return arr;
}

function removeAt(arr, index){
  if (arr.length < index){
    return null;
  }
  var value = arr[index];
  for (var i = index; i < arr.length; i++){
    arr[i] = arr[i+1];
  }
  arr.pop();
  // var value = arr.splice(index, 1);
  // console.log("The value is", value);
  return arr;
}

function swapPairs(arr){
  if (arr.length < 2){
    return arr;
  }
  for (var i = 0; i < arr.length; i = i + 2){
    if ((i+1) < arr.length){
      var tmp = arr[i];
      arr[i] = arr[i+1];
      arr[i+1] = tmp;
    }
    else{
      break;
    }
  }
  return arr;
}

function removeDuplicates(arr){
  if (arr.length < 2){
    return arr;
  }
  for (var i = arr.length - 1; i > 0; i--){
    if (arr[i] == arr[i-1]){
      var value = arr.splice(i,1);
      console.log(value);
    }
  }
  return arr;
}
function moveMin(arr){
  var index = 0;
  for (var i=1; i < arr.length; i++){
    if (arr[i] < arr[index]){
      index = i;
    }
  }
  var min = arr[index];
  for (var i=index; i> 0; i--){
    arr[i] = arr[i-1];
  }
  arr[0] = min;
  console.log("The array is", arr);
  // console.log("The index is", arr[index], arr);
}

function reverse(arr){
  if (arr.length < 1){
    return null;
  }
  if (arr.length < 2){
    return arr;
  }
  for (var i = 0; i < Math.floor(arr.length/2); i++){
    var tmp = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = tmp;
    // console.log(arr);
  }
  return arr;
}

function concat(arr1, arr2){
  if (arr1.length < 1 && arr2.length < 1){
    // when both arrays are empty
    return arr1;
  }
  // when either array is empty, return the other array
  if (arr1.length < 1){
    return arr2;
  }
  if (arr2.length < 1){
    return arr1;
  }
  for (var i = 0; i < arr2.length; i++){
    arr1.push(arr2[i]);
    console.log(arr1);
  }
  return arr1;
}

function secondToLast(arr){
  if (arr.length < 2){
    return null;
  }
  return arr[arr.length-2];
}

function NthLast(arr, n){
  if (arr.length < 1){
    return null;
  }
  if (n < 1){
    console.log("n needs to be greater than 0");
    return false;
  }
  if (arr.length < n){
    return null;
  }
  return arr[arr.length-n];
}

function secondLargestVal(arr){
  if (arr.length < 2){
    // can't have second largest if there is only one element
    return null;
  }
  var max = 0;
  for (var i = 1; i < arr.length; i++){
    if (arr[i] > arr[max]){
      max = i;
      // console.log(max);
    }
  }
  if (max == 0){
    var secondMax = arr[1];
  }
  else{
    var secondMax = arr[0];
  }

  for (var i = 0; i < arr.length; i++){
    if (arr[i] !== arr[max] && arr[i] > secondMax){
      secondMax = arr[i];
    }
  }
  return secondMax;
}

function rotate(arr, shiftBy){
  if (arr.length < 2){
    return arr;
  }
  var index = shiftBy % arr.length;
  // console.log("Shifted index is", index);
  for (var i = 0; i < index; i++){
    shiftOne(arr);
  }
  return arr;
}

function shiftOne(arr){
  if (arr.length < 2){
    return arr;
  }
  var tmp = arr[0];
  arr[0] = arr[arr.length - 1];
  for (var i = arr.length - 1; i > 0; i--){
    arr[i] = arr[i-1];
  }
  arr[1] = tmp;
  return arr;
}

function filterRange(arr, min, max){
  if (arr.length < 1){
    return arr;
  }
  for (var i = 0; i < arr.length; i++){
    for (var index = min; index < max+1; index++){
      if (arr[i] == index){
        for (var ind = i; ind < arr.length; ind++){
          arr[i] = arr[i+1];
          console.log(arr);
        }
        // arr.pop();
      }
    }
  }
  return arr;
}

// var arr = [];
var arr = [5,2,3,6,4,9,7];
console.log(NthLast(arr, 0));
// console.log(secondLargestVal(arr));
// console.log(filterRange(arr, 2,4));
// console.log(shiftOne(arr));
// console.log(rotate(arr, 5));
// console.log(secondToLast(arr));
// console.log(concat(arr1, arr2))
// console.log(reverse(arr));
// console.log(removeDuplicates(arr));
// console.log(removeAt(arr, 2));
// console.log(popFront(arr));
// console.log(insertAt(arr, 1, 4));
// console.log(pushFront(arr,7));
