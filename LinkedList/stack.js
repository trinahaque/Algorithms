function Stack(){
  this.stack = [];
}

Stack.prototype.push = function(val){
  if (!val){
    return this.stack;
  }
  this.stack.push(val);
  return this;
}

Stack.prototype.pop = function(){
  if (this.stack.length < 1){
    return null;
  }
  var top_val = this.stack.pop();
  this.length -= 1;
  console.log(top_val);
  return this;
}


Stack.prototype.top = function(){
  if (this.stack.length < 1){
    return null;
  }
  var top_val = this.stack[this.stack.length-1];
  return top_val;
}


Stack.prototype.size = function(){
  return this.stack.length;
}


Stack.prototype.isEmpty = function(){
  if (this.stack.length < 1){
    return true;
  }
  return false;
}

// Stack.prototype.print = function(){
//   console.log("length is", this.length);
//   if (this.length == 1){
//     var tmp = this.pop().print();
//     console.log(tmp);
//     return;
//   }
//
//   var tmp = this.pop().print();
//   console.log(tmp);
//
// }

// var stack = new Stack();
// stack.push(3).push(7).push(9);
// stack.print();
// console.log(stack.pop().pop();
// console.log(stack.size());
// console.log(stack.isEmpty());
// console.log(stack.top());
module.exports = Stack;
