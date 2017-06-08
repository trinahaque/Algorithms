var SLL = require('../LinkedList/sll.js')

function HashMap(capacity){
  this.capacity = capacity;
  this.table = [];
  this.numkeys = 0;
}

String.prototype.hashCode = function(){
  var hash = 0;
  if (this.length == 0){
    return hash;
  }
  for (var i = 0; i < this.length; i++){
    var char = this.charCodeAt(i);
    hash = ((hash<<5)-hash)+char;
    hash &= hash;
  }
  return hash;
}

function mod(input, div){
  return (input % div + div) % div;
}

HashMap.prototype.add = function(key, val){
  var hash = key.hashCode();
  var index = mod(hash, this.capacity);

  if (!this.table[index]){
    var sll = new SLL();
    sll.add([key, val]);
    this.table[index] = sll;
    this.numkeys++;
    return this;
  }
  else{
    var current = this.table[index].head;
    while (current.next){
      if (current.val[0] == key && current.val[1] == val){
        return this;
      }
      current = current.next;
    }
    var node = new SLNode([key, val]);
    current.next = node;
    this.table[index].tail = node;
    his.numkeys++;
  }
  return this;
}


HashMap.prototype.findKey = function(key){
  var hash = key.hashCode();
  var index = mod(hash, this.capacity);

  if (!this.table[index]){
    return null;
  }
  else{
    var current = this.table[index].head;
    while (current){
      if (current.val[0] == key){
        return current.val[1];
      }
      current = current.next;
    }
  }
  return null;
}

var HM = new HashMap(5);
console.log(HM.add("key", 7));
