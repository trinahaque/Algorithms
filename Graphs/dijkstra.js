function dijkstra(AdjMatrix, root){
  var visited_arr = [];
  var not_visited_arr = [];
  var answer_arr = [];
  for (var i=0; i < AdjMatrix.length; i++){
    not_visited_arr.push(i);
    if (i == root){
      answer_arr.push([null, 0]);
      // prev node, weight
    }
    else{
      answer_arr.push([null, Infinity]);
    }
  }
  var current = root;
  // console.log("Current is", current);
  while(current > -1){
    // console.log("Current is", current);
    for (var i=0; i<AdjMatrix[current].length;i++){
      if (AdjMatrix[current][i] > 0){
        var weight = answer_arr[current][1]+AdjMatrix[current][i];
        if (weight < answer_arr[i][1]){
          answer_arr[i] = [current, (weight)];
        }
      }
    }
    visited_arr.push(current);
    not_visited_arr[current] = null;
    var min = Infinity;
    var index;
    for (var i = 0; i < answer_arr.length; i++){
      if (answer_arr[i][1] < min){
        min = answer_arr[i][1];
        index = i;
      }
    }
    current = index;
  }
  return answer_arr;
}


var AdjMatrix = [
                  [ 0, 4, 3,-1,-1,-1],
                  [-1, 0, 2, 5, 1,-1],
                  [-1, 2, 0, 2,-1,-1],
                  [-1, 5,-1, 0, 1, 4],
                  [-1,-1,-1,-1, 0,-1],
                  [-1,-1,-1,-1,-1, 0]
                ];
console.log(dijkstra(AdjMatrix, 1));
