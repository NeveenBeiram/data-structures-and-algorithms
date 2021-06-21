# Merge Sort
Merge Sort is a sorting algorithm that uses the “divide and conquer” concept.

Given an array, we first divide it in the middle and we get 2 arrays.

We recursively perform this operation, until we get to arrays of 1 element.

Then we start building up the sorted array from scratch, by ordering the individual items we got.

## Pseudocode

```
 ALGORITHM Mergesort(arr)
    DECLARE n <-- arr.length
           
    if n > 1
      DECLARE mid <-- n/2
      DECLARE left <-- arr[0...mid]
      DECLARE right <-- arr[mid...n]
      // sort the left side
      Mergesort(left)
      // sort the right side
      Mergesort(right)
      // merge the sorted left and right sides together
      Merge(left, right, arr)

ALGORITHM Merge(left, right, arr)
    DECLARE i <-- 0
    DECLARE j <-- 0
    DECLARE k <-- 0

    while i < left.length && j < right.length
        if left[i] <= right[j]
            arr[k] <-- left[i]
            i <-- i + 1
        else
            arr[k] <-- right[j]
            j <-- j + 1
            
        k <-- k + 1

    if i = left.length
       set remaining entries in arr to remaining values in right
    else
       set remaining entries in arr to remaining values in left
```
## Trace

Sample Array: [4, 3, 1, 2]

We first divide the array into 2 arrays:

[4, 3]
[1, 2]
then we recursively divide those arrays:

[4]
[3]
and

[1]
[2]
Then it’s time to construct the result, by ordering those pairs of elements first:

[3, 4]
[1, 2]
Then we merge those 2 arrays:

[1, 2, 3, 4]



## Efficiency
* Time:O(nlogn)
* Space:O(n)