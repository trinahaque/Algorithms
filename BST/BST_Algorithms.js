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


// depth/height/max height are the same problems
BST.prototype.depth = function(){
  if (!this.root){
    return 0;
  }
  return this.root.depth();
}

BSTNode.prototype.depth = function(){
  var left = 0;
  var right = 0;
  if (this.left){
    left = this.left.depth();
  }
  if (this.right){
    right = this.right.depth();
  }
  if (left > right){
    return left + 1;
  }
  else{
    return right + 1;
  }
}


BST.prototype.minHeight = function(){
  if (!this.root){
    return 0;
  }
  return this.root.minHeight();
}

BSTNode.prototype.minHeight = function(){
  var left = 0;
  var right = 0;
  if (this.left){
    left = this.left.minHeight();
  }
  if (this.right){
    right = this.right.minHeight();
  }
  if (left < right){
    return left + 1;
  }
  else{
    return right + 1;
  }
}

BST.prototype.findNode = function(val){
  if (!this.root){
    return this;
  }
  var dict = {
      found: false,
      parent: null,
      node: this.root
  }
  return this.root.findNode(val, dict);
}


BSTNode.prototype.findNode = function(val, dict){
  if (this.val == val){
    dict.found = true;
    dict.node = this;
    return dict;
  }
  if (this.val < val) {
    if (this.right){
      dict.parent = this;
      dict.node = this.right;
      this.right.findNode(val, dict);
    }
  }
  if (this.val > val){
    if (this.left){
      dict.parent = this;
      dict.node = this.left;
      this.left.findNode(val, dict);
    }
  }
  return dict;
}

BST.prototype.remove = function(val){
  var dict = this.findNode(val);

  if (dict.found){
    if (dict.node.right){
      var left = null;
      if (dict.node.val < dict.parent.val){
        dict.parent.left = dict.node.right;
      }
      else{
        dict.parent.right = dict.node.right;
      }
      if (dict.node.right.left){
        left = dict.node.right.leftMost();
      }
    }
    // console.log("The parent node is", dict.parent);
    // console.log("The left most node in remove is", left);
    if (dict.node.left){
      if (!left){
        dict.right.left = dict.node.left;
      }
      else{
        left.left = dict.node.left;
      }
    }
  }
  return this;
}

BSTNode.prototype.leftMost = function(){
  if (this.left){
    return this.left.leftMost();
  }
  return this;
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
bst.add(40).add(20).add(60).add(30).add(25).add(35);
console.log(bst.remove(60));
// console.log(bst.findNode(20));
// console.log(bst.minHeight());
// console.log(bst.depth());
// console.log(bst.count());
// console.log(bst.contain(4));
// console.log(bst.max());
// console.log(bst.min());
// console.log(bst.isEmpty());
// https://khan4019.github.io/front-end-Interview-Questions/bst.html
