// need more explanation

function strSubSet(str, map, count) {
  if (!map){
    map = {"":true};
    count = str.length;
  }
  map[str] = true;
  // console.log(map);

  for (var i=0; i < str.length; i++){
    var left = str.slice(0,i);
    var right = str.slice(i+1);
    // console.log(map);
    strSubSet(left+right, map, count);
  }
  if (str.length == count){
    console.log(count);
    // how does this edge case work?
    return map;
  }
}

console.log(strSubSet("abc"));
