// Calculate and print the sum of the elements in an array, keeping in
// mind that some of those integers may be quite large.
//
// Function Description
//
// Complete the function aVeryBigSum described below to return the sum of
// all elements of the array.
//
// aVeryBigSum(integer: n, integer: arr_size, integer array: arr)
// Parameters:
// n: array size
// arr_size: array size
// ar: array of integers to sum
// Returns: integer sum of all array elements
// Constraints
//
// Raw Input Format
//
// The first line of the input consists of an integer .
// The next line contains  space-separated integers contained in the array.
//
// Sample Input 0
//
// 5
// 1000000001 1000000002 1000000003 1000000004 1000000005
// Sample Output 0
//
// 5000000015
// Note:
//
// The range of the 32-bit integer is .
// When we add several integer values, the resulting sum might exceed
// the above range. You might need to use long long int in C/C++ or long
//  data type in Java to store such sums.

function aVeryBigSum(n, ar) {
    let sum = ar.reduce((accum,el)=>(accum+el),0);
    return sum;

}
