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
  if (this.table[index]){
    var current = this.table[index].head;
    while (current){
      if (current.val[0] == key){
        var tmp = current.val;
        this.table[index].removeVal(current.val);
        if (this.table[index].length < 1){
          this.table[index] = undefined;
        }
        return tmp;
      }
      current = current.next;
    }
    return null;
  }
}


function findIndex(key, capacity){
  var hash = key.hashCode();
  var index = Math.floor(mod(hash, capacity));
  return index;
}


HashMap.prototype.addIndex = function(node, index){
  if (!this.table[index]){
    // if the index already doesn't exist in the new table
    this.table[index] = new SLL();
    this.table[index].add(node.val);
    return this;
  }
  var current = this.table[index].head;
  while (current){
    if (current.val[0] == node.val[0]){
      current.val[1] = val;
      return this;
    }
    current = current.next;
  }
  this.table[index].add(node.val);
  return this;
}


HashMap.prototype.grow = function(){
  for (var i = 0; i < this.table.length; i++){
    if (this.table[i]){
      var current = this.table[i].head;
      while (current && this.table[i].length > 0){
        var index = findIndex(current.val[0], this.capacity * 1.50);
        if (index !== i){
          this.remove(current.val[0]);
          this.addIndex(current, index);
        }
        current = current.next;
      }
    }
  }
  return this;
}

HashMap.prototype.print = function(){
  for (var i = 0; i < this.table.length; i++){
    if (this.table[i]){
      console.log("The value at ", i, "is a SLL");
      var current = this.table[i].head;
      while (current){
        console.log(current.val);
        current = current.next;
      }
    }
    else{
      console.log("The value at ", i, this.table[i]);
    }
  }
}


var HM = new HashMap(5);
HM.add("key", 7).add("hell", 8).add("may", 17).add("key", 17).add("ken", 12).add("barbie", 3).add("amy", 10);
HM.grow().print();
// console.log(HM.findKey("keys"));
// console.log(HM.remove("hell"));
