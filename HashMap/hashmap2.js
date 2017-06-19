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
    this.table[index] = new SLL();
    this.table[index].add([key, val]);
    this.numkeys++;
    return this;
  }
  var current = this.table[index].head;
  while (current){
    if (current.val[0] == key){
      current.val[1] = val;
      return this;
    }
    current = current.next;
  }
  this.table[index].add([key, val]);
  this.numkeys++;
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


HashMap.prototype.remove = function(key){
  var hash = key.hashCode();
  var index = mod(hash, this.capacity);
  if (!this.table[index]){
    return null;
  }
  var current = this.table[index].head;
  while (current){
    if (current.val[0] == key){
      var tmp = current.val;
      this.table[index].removeVal(current.val);
      return tmp;
    }
    current = current.next;
  }
  return null;
}

var HM = new HashMap(5);
console.log(HM.add("key", 7).add("hell", 8).add("may", 17).add("key", 17).add("ken", 12));
// console.log(HM.findKey("keys"));
// console.log(HM.remove("hell"));
