function bubble_sort(arr){
  if (arr.length < 1){
    return null;
  }
  var swap = false;
  for (var i=0; i < arr.length; i++){
    for (var k = 0; k < arr.length - 1 - i; k++){
      if (arr[k] > arr[k+1]){
        var tmp = arr[k];
        arr[k] = arr[k+1];
        arr[k+1] = tmp;
        swap = true;
      }
    }
    if (!swap){
      break
    }
  }
  return arr;
}

var arr = [];
var arr = [5,2,3,6,4,9,7];
console.log(bubble_sort(arr));
