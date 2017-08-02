function partition(arr){
  if (arr.length <1){
    return False;
  }
  if (arr.length == 1){
    return arr[0];
  }
  var i = -1;
  var pivot = arr.length - 1;
  for (var j = 0; j < arr.length - 2; j++){
    if (arr[j] < arr[pivot]){
      i = i + 1;
      var temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }
  var swap = arr[i+1];
  arr[i+1] = arr[pivot];
  arr[pivot] = swap;
  return arr;
}
var arr = [7,2,1,8,6,3,5,4];
console.log(partition(arr));
