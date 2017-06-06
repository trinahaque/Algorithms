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

// function pop(Stack){
//   if (Stack.stack.length == 0){
//     return null;
//   }
//   var tmp = Stack.stack.pop();
//   return tmp;
// }

Stack.prototype.print = function(){
  var count = 0;
  while (count < this.stack.length){
    var tmp = this.stack.pop();
    console.log(tmp);
  }
  // if (this.stack.length == 1){
  //   console.log(this.stack.pop());
  // }
  // this.stack.pop().print();

}


stack = new Stack();
stack.push(3).push(2);
stack.print();
// console.log(stack.pop());
// console.log(pop(stack));
// console.log(pop(stack));
// console.log(pop(stack));
