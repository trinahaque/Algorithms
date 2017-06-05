var SLL = require('../LinkedList/sll.js')

function removeCaps(str){
  var sll = new SLL;
  for (var i = 0; i < str.length; i ++){
    if (str[i] !== str[i].toUpperCase()){
      sll.add(str[i]);
    }
  }
  var new_str = "";
  var current = sll.head;

  while (current){
    new_str += current.val;
    current = current.next;
  }
  return new_str;
}

console.log(removeCaps("bAnAna Is good"));
