function findDigit(num){
  var digit = 0;
  while (num > 0){
    num = Math.floor(num/10);
    // console.log(num);
    digit++;
  }
  return digit;
}

function numb_loop(arr){
  var n = 0;
  var digit;
  for (var i = 0; i < arr.length; i++){
    digit = findDigit(arr[i]);
    if (n < digit){
      n = digit;
    }
  }
  return n;
}

function bucket(arr){
  var bucket = [];
  bucket.length = arr.length;
  return bucket.fill(0);
}

function bucket_index(numb, digit){
  var index = Math.floor(numb/Math.pow(10, digit))%10;
  return index;
}
var arr = [73, 16, 2, 21378, 4, 1];
console.log(bucket_index(arr[3],2))
// console.log(bucket(arr));
// console.log(numb_loop(arr));
// console.log(findDigit(2));
