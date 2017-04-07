var sll = require('./LinkedList/sll.js');

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

HashMap.prototype.add = function(key, value){
  var hash = key.hashcode();
  var index = mod(hash, this.capacity);
  if (!this.table[index]){
    var sll = new SLL();
    // how does it work
    sll.add([key, value]);
    this.table[index] = sll;
    this.numkeys += 1;
  }
  else{
    var current = sll.head;
    while (current){
      if (current.val[0] == key){
        current.val[1] = value;
      }
      if (!current.next){break;}
      current = current.next;
    }
    var node = new Node([key, value]);
    current.next = node;
    this.numkeys += 1;
  }
  return this;
}

HashMap.prototype.isEmpty = function(){
  if (this.numkeys == 0){
    return true;
  }
  return false;
}

HashMap.prototype.has_it = function(key){
  var hash = key.hashCode();
  var index = mod(hash, this.capacity);
  return index;
}

HashMap.prototype.findKey = function(key){
  var index = this.has_it(key);
  if (!this.table[index]){
    return null;
  }
  var current = this.table[index].head;
  while (current){
    if (current.val[0] == key){
      return current.val[1];
    }
    current = current.next;
  }
  return null;
}

HashMap.prototype.remove = function(key){
  var hash = hashcode(key);
  var index = mod(hash);
  if (!this.table[index]){
    return;
  }
  this.table[index].remove(function(input){
    return (input[0]==key);
  })
}

HashMap.prototype.selectKeys = function(keysArray){
  if (keysArray.length < 1){return;}

  for (var i=0; i < this.table[i].length; i++){
    if (this.table[i].head){
      var current = this.table[i].head;
      while (current){
        var swap = false;
        for (var k=0; k < keysArray.length; k++){
          swap = true;
          current = current.next;
          break;
        }
        if (!swap){
          var temp = current.next;
          this.remove(current.val[0]);
          current = temp;
        }
      }
    }
  }
}
