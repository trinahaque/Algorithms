def selection_sort(arr):
    count = 0
    for iteration in range(len(arr)):
        sorted = True
        for i in range(iteration, len(arr)):
            count += 1
            min_value = arr[iteration]
            if min_value < arr[i]:
                sorted = False
                arr[i], arr[i+1] = arr[i+1], arr[i]
            i = i+1
        if sorted:
            break
    return count
