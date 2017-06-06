var Stack = require('../LinkedList/stack.js')

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
  var new_head = this.head.next;
  this.head.next = null;
  this.head = new_head;
  this.length -= 1;
  if (this.length == 0){
    this.tail = null;
  }
  return this;
}

Queue.prototype.isEmpty = function(){
  if (!this.head){
    return true;
  }
  return false;
}

Queue.prototype.front = function(){
  if (!this.head){
    return null;
  }
  return this.head.val;
}


Queue.prototype.print = function(){

  var count = 0;
  while (count < this.length){
    var tmp = this.dequeue();
    console.log(tmp);
    this.enqueue(tmp);
    count++;
  }
}

Queue.prototype.size = function(){
  if (!this.head){
    return null;
  }
  return this.length;
}

Queue.prototype.isPalindrome = function(){
  if (!this.head){
    return null;
  }
  if (!this.head.next){
    return true;
  }
  var pal = true;
  var stack = new Stack();
  var mid = Math.floor(this.length/2);

  console.log("mid is", mid);
  for (var i = 0; i < mid; i++){
    var tmp = this.dequeue();
    stack.push(tmp);
    this.enqueue(tmp);
  }
  // console.log(stack);
  if (this.length % 2 !== 0){
    var mid = this.dequeue();
    this.enqueue(mid);
  }
  // console.log(stack.length);
  for (var i = 0; i < stack.length; i++){
    var tmp = this.dequeue();
    if (stack.pop() !== tmp){
      pal = false;
    }
    this.enqueue(tmp);
  }
  // console.log(this);
  if (pal){
    return true;
  }
  return false;
}


var queue = new Queue();
queue.enqueue("t").enqueue("a").enqueue("c");
console.log(queue.isPalindrome());
// console.log(queue.isPalindrome());
// console.log(queue.isPalindrome());
// console.log(queue.size());
// console.log(queue.contains(8));
// console.log(queue.front());
// console.log(queue.isEmpty());

// console.log(queue.enqueue(7).enqueue(3));
