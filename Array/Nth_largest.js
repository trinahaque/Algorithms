function NthLargestVal(arr, n){
  if (arr.length < n){
    return null;
  }
  if (!max_arr){
    max_arr = [];
  }
  var max_index;
  if (max_arr.length < 1){
    max_index = 0;
  }
  else{
    // this sets the max index, the index that's not is max array
    var i = 0;
    while (i < arr.length){
      for (var ind=0; ind < max_arr.length; ind++){
        if (i == max_arr[ind]){
          i++;
          break;
        }
      }
    }
    max_index = i;
    var j = 0;
    while (j < arr.length){
      for (var index = 0; index < max_arr.length; ind++){
        if (j == max_arr[index]){
          j++;
          break;
        }
      }
      if (arr[max_index] < arr[j]){
        max_index = j;
        j++;
      }
    }
    max_arr.push(j);
    if (max_arr.length < n){
      NthLargestVal(arr, n);
    }
    else{
      return arr[max_arr[max_arr.length-1]];
    }
  }
}
