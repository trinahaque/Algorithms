function sigma(n){
  if (n < 1){
    return 0;
  }
  return n + sigma(n-1);
}
// console.log(sigma(55));

function factorial(n){
  if (n < 2){
    return 1;
  }
  return n * factorial(n-1);
}
// console.log(factorial(-4));


function fibonacci(n, arr){
  if (!arr){
    arr = [0, 1];
  }
  if (n < 2){
    return arr[n];
  }
  var tmp = arr[0]+ arr[1];
  arr[0] = arr[1];
  arr[1] = tmp;
  return fibonacci(n-1, arr);
}

console.log(fibonacci(11));
