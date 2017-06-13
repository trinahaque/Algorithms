function Trie_Tree(){
  this.root = new Trie_Node("", false);
}

function Trie_Node(val, isWord){
  this.val = val;
  this.isWord = isWord;
  this.kids = [];
}
