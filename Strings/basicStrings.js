function stringToArray(str){
  var wordArray = str.split(" ");
  return wordArray;
}

// console.log(stringToArray("Emma and Amy are friends."));
// returns [ 'Emma', 'and', 'Amy', 'are', 'friends.' ]

function splitChrToArr(str){
  var wordArray = str.split("");
  return wordArray;
}
// console.log(splitChrToArr("Emma and Amy"));
// [ 'E', 'm', 'm', 'a', ' ', 'a', 'n', 'd', ' ', 'A', 'm', 'y' ]

function removeBlanks(str){
  var str = str.replace(/\s/g,'');
  console.log(str);
}
removeBlanks(" Pl   ayTha   tF   u   nkyM   usi    c ");
// PlayThatFunkyMusic
