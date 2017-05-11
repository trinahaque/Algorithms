// fix/finish this problem later

function swap(arr, i, j){
  var temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function permutation(arr, start, result){
  if (!start){
    start = 0;
    result = [];
  }
  if (arr.length < start){
    result.push(arr);
  }
  for (var i = 0; i < arr.length; i++){
    swap(arr, start, i);
    permutation(arr, start+1, result);
    swap(arr, start, i);
  }
  return result;
}

// console.log(permutation([1,2,3]));

function heapPermutation(arr, size, n){
  if (!size){
    size = arr.length;
    n = arr.length;
  }
  if (size == 0){
    return arr;
  }
  for (var i = 0; i < size; i++){
    heapPermutation(arr, size-1, n);
    if (size % 2 == 0){
      swap(arr, 0, size);
    }
    else{
      swap(i, size);
    }
  }
}
console.log(heapPermutation([1,2,3]));
