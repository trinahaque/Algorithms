function BST(){
  this.root = null;
}

function BSTNode(val){
  this.val = val;
  this.left = null;
  this.right = null;
}

BST.prototype.inOrder = function(){

}

BST.prototype.isBinarySearchTree = function(){
  // have to keep track of both parent and the grand-parent
  // end is when both left and right node are null
  // false anytime it fails the test
  // keep track of min and max, update it each time
  // all left has to be less than max

}

// inOrder, postOrder, breadthFirst, preOrder, isBalanced, leastCommonAncestor very popular, if tree is binary search tree
