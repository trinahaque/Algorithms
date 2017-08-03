function Trie(){
    this.root = new Trie_Node("", false);
}

function Trie_Node(val, isWord){
    this.val = val;
    this.isWord = isWord;
    this.kids = [];
}


Trie.prototype.insert = function(str){
    // returns true if a word is inserted
    // Joined returns true
    // Join returns true
    // Join returns false since it's added already
    return this.root.insert(str);
}


Trie_Node.prototype.insert = function(str){
    // this method will have all the logics of adding a new word
    // if no word in Trie, add completely a new word
    // if Trie already has some of the strings, add function will add the rest of the strings
    // if the word already exists, return false
}