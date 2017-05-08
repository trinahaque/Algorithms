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

console.log(isPalindrome("Lola"));
