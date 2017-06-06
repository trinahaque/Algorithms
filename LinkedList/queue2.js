function Queue(){
  this.head = null;
  this.length = 0;
}

function Node(val){
  this.val = val;
  this.next = null;
}

Queue.prototype.enque = function(val){
  var node = new Node(val);
  if (!this.head){
    this.head = node;
    this.tail = node;
    this.length += 1;
    return this;
  }
  this.tail.next = node;
  this.tail = this.tail.next;
  this.length += 1;
  this.tail.next = null;
  return this;
}

Queue.prototype.deque = function(){
  if (!this.head){
    return null;
  }
  var tmp = this.head;
  this.head = this.head.next;
  this.length -= 1;
  return tmp;
}


Queue.prototype.print = function(){
  if (!this.head){
    return null;
  }
  var count = 0;
  while (count < this.length){
    var tmp = this.deque();
    console.log(tmp.val);
    this.enque(tmp.val);
    count++;
  }
  return this;
}


var q = new Queue();
q.enque(3).enque(2).enque(1);
console.log(q.print());
// console.log(q.deque());
// console.log(q.deque());
// console.log(q.deque());
// console.log(q.deque());
