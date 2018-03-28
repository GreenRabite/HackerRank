// At HackerLand University, a passing grade is any grade 40 points or higher on a 100 point scale. Sam is a professor at the university and likes to round each student’s grade according to the following rules:
//
// If the difference between the grade and the next higher multiple of 5 is less than 3, round to the next higher multiple of 5
// If the grade is less than 38, don’t bother as it’s still a failing grade
// Automate the rounding process then round a list of grades and print the results.
//
// Input Format
//
// The first line contains a single integer denoting  (the number of students).
// Each line  of the  subsequent lines contains a single integer, , denoting student 's grade.
//
// Constraints
//
// Output Format
//
// For each  of the  grades, print the rounded grade on a new line.
//
// Sample Input 0
//
// 4
// 73
// 67
// 38
// 33
// Sample Output 0
//
// 75
// 67
// 40
// 33
// Explanation 0
//
// The first grade,  is two below the next higher multiple of , so it rounds to .
//  is  points less than the next higher multiple of  so it doesn’t round.
// , like , rounds up to next higher multiple of , or  in this case.
//  is less than , so it does not round.

function gradingStudents(grades) {
    let result=[];
    for(let i=0; i<grades.length; i++){
        if (grades[i] >= 38) {
          if ((grades[i]+1) %5===0) {
            result.push(grades[i]+1);
          }else if ((grades[i]+2) %5===0) {
            result.push(grades[i]+2);
          }else {
            result.push(grades[i]);
          }
        }else{
            result.push(grades[i]);
        }
    }
    return result;
}