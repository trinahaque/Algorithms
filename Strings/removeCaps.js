function SLL(){
  this.head = null;
  this.length = 0;
}

function SLNode(val){
  this.val = val;
  this.next = null;
}

SLL.prototype.add = function(val){
  var new_node = new SLNode(val);
  if (!this.head){
    this.head = new_node;
    this.tail = new_node;
    this.length += 1;
    return this;
  }
  var current = this.head;
  while (current.next){
    current = current.next;
  }
  current.next = new_node;
  this.tail = new_node;
  this.length += 1;
  return this;
}


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
