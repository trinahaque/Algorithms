function partition(arr){
    var i = -1;
    var pivot = arr.length-1;
    
    for (var j = 0; j < arr.length-1; j++){
        if (arr[j] < arr[pivot]){
            i = i+1;
            var temp = arr[j];
            arr[j] = arr[i];
            arr[i] = temp;
        }
    }
    var pivot_val = arr[pivot];
    arr[pivot] = arr[i+1];
    arr[i+1] = pivot_val;
    return arr;
}

var arr = [2,7,1,8,6,3,5,4]
console.log(partition(arr));
