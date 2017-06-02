// print even array items in backward order
function printEventBackward(arr){
  for (var i = arr.length - 1; i >= 0; i--){
    if (arr[i] % 2 == 0){
      console.log(arr[i]);
    }
  }
}

// console.log(printEventBackward([5,-2,3,2,8,-2,0,3]))
// output: 0,-2,8,2,-2


function rotateArr(arr, n){
  var r = n % arr.length;
  // console.log("r is", r);
  for (var i = 0; i < Math.floor(arr.length/2); i++){
    // it's not i < r
    var tmp = arr[r+i];
    arr[r+i] = arr[i];
    arr[i] = tmp;
    // console.log(arr);
  }
  return arr;
}

console.log(rotateArr([1,2,3,4,5,6],1));
