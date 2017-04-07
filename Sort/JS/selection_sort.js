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

console.log(selection_sort([7,4,6,5,3,8,2,1]))
