function combine(arr1, arr2){
  var arr = [];
  var i = 0;
  var j = 0;
  while((i < arr1.length) && (j < arr2.length)){
    if (arr1[i] < arr2[j]){
      arr.push(arr1[i]);
      i++;
    }
    else{
      arr.push(arr2[j]);
      j++;
    }
  }
  if (i<arr1.length){
    for(var k=i; k <arr1.length; k++){
      arr.push(arr1[k]);
    }
  }
  if (j < arr2.length){
    for(var k=j; k < arr2.length; k++){
      arr.push(arr2[k]);
    }
  }
  return arr;
}

// console.log(combine([1,2,6,7], [3,4,5,9]));

function merge_sort(arr){

  if (arr.length < 2){
    return arr;
  }
  var mid = Math.floor(arr.length/2);
  var left = arr.slice(0, mid);
  var right = arr.slice(mid);
  // console.log("The array is", left);
  // console.log("The right is", right);
  return combine(merge_sort(left), merge_sort(right));
}
console.log(merge_sort([7,1,6,4,3,9,5,11,2]));
