// delete all 0s from an unsorted array
function deleteZeroJS(arr){
  var count = 0;
  for (var i =0; i < arr.length; i++){
    if (arr[i] !== 0){
      arr[count] = arr[i];
      count++;
    }
  }
  arr.length = count;
  // (this returns the array by deleting all the 0s in JS way)
  return arr;
}

// console.log(deleteZeroJS([0,5,6,0,0,2,5]));
// [ 5, 6, 2, 5]


function deleteZero(arr){
  var count = 0;
  for (var i =0; i < arr.length; i++){
    if (arr[i] !== 0){
      arr[count] = arr[i];
      count++;
    }
  }
  while (count < arr.length){
    // (this pops in non JS way)
    console.log(arr);
    arr.pop(arr[count]);
  }
  return arr;
}

// console.log(deleteZero([0,5,6,0,0,2,5]));
// [ 5, 6, 2, 5]


function moveZeroEnd(arr){
  var count = 0;
  for (var i =0; i < arr.length; i++){
    if (arr[i] !== 0){
      arr[count] = arr[i];
      count++;
    }
  }
  while (count < arr.length){
    arr[count] = 0;
    count++;
  }
  return arr;
}

console.log(moveZeroEnd([0,5,6,0,0,2,5]));
// output : [ 5, 6, 2, 5, 0, 0, 0 ]
