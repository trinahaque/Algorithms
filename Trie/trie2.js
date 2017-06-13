// Use recursion to solve Trie problems

function Trie(){
  this.root = new TrieNode("", false);
}

function TrieNode(val, isWord){
  this.val = val;
  this.isWord = isWord;
  this.kids = [];
}

// incomplete
Trie.prototype.insert = function(str){
  return this.root.insert(str);
}

// incomplete
Trie.prototype.print = function(){
  if (this.root.kids.length < 1){
    return null;
  }
  var arr = [];
  return this.root.print(arr);
}


TrieNode.prototype.print = function(arr, str){
  if (!str){
    str = "";
  }
  if (this.isWord){
    arr.push(str);
    if (this.kids.length < 1){
      str = "";
    }
    return;
  }
  for (var i = 0; i < this.kids.length; i++){
    str += this.kids[i].val;
    this.kids[i].print(arr, str);
  }
  return arr;
}


TrieNode.prototype.insert = function(str, l){
  if (!l){
    l = 0;
  }
  for (var i = 0; i < this.kids.length; i++){
    if (str[l] == this.kids[i] && str.slice(i).length == 1){
      // if string is already in trie
      this.kids[i].isWord = true;
      return this;
    }
    if (str[l] == this.kids[i]){
      this.kids[i].insert(str, l+1);
    }
  }
  return this.addNode(str.slice(l));
}

TrieNode.prototype.addNode = function(str){
  if (str.length < 2){
    var node = new TrieNode(str[0], true);
    this.kids.push(node);
    return this;
  }
  var node = new TrieNode(str[0], false);
  // console.log("The string is", str.slice(1));
  this.kids.push(node);
  return this.kids[0].addNode(str.slice(1));
}

var trie = new Trie();
trie.insert("bob");
trie.insert("bobby");
console.log(trie.print());
