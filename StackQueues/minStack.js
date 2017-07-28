function MinStack(){
  this.min = [];
}


MinStack.prototype.push = function(val){
  if (this.min.length < 1){
    this.min.push(val);
    return this;
  }
  var tmp = this.min.pop();
  if (tmp < val){
    this.min.push(tmp);
    return this;
  }
  else{
    this.min.push(val);
    return this;
  }
}

var ms = new MinStack();
ms.push(6).push(23).push(2).push(9).push(5);
console.log(ms.min);
