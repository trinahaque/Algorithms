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

BST.prototype.postOrder = function(){
  if (!this.root){
    return null;
  }
  // postOrder is left, right, root
  return this.root.postOrder();
}

BSTNode.prototype.postOrder = function(){
  if (!this){
    return;
  }
  if (this.left){
    this.left.postOrder();
  }
  if (this.right){
    this.right.postOrder();
  }
  console.log(this.val);
}


BST.prototype.preOrder = function(){
  // preOrder is Root, left, right
  if (!this.root){
    return null;
  }
  return this.root.preOrder();
}

BSTNode.prototype.preOrder = function(){
  if (this){
    console.log(this.val);
    if (this.left){
      this.left.preOrder();
    }
    if (this.right){
      this.right.preOrder();
    }
  }
}



BST.prototype.inOrder = function(){
  // inOrder is Left, Root, Right
  if (!this.root){
    return null;
  }
  return this.root.inOrder();
}

BSTNode.prototype.inOrder = function(){
  // not right
  if (this){
    if (this.left){
      this.left.inOrder();
      console.log(this.val);
    }
    if (this.right){
      this.right.inOrder();
    }
  }
}


BST.prototype.isBinarySearchTree = function(){
  // have to keep track of both parent and the grand-parent
  // end is when both left and right node are null
  // false anytime it fails the test
  // keep track of min and max, update it each time
  // all left has to be less than max

}

// inOrder, postOrder, breadthFirst, preOrder, isBalanced, leastCommonAncestor very popular, if tree is binary search tree

var bst = new BST();
bst.add(10).add(5).add(15).add(3).add(7).add(2).add(12).add(17);
// bst.add(1).add(2).add(3).add(4).add(5);
// console.log(bst);
console.log(bst.inOrder());
// console.log(bst.preOrder());
// console.log(bst.postOrder());
