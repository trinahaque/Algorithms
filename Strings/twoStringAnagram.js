// given two strings, check if they are anagrams of each other

function twoStringAnagram(str1, str2){
  if (str1.length !== str2.length){
    return false;
  }
  for (var i = 0; i < str1.length; i++){
    var anagram = false;
    for (var j = 0; j < str2.length; j++){
      if (str2[j] == str1[i]){
        anagram = true;
        break;
      }
    }
    if (!anagram){
      return false;
    }
  }
  return true;
}


// console.log(twoStringAnagram("cat", "act"));


function twoStringAn(str1, str2){
  var arr1 = str1.split("").sort().toString();
  var arr2 = str2.split("").sort().toString();
  // a,i,n,r,t
  return arr1 == arr2;
}
console.log(twoStringAn("trina", "train"));
