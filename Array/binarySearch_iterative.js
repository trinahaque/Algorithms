function binarySearch_iterative(arr, val){
  if (arr.length < 1){
    console.log("The array is empty");
    return false;
  }
  if (val < arr[0] || val > arr[arr.length -1]){
    return false;
  }
  var start = 0;
  var end = arr.length - 1;

  while (start <= end){
    var mid = Math.floor((start+end)/2);
    if (arr[mid] == val){
      return true;
    }
    else if (arr[mid] < val){
      start = mid + 1;
    }
    else{
      end = mid - 1;
    }
  }
  return false;
}

console.log(binarySearch_iterative([1,2,3,4,5,6,7,8,9],5));
