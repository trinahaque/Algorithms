// given a string, find all the permutations of it

function permutation(suffix, prefix, result){
  if (!result){
    result = [];
    prefix = "";
  }
  if (suffix.length == 0){
    result.push(prefix);
    // console.log(result);
  }
  for (var i = 0; i < suffix.length; i++){
    var pre = prefix+suffix[i];
    var suf = suffix.slice(0,i)+suffix.slice(i+1);
    permutation(suf, pre, result);
  }
  return result;
}

console.log(permutation("abc"));
