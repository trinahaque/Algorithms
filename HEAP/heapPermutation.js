// fix/finish this problem later

function swap(arr, i, j){
  var temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

// function permutation(arr, start, result){
//   if (!start){
//     start = 0;
//     result = [];
//   }
//   if (arr.length < start){
//     result.push(arr);
//   }
//   for (var i = 0; i < arr.length; i++){
//     swap(arr, start, i);
//     permutation(arr, start+1, result);
//     swap(arr, start, i);
//   }
//   return result;
// }

// console.log(permutation([1,2,3]));

// function heapPermutation(arr, n, result){
//   if (!n){
//     n = arr.length;
//     result = [];
//   }
//   if (n == 1){
//     result.push(arr);
//   }
//   for (var i = 0; i < n-1; i++){
//     heapPermutation(arr, n-1, result);
//     if (n % 2 == 0){
//       swap(arr, i, n-1);
//     }
//     else{
//       swap(arr,0, n-1);
//     }
//   }
//   return result;
// }
// console.log(heapPermutation([1,2,3]));

function permutation(arr, start, size){
  if (!start){
    start = 0;
    size = arr.length+1;
  }
  if (start == size){
    // console.log(start);
    console.log(arr);
  }
  else{
    for (var i = start; i <= size; i++){
      if (size % 2 !== 0){
        swap(arr, i, start);
      }
      else{
        swap(arr,0, start);
      }
      // swap(arr, start, i);
      permutation(arr, i+1, size);
      // swap(arr, start, i);
      if (size % 2 !== 0){
        swap(arr, i, start);
      }
      else{
        swap(arr,0, start);
      }
    }
  }
}

console.log(permutation([1,2,3]));
