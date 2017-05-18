function BST(){
  this.root = null;
}

function BSTNode(val){
  this.val = val;
  this.left = null;
  this.right = null;
}

BST.prototype.add = function(val){
  if (!this.root){
    this.root = new BSTNode(val);
    return this;
  }
  this.root.add(val);
  return this;
}

BSTNode.prototype.add = function(val){
  var node = new BSTNode(val);
  if (val == this.val){
    return this;
  }
  if (val < this.val){
    if (!this.left){
      this.left = node;
      return this;
    }
    else{
      this.left.add(val);
    }
  }
  else{
    if (!this.right){
      this.right = node;
      return this;
    }
    else{
      this.right.add(val);
    }
  }
}

BST.prototype.isEmpty = function(){
  if (!this.root){
    return true;
  }
  return false;
}

BST.prototype.min = function(){
  if (!this.root){
    return null;
  }
  return this.root.min();
}
BSTNode.prototype.min = function(){
  if (!this.left){
    return this.val;
  }
  return this.left.min();
}

BST.prototype.max = function(){
  if (!this.root){
    return null;
  }
  return this.root.max();
}

BSTNode.prototype.max = function(){
  if (!this.right){
    return this.val;
  }
  return this.right.max();
}

BST.prototype.contain = function(val){
  if (!this.root){
    return false;
  }
  return this.root.contain(val);
}

BSTNode.prototype.contain = function(val){
  if (this.val == val){
    return true;
  }
  if (this.val > val){
    if (!this.left){
      return false;
    }
    return this.left.contain(val);
  }
  else{
    // (val < this.val)
    if (!this.right){
      return false;;
    }
    return this.right.contain(val);
  }
}

BST.prototype.size = function(){
  if (!this.root){
    return 0;
  }
  return this.root.size();
}

BSTNode.prototype.size = function(){
  var count = 1;
  var left = 0;
  var right = 0;
  if (this.left){
    left = this.left.size();
  }
  if (this.right){
    right = this.right.size();
  }
  return count+left+right;
}



// count gives total number of nodes in a BST
BST.prototype.count = function(){
  if (!this.root){
    return 0;
  }
  return this.root.count();
}


BSTNode.prototype.count = function(){
  var left = 0;
  var right = 0;
  if (this.left){
    left = this.left.count();
  }
  if (this.right){
    right = this.right.count();
  }
  return 1+left+right;
}



BST.prototype.GCA = function(node1, node2){
  // greatest common ancestor
  // very popular interview question
}

BST.prototype.isBinarySearchTree = function(){
  // have to keep track of both parent and the grand-parent
  // end is when both left and right node are null
  // false anytime it fails the test
  // keep track of min and max, update it each time
  // all left has to be less than max
}

bst = new BST();
bst.add(77).add(20).add(80).add(78).add(85).add(7).add(30).add(35).add(81).add(2).add(3);
console.log(bst.count());
// console.log(bst.size());
// console.log(bst.contain(4));
// console.log(bst.max());
// console.log(bst.min());
// console.log(bst.isEmpty());
// https://khan4019.github.io/front-end-Interview-Questions/bst.html
