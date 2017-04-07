function insertion_sort(arr, val){
  if (arr.length==0){
    arr.push(val);
    return arr;
  }
  arr.push(val);
  var key = arr[arr.length-1];
  for(var i = arr.length-2; i >= 0; i--){
    if (arr[i] > key){
      arr[i+1] = arr[i];
    }
    else{
      break;
    }
  }
  arr[i+1] = key;
  return arr;
}
console.log(insertion_sort([1,3,5,7], 6))
