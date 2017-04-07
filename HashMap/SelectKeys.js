function selectKeys(keyArray){
  for (var i=0; i < keyArray.lenght; i++){
    var hash = keyArray[i].hashcode();
    var index = mod(hash, this.capacity);
    if (this.table[index]){
      var current = this.table[index].head;
      while (current){
        if (current.val[0]==keyArray[i]){
          break;
        }
        current = current.next;
      }
      // remove the nodes that do not have matching keys
    }
  }
  // remove values at all other indexes that are not found hasing keyArray
}
