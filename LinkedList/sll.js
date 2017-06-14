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

SLL.prototype.removeVal = function(val){
  if (!this.head){
    return null;
  }
  if (this.head.val == val){
    if (this.head == this.tail){
      this.tail = null;
    }
    this.head = this.head.next;
    this.length --;
    return this;
  }
  var prev = this.head;
  var current = this.head.next;
  var next = this.head.next.next;

  while (next) {
    if (current.val == val){
      prev.next = next;
      this.length --;
      return this;
    }
    prev = current;
    current = next;
    next = current.next;
  }
  if (current.val == val){
    prev.next = null;
    this.tail = prev;
    this.length --;
  }
  return this;
}

SLL.prototype.add_front = function(val){
  var new_node = new SLNode(val);
  if (!this.head){
    this.head = new_node;
    this.tail = new_node;
    return this;
    // works after commenting out
    // tail
  }
  var current = this.head;
  this.head = new_node;
  this.head.next = current;
  this.length += 1;
  return this;
}

SLL.prototype.contains = function(val){
  if (!this.head){
    return false;
  }
  var current = this.head;
  while (current){
    if (current.val == val){
      return true;
    }
    current = current.next;
  }
  return false;
}

SLL.prototype.remove_front = function(){
  if (!this.head.next){
    var removed_node = this.head.val;
    this.head = null;
    this.length -= 1;
    return removed_node;
  }
  this.head = this.head.next;
  this.length -= 1;
  return this.head.val;
}


SLL.prototype.count = function(){
  var count = 0;
  // if (!this.head){
  //   return count;
  // }
  var current = this.head;
  // why does it not break?
  while (current){
    count ++;
    current = current.next;
  }
  return count;
}

SLL.prototype.find_max = function(){
  if (!this.head){
    console.log("The list is empty");
    return this;
  }
  var max = this.head.val;
  var current = this.head;
  while (current.next){
    if (current.next.val > max){
      max = current.next.val;
    }
    current = current.next;
  }
  return max;
}

SLL.prototype.find_min = function(){
  if (!this.head){
    console.log("The list is empty");
    return this;
  }
  var current = this.head;
  var min = current.val;
  while (current.next){
    if (current.next.val < min){
      min = current.next.val;
    }
    current = current.next;
  }
  return min;
}

SLL.prototype.total_val = function(){
  var sum = 0;
  // if (!this.head){
  //   return sum;
  // }
  var current = this.head;
  while (current) {
    sum += current.val;
    current = current.next;
  }
  return sum;
}

SLL.prototype.average = function(){
  if (!this.head){
    console.log("The list is empty");
    return;
  }
  return this.total_val()/this.length;
  // return this.total_val()/this.count();
}

SLL.prototype.last_val = function(){
  if (!this.head){
    return false;
    // should it return false?
  }
  var current = this.head;
  while (current.next){
    current = current.next;
  }
  return current.val;
}

SLL.prototype.remove_back = function(){
  if (!this.head){
    return false;
  }
  if (!this.head.next){
    this.head = null;
    this.tail = null;
    this.length -= 1;
    return this;
  }
  var current = this.head;
  while (current.next.next){
    current = current.next;
  }
  current.next = null;
  this.tail = current;
  this.length -= 1;
  return this;
}

SLL.prototype.move_min_front = function(){
  if (!this.head){
    return false;
  }
  if (!this.head.next){
    return this;
  }
  var prev = null;
  var current = this.head;
  var min = this.head;
  while (current.next){
    if (current.next.val < min.val){
      prev = current;
      min = current.next;
    }
    current = current.next;
  }
  prev.next = min.next;
  var head = this.head;
  this.head = min;
  min.next = head;
  return this;
}


SLL.prototype.move_max_back = function(){
  if (!this.head || !this.head.next){
    return this;
  }
  var prev = null;
  var current = this.head;
  var max = current;
  var next = current.next;
  while (current.next){
    if (current.next.val > max.val){
      max = current.next;
      prev = current;
    }
    current = current.next;
  }
  if (max.val == this.head.val){
    current.next = max;
    this.head = next;
    max.next = null;
    this.tail = max;
    return this;
  }
  if (this.tail.val == max.val){
    return this;
  }
  prev.next = max.next;
  current.next = max;
  max.next = null;
  this.tail = max;
  return this;
}

SLL.prototype.prependVal = function(ListNode, val, before){

  if (before == undefined){
    var tmp = val;
    val = ListNode;
    before = tmp;
    var ListNode = new SLNode(val);
  }

  if (!this.head){
    this.head = ListNode;
    this.tail = ListNode;
    this.length += 1;
    return this;
  }
  var current = this.head;
  if (current.val == before){
    SLL.head = ListNode;
    ListNode.next = current;
    console.log(SLL.head);
    // console.log(ListNode);
    this.length += 1;
    return this;
  }
  while (current.next){
    if (current.next.val == before){
      var next = current.next;
      current.next = ListNode;
      ListNode.next = next;
      this.length += 1;
      return this;
    }
    current = current.next;
  }
  current.next = ListNode;
  this.tail = ListNode;
  this.length += 1;
  return this;
}

SLL.prototype.appendVal = function(ListNode, val, after){
  if (!this.head){
    this.head = ListNode;
    this.tail = ListNode;
    this.length =+ 1;
    return this;
  }
  var current = this.head;
  while (current.next){
    if (current.val == after){
      var next = current.next;
      current.next = ListNode;
      ListNode.next = next;
      return this;
    }
    current = current.next;
  }
  current.next = ListNode;
  this.tail = ListNode;
  return this;
}

