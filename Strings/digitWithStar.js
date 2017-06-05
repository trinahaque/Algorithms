function replaceDigitStar(str){

  var strArr = str.split("");

  for (var i = 0; i <strArr.length; i++){
    if (isNaN(parseInt(strArr[i])) == false){
      strArr[i] = "*";
    }
  }
  str = strArr.join('');

  return str;
}


// console.log(replaceDigitStar("Andy7"));
console.log(replaceDigitStar("Andy7 is an 9box leather12in"));
