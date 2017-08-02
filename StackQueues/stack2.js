function Stack(){
  this.stack = [];
}

Stack.prototype.push = function(val){
  this.stack.push(val);
  return this;
}


Stack.prototype.pop = function(){
  if (this.stack.length == 0){
    return null;
  }
  var tmp = this.stack.pop();
  return tmp;
}



function pop(Stack){
  if (Stack.stack.length == 0){
    return null;
  }
  var tmp = Stack.stack.pop();
  return tmp;
}

Stack.prototype.print = function(){
  var count = 0;
  while (count < this.stack.length){
    var tmp = this.stack.pop();
    console.log(tmp);
  }
}

Stack.prototype.max = function(){
  var max = this.pop();
  var count = 0;
  while (count < this.stack.length){
    var tmp = this.stack.pop();
    if (tmp > max){
      max = tmp;
    }
  }
  return max;
}

Stack.prototype.reverse = function(){
  if (this.stack.length < 2){
    return this.stack;
  }
  var new_stack = [];
  var count = 0;
  while (count < this.stack.length){
    new_stack.push(this.stack.pop());
  }
  return new_stack;
}



stack = new Stack();
console.log(stack.push(4).push(-1).push(3).push(2));
// console.log(stack.reverse());
// console.log(stack.max());
// stack.print();
// console.log(stack.pop());
// console.log(pop(stack));
// console.log(pop(stack));
// console.log(pop(stack));