SLL.prototype.reverse = function(){
  if (!this.head){
    return this;
  }
  if (!this.head.next){
    return this;
  }
  var prev = null;
  var current = this.head;
  var next = current.next;
  this.tail = current;

  while (current.next){
    current.next = prev;
    prev = current;
    current = next;
    next = current.next;
  }
  current.next = prev;
  this.head = current;
  return this;
}

// refactor
SLL.prototype.palindrome = function(){
  if (!this.head){
    return false;
  }
  if (!this.head.next){
    return true;
  }
  var mid = Math.ceil(this.length/2);
  var sll2 = new SLL();
  var current = this.head;
  var count = 1;
  while (count < mid){
    current = current.next;
    // console.log("Current is", current);
    count++;
  }
  sll2.head = current.next;
  // console.log(sll2);
  sll2 = sll2.reverse();
  var current1 = this.head;
  var current2 = sll2.head;
  while (current2){
    // console.log("Current1 is", current1.val);
    // console.log("Current2 is", current2.val);
    if (current1.val !== current2.val){
      return false;
    }
    // console.log("Current1 is", current1.val);
    // console.log("Current2 is", current2.val);
    current1 = current1.next;
    current2 = current2.next;
  }
  return true;
}

SLL.prototype.concat = function(SLL2){
  if (!this.head && !SLL2.head){
    return false;
  }
  if (!this.head){
    this.head = SLL2.head;
    this.tail = SLL2.tail;
    this.length += SLL2.length;
    return this;
  }
  if (!SLL2.head){
    return this;
  }
  this.tail.next = SLL2.head;
  this.tail = SLL2.tail;
  this.length += SLL2.length;
  return this;
}

SLL.prototype.shift_right_one = function(){
  if (!this.head){
    return this;
    // #it's empty
  }
  if (!this.head.next){
    return this;
  }
  var current = this.head;
  while (current.next !== this.tail){
    current = current.next;
  }
  this.tail.next = this.head;
  this.head = this.tail;
  this.tail = current;
  current.next = null;
  return this;
}

SLL.prototype.shiftRight = function(shift){
  if (!this.head){
    return null;
  }
  if (!this.head.next){
    return this;
  }
  var num = shift % this.length;
  // console.log(num);
  for (var i = 0; i < num; i++){
    this.shift_right_one();
  }
  return this;
}

SLL.prototype.Kth_last_node = function(k){
  if (!this.head){
    return null;
  }
  if (!this.head.next){
    return this;
  }
  var count = 0;
  var current = this.head;
  while (count < this.length - k){
    current = current.next;
    count++;
  }
  return current;
}

SLL.prototype.recursive_length = function(){
  if (!this.head){
    return null;
  }
  return this.head.recursive_length();
}

SLNode.prototype.recursive_length = function(){
  if (!this.next){
    return 1;
  }
  return this.next.recursive_length() + 1;
}


SLL.prototype.print = function(){
  if (!this.head){
    console.log("SLL is empty");
    return;
  }
  var i = 1;
  var current = this.head;
  while (current){
    console.log("The node", i, "is", current.val);
    i++;
    current = current.next;
  }
}

SLL.prototype.print_reverse = function(){
  if (!this.head){
    console.log("SLL is empty");
    return;
  }
  var arr = [];
  var current = this.head;
  while (current){
    arr.push(current);
    current = current.next;
  }
  for (var i = arr.length-1; i >= 0; i--){
    console.log(arr[i].val);
  }
}

SLL.prototype.printRecursion = function(){
  if (!this.head){
    return null;
  }
  return this.head.printRecursion();
}

SLNode.prototype.printRecursion = function(){
  console.log(this.val);
  if (this.next){
    return this.next.printRecursion();
  }
}

SLL.prototype.printReverseRecursion = function(){
  if (!this.head){
    return null;
  }
  return this.head.printReverseRecursion();
}

SLNode.prototype.printReverseRecursion = function(){
  if (!this.next){
    console.log(this.val);
    return;
  }
  this.next.printReverseRecursion();
  console.log(this.val);
}

// var sll = new SLL();
// sll.add(1).add(2).add(3);
// console.log(sll.removeVal(2));
// sll.add(1).add(2).add(3).add(4);
// console.log(sll.printReverseRecursion());
// sll.printRecursion();
// sll.print_reverse();
// console.log(sll.recursive_length());
// console.log(sll.Kth_last_node(3));
// sll.shiftRight(12).print();
// sll.shift_right_one().print();
// sll.shiftRight(9);
// sll.shiftRight(5).print();
// console.log(sll.shiftRight(9));
// sll.concat(sll2).print();
// console.log(sll.concat(sll2));
// console.log(sll.concat(sll2));
// console.log(sll.palindrome());
// console.log(sll.reverse());
// sll.reverse().print();
// var listNode = new SLNode(5);
// sll.appendVal(listNode, 5, 11).print();
// sll.prependVal(listNode, 9, 2).print();
// console.log(sll.move_max_back().print());
// console.log(sll.move_min_front().print());
// console.log(sll.add_front(7).print());
// console.log(sll.remove_back());
// console.log(sll.last_val());
// console.log(sll.average());
// console.log(sll.total_val());
// console.log(sll.find_min());
// console.log(sll.find_max());
// console.log(sll.count());
// console.log(sll.count());
// console.log(sll.contains(4));
// console.log(sll.remove_front())
// sll.print();

module.exports = SLL
