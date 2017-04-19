function selection_sort(arr){
  for (var i = 0; i < arr.length-1; i++){
    var ind = i;
    for (var k=i+1; k < arr.length; k++){
      if (arr[k] < arr[ind]){
        ind = k;
      }
    }
    if (ind != i){
      var temp = arr[i];
      arr[i] = arr[ind];
      arr[ind] = temp;
    }
    // console.log(arr);
  }
  return arr;
}

// console.log(selection_sort([7,4,6,5,3,8,2,1]))


function selection_soft(arr){
  if (arr.length < 1){
    return null;
  }
  for (var i = 0; i < arr.length; i++){
    var min = i;
    for (var k = i; k < arr.length - 1; k++){
      if (arr[min] > arr[k+1]){
        min = k+1;
      }
    }
    if (min !== i){
      var tmp = arr[min];
      arr[min] = arr[i];
      arr[i] = tmp;
    }
  }
  return arr;
}

// var arr = [7,4,6,5,3,8,2,1];
var arr = [5,2,3,6,4,9,7];
console.log(selection_sort(arr));
