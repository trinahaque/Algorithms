// print even array items in backward order
function printEventBackward(arr){
  for (var i = arr.length - 1; i >= 0; i--){
    if (arr[i] % 2 == 0){
      console.log(arr[i]);
    }
  }
}

console.log(printEventBackward([5,-2,3,2,8,-2,0,3]))
