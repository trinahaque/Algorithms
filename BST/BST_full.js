function BST(){
  this.root = null;
}

function BSTNode(val){
  this.val = val;
  this.left = null;
  this.right = null;
}

BST.prototype.full = function(){
  if (!this.root){
    return false;
  }
  return this.root.full();
}

BSTNode.prototype.full = function(){

}
