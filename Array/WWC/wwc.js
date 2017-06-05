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


function rotateLeft(arr, n){
  var r = n % arr.length;

  for (var i = 0; i < r; i++){
    var tmp = arr[i];
    var j = i;
    while (j < arr.length){
      var d = (j+r)%arr.length;
      if (d == i){
        break;
      }
      arr[j] = arr[d];
      j = d;
    }
    arr[j] = tmp;
  }
  return arr;
}

// console.log(rotateLeft([1,2,3,4,5,6,7,8,9],3));


function rotateRight(arr, n){
  var r = n % arr.length;

  for (var i = 0; i < r; i++){
    var j = arr.length - 1 - i;
    var tmp = arr[j];

    while (j >= r){
      arr[j] = arr[j-r];

      j = j - r;

      // if ((j-r) < r){
      //   break;
      // }
      // else{
      //   j = j - r;
      // }
      // console.log("j is ", j);
    }
    arr[j] = tmp;
  }
  return arr;
}

console.log(rotateRight([1,2,3,4,5,6,7,8,9], 4));
// Output: [ 9, 8, 1, 2, 3, 4, 5, 6, 7 ]
