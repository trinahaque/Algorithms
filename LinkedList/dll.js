function DLL(){
  this.head = null;
  this.length = 0;
}

function DLNode(val){
  this.val = val;
  this.next = null;
  this.prev = null;
}

DLL.prototype.max_add = function(){
  var node = new DLNode(val);
  if (!this.head){
    this.head = node;
    this.tail = node;
    this.length++;
    return this;
  }
  var current = this.head;
}
