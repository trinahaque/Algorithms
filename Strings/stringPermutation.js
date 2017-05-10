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
    permutation(suffix.slice(0,i)+suffix.slice(i+1), prefix+suffix[i], result);
  }
  return result;
}

console.log(permutation("abc"));
