module.exports = {
  SLL: function(){
    this.head = null;
    this.length = 0;
  }

  function SLNode(value){
    this.val = value;
    this.next = null;
  }

  SLL.prototype.add = function(val){
    var newNode = new SLNode(val);
    if (!this.head){
      this.head = newNode;
      this.length += 1;
    }
    else{
      var current = this.head;
      while (current.next){
        current = current.next;
      }
      current.next = newNode;
      this.length += 1;
    }
    return this;
  }

  SLL.prototype.remove = function(callback){
    if (!this.head){return;}
    if (callback(this.head.val)){
      this.head=this.head.next;
      return this;
    }
    var prev = this.head;
    var curr = this.head.next;
    while(curr){
      if (callback(curr.val)){
        prev.next = curr.next;
        break;
      }
      prev = curr;
      curr = curr.next;
    }
  }

  SLL.prototype.print = function(){
    var current = this.head;
    while (current){
      console.log(current.val);
      current = current.next;
    }
    return this;
  }
}
var sll = new SLL();
// sll.add("orange");
// sll.add("mango");
// sll.add("berries");
// sll.add('bananas');
// sll.add('melon');

// console.log(sll.print());
