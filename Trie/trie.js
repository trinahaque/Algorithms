function Trie_Tree(){
  this.root = new Trie_Node("", false);
}

function Trie_Node(val, isWord){
  this.val = val;
  this.isWord = isWord;
  this.kids = [];
}

Trie_Tree.prototype.print = function(){
  if (this.root.kids.length < 1){
    return false;
  }
  var current = this.root;
  while (current){
    if (current.kids){
      console.log(current.kids.val);
    }
  }

}
Trie_Tree.prototype.insert = function(string){
  return this.root.insert(string);
}

Trie_Tree.prototype.autocomplete = function(str){
  if (!this.root.kids){
    return false;
  }
  var node = this.root.find_Node(str, 0);
  console.log("The node is", node);
  var arr = [];
  if (node){
    return node.find_Words(arr, str);
  }
  return this.root.val;
}

Trie_Node.prototype.find_Node = function(str, index){
  if (index === undefined){
    index = 0;
  }
  if (index == str.length){
    return this;
  }
  if (this.kids.length < 1){
    return this;
  }

  for (var i= 0; i < this.kids.length; i++){
    if (this.kids[i].val == str[index]){
      this.kids[i].find_Node(str, index+1);
    }
  }
  return this;
}

Trie_Node.prototype.find_Words = function(arr, word){
  if (!arr){
    arr = [];
  }
  if (this.isWord){
    arr.push(word);
  }

  for (var i=0; i < this.kids.length; i++){
    this.kids[i].find_Words(arr, word+this.kids[i].val);
  }
  return arr;
}

Trie_Node.prototype.add = function(string, index){
  var current = this;
  while (index < string.length){
    current.kids.push(new Trie_Node(string[index], false));
    current = current.kids[current.kids.length-1];
    // console.log(current);
    index++;
  }
  // console.log("Current is", current);
  current.isWord = true;
  return this;
  // I am not completely sure what it should return
}

Trie_Node.prototype.insert = function(string){
  if (this.kids.length < 1){
    this.add(string, 0);
  }
  var add = false;
  var current = this;
  for (var index = 0; index < string.length; index++){
    for (var i=0; i < current.kids.length; i++){
      if (current.kids[i] == string[index]){
        current = current.kids[i];
        break;
      }
      else{
        current.add(string, index);
        return true;
      }
    }
  }
  return false;
}

var trie = new Trie_Tree();
trie.insert("Code");
trie.insert("Comedy");
trie.insert("CSI");
trie.insert("Codes");
trie.insert("Cat");
trie.insert("Cats");
trie.insert("Bob");
console.log(trie.autocomplete("Co"));
// console.log(trie.insert("Trina"));
// console.log(trie.insert("Trina"));

// trie.insert("Trina");
// console.log(trie.insert("Trina"));
