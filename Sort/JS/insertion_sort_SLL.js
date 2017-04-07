function insertion_sort(SLL, val){
  var node = new SLL_Node(val);
  if (!SLL.head){
    SLL.head = node;
  }
  var current = SLL.head;
  if (current.val > val){
    SLL.head = node;
    node.next = current
  }
}
