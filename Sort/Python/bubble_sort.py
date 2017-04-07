#Sorting Algorithm
#January 10, 2017
#It's still cloudy and rainy
import random

def bubble_sort(arr):
    count = 0
    for iteration in range(len(arr)):
        i = 0
        while (i+1) < len(arr):
            count += 1
            if arr[i+1]<arr[i]:
                arr[i], arr[i+1]= arr[i+1], arr[i]
                i = i+1
            else:
                i = i+1
                continue
    return count

def bubble_sortII(arr):
    count = 0
    for iteration in range(len(arr)):
        sorted = True
        i = 0
        while i < len(arr)-1 -iteration:
            count += 1
            if arr[i+1] < arr[i]:
                sorted = False
                arr[i], arr[i+1] = arr[i+1], arr[i]
            i = i+1
        if sorted:
            break
    return count

arr = [random.randint(1,1000) for _ in range(1000)]
print bubble_sort(arr)
arr = [random.randint(1,1000) for _ in range(1000)]
print bubble_sortII(arr)

# def selection_sort():
#     arr = input("Please enter an array: ")
#     iteration = 0
#     while iteration < len(arr):
#         min_numb = arr[iteration]
#         for i in range(len(arr)):
#             if arr[i] < min_numb:
#                 arr[i], min_numb= min_numb, arr[i]
#                 i = i+1
#             else:
#                 i = i+1
#                 print arr
#                 iteration = iteration + 1
        # print arr
    # print arr
# selection_sort()
# [8,3,6,4,1,2,3,5]
