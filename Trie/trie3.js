function Trie(){
  this.root = new TrieNode("", false);
}

function TrieNode(val, isWord){
  this.val = val;
  this.isWord = isWord;
  this.kids = [];
}
