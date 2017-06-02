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

  var new_arr = [];
  for (var i = 0; i < r; i++){
    new_arr.push(arr[i]);
  }
  // console.log(new_arr);
  for (var i= 0; i <= r; i++){
    arr[i] = arr[i+r];
  }
  // console.log("The array after the shift is", arr);
  var j = 0;
  var k = arr.length - r;
  while (j < new_arr.length && k < arr.length){
    console.log("hello");
    arr[k] = new_arr[j];
    k++;
    j++;
  }
  return arr;
}

console.log(rotateArr([1,2,3,4,5,6],1));
