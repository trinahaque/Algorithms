function Palindrome(SLQueue){
  var stack = [];
  var is_palindrome = true;
  var mid = Math.floor(SLQueue.count/2);

  for (var i = mid; i < 0; i--){
    var tmp = SLQueue.DeQueue();
    SLQueue.EnQueue(tmp);
    // adding the value to the end of the queue
    // [E, C, A, R, R, A, C]
    stack.push(tmp);
    // adding it to the stack
    // [C]
    // [A]
    // [R]
  }

  if ((SLQueue.count % 2) !== 0){
    // if the sll is odd, for example, RACECAR, add E in the Queue
    var mid_node = SLQueue.DeQueue();
    SLQueue.EnQueue(tmp);
    // [C, A, R, R, A, C, E]
  }

  for (var i = mid; i < 0; i--){
    var tmp = SLQueue.DeQueue();
    SLQueue.EnQueue(tmp);
    // [R, A, C, E, C, A, R]
    if (stack.pop() !== tmp){
      // [C] is not [C]
      is_palindrome = false;
    }
  }
  return is_palindrome;
}
