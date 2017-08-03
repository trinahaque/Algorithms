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
    if (this.root.kids.length < 1){
        // if trie is empty, just add the word. No need to check in kids array
        return this.root.add(str);
    }
    else{
        // otherwise, follow all the logics
        return this.root.insert(str);
    }
}


Trie_Node.prototype.insert = function(str){
    // this method will have all the logics of adding a new word
    // if no word in Trie, add completely a new word
    // if Trie already has some of the strings, add function will add the rest of the strings
    // if the word already exists, return false
}


Trie_Node.prototype.add = function(str){
    // this function adds the whole strings to Trie, given the initial node of it
    // adds bobny to bob
    // this is node "b"
    // str is "ny"
    // adding a node with str value, not just the str
    this.kids.push(new Trie_Node(str[0]));
    if (str.length < 2){
        // if it's the last character in the string
        this.kids[0].isWord = true;
        return true;
    }
    else{
        // starting from the next string
        // will return undefined without return statement
        return this.kids[0].add(str.slice(1));
    }
}


var trie = new Trie();
console.log(trie.insert("bob"));
