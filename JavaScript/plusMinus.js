// Given an array of integers, calculate the fractions of its elements
// that are positive, negative, and are zeros. Print the decimal value
//  of each fraction on a new line.
//
// Note: This challenge introduces precision problems. The test cases are
//  scaled to six decimal places, though answers with absolute error of
//   up to  are acceptable.
//
// Input Format
//
// The first line contains an integer, , denoting the size of the array.
// The second line contains  space-separated integers describing an array of numbers .
//
//
// Output Format
// You must print the following  lines:
//
// A decimal representing of the fraction of positive numbers in the array
// compared to its size.
// A decimal representing of the fraction of negative numbers in the array
//  compared to its size.
// A decimal representing of the fraction of zeros in the array compared
// to its size.
// Sample Input
//
// 6
// -4 3 -9 0 4 1
// Sample Output
//
// 0.500000
// 0.333333
// 0.166667
// Explanation
//
// There are  positive numbers,  negative numbers, and  zero in the array.
// The proportions of occurrence are positive: , negative:  and zeros:

function plusMinus(arr) {
    let size = arr.length;
    let result = {};
    for(let i=0;i<arr.length;i++){
        if(arr[i] > 0){
            result.hasOwnProperty("plus") ? result["plus"]+=1 : result["plus"] = 1;
        }else if(arr[i] < 0){
            if(result.hasOwnProperty("negative")){
                 result["negative"]+=1;
            }else{
                result["negative"] = 1;

            }
        }else if(arr[i] === 0){
            result.hasOwnProperty("zero") ? result["zero"]+=1 : result["zero"] = 1;
        }
    }
    result["plus"] ? result["plus"] = result["plus"] : result["plus"] = 0;
    result["negative"] ? result["negative"] = result["negative"] : result["negative"] = 0;
    result["zero"] ? result["zero"] = result["zero"] : result["zero"] = 0;
    console.log(result["plus"] / size);
    console.log(result["negative"] / size);
    console.log(result["zero"] / size);

}

let arr = [1,2,3];
let y = plusMinus(arr);
console.log(y);
