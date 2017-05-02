function binary_recursive(arr, val, start, end){
  if (arr.length < 1){
    return null;
  }
  if (val < arr[0] || val > arr[arr.length-1]){
    return false;
  }
  if (!start){
    start = 0;
    end = arr.length - 1;
  }
  if (end < start){
    return false;
  }
  var mid = Math.floor((start+end)/2);

  if (arr[mid] < val){
    start = mid + 1;
  } else if(arr[mid > val]){
    end = mid - 1;
  }
  else{
    return true;
  }
  // console.log("start", start, "end", end);
  return binary_recursive(arr, val, start, end);
}

console.log(binary_recursive([1,2,3,4,5,6,7,8],4));
