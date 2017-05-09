// capitalize first letter of any given string
function capitalize(string){
  return string.charAt(0).toUpperCase()+string.slice(1);
}

// given a string, the function check if it is a palindrome
function isPalindrome(str){
  str = str.toLowerCase();
  if (str.length < 2){
    return true;
  }
  var mid = Math.floor(str.length/2);
  for (var i = 0; i <= mid; i++){
    if (str[i] !== str[str.length-1-i]){
      return false;
    }
  }
  return true;
}
// console.log(isPalindrome("Lola"));

function reverseString(str){
  if (str.length < 2){
    return str;
  }
  str = str.toLowerCase();
  var strArr = str.split("");
  // console.log(strArr);
  var mid = Math.floor(str.length/2);
  for (var i = 0; i <= mid; i++){
    var tmp = str[i];
    strArr[i] = strArr[strArr.length-1-i];
    strArr[strArr.length-1-i] = tmp;
  }
  // console.log(strArr);
  str = capitalize(strArr.join(""));
  return str;
}
console.log(reverseString("Hello!"));
