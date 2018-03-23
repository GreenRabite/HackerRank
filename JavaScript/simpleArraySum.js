// Given an array of integers, find the sum of its elements.
// Function Description
// Complete the simpleArraySum function described below to return the sum of all elements of the array.
// simpleArraySum(integer: n, integer array: arr)
// Parameters:
// n: array size
// ar: array of integers to sum
// Returns: integer sum of all array elements
// Raw Input Format
// The first line contains an integer, , denoting the size of the array.
// The second line contains  space-separated integers representing the array's elements.
// Sample Input 0
// 6
// 1 2 3 4 10 11
// Sample Output 0
// 31
// Explanation 0
// We print the sum of the array's elements: .

function simpleArraySum(ar) {
    const sum = ar.reduce((accum,el)=>(accum + el),0);
    return sum;
}
