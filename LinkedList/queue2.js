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
  if (this.length == 0){
    this.tail = null;
  }
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

Queue.prototype.arrayImplementation = function(arr){
  for (var i = 0; i < arr.length; i++){
    this.enque(arr[i]);
  }
  return this;
}


var q = new Queue();
// q.enque(3).enque(2).enque(1);
console.log(q.arrayImplementation([1,2,3,4]));
// console.log(q.deque());
// console.log(q.deque());
// console.log(q.deque());
// console.log(q.deque());
