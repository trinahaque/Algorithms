function MPQ(){
  this.head = null;
  this.tail = null;
  this.length = 0;
}

function PQNode(val, prio){
  this.val = val;
  this.prio = prio;
  this.next = null;
}

MPQ.prototype.enqueue = function(val, prio){
  var node = new PQNode(val, prio);
  if (!this.head){
    // if PQ is empty
    this.head = node;
    this.tail = node;
    this.length++;
    return this;
  }
  if (node.prio > this.head.prio){
    // if head is less than the new node priority
    node.next = this.head;
    this.head = node;
    this.length++;
    return this;
  }

  if (this.tail.prio > node.prio){
    this.tail.next = node;
    this.tail = node;
    this.length++;
    return this;
  }

  var current = this.head;
  while (current.next){
    if (current.next.prio < node.prio){
      var next = current.next;
      current.next = node;
      node.next = next;
      this.length++;
      return this;
    }
    current = current.next;
  }
  return this;
}

MPQ.prototype.dequeue = function(){
  if (this.head){
    var node = this.head;
    this.head = this.head.next;
    var dict = {
      val: node.val,
      prio: node.prio
    }
    return dict;
  }
  return null;
}

MPQ.prototype.print = function(){
  if (!this.head){
    console.log("SLL is empty");
    return;
  }
  var i = 1;
  var current = this.head;
  while (current){
    console.log("The node", i, "val is", current.val, "priority is", current.prio);
    i++;
    current = current.next;
  }
}

var pq = new MPQ();
pq.enqueue(3,-1).enqueue(-1,9).enqueue(7,2).enqueue(11, 9).enqueue(6,2);
console.log(pq.dequeue());
