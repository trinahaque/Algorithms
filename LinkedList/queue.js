function Queue(){
  this.head = null;
  this.tail = null;
  this.length = 0;
}

function Node(val){
  this.val = val;
  this.next = null;
}

Queue.prototype.enqueue = function(val){
  var node = new Node(val);
  if (!this.head){
    this.head = node;
    this.tail = node;
    this.length += 1;
    return this;
  }
  this.tail.next = node;
  this.tail = node;
  this.length += 1;
  return this;
}

Queue.prototype.dequeue = function(){
  if (!this.head){
    return this;
  }
  this.head = this.head.next;
  this.length -= 1;
  if (this.length == 0){
    this.tail = null;
  }
  return this;
}
var queue = new Queue();
console.log(queue.enqueue(7).enqueue(3).enqueue(8).dequeue());


// console.log(queue.enqueue(7).enqueue(3));
