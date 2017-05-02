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
// console.log(fibonacci(11));


function tribonacci(n, arr){
  if (n < 2){
    return 0;
  }
  if (!arr){
    arr = [0, 0, 1];
  }
  if (n < 3){
    return arr[2];
  }
  var tmp = arr[0]+arr[1]+arr[2];
  arr[0] = arr[1];
  arr[1] = arr[2];
  arr[2] = tmp;
  return tribonacci(n-1, arr);
}
// console.log(tribonacci(7));


function greatest_common_factor(num1, num2){
  if (num1 == num2){
    return num1;
  }
  if (num1 > num2){
    return greatest_common_factor(num1-num2, num2);
  }
  if (num2 > num1){
    return greatest_common_factor(num1, num2-num1);
  }
}
// console.log(greatest_common_factor(123456,987654));
