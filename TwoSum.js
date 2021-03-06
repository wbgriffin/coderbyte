/**
 * Have the function TwoSum(arr) take the array of integers stored in arr,
 * and determine if any two numbers (excluding the first element) in the array
 * can sum up to the first element in the array. For example: if arr is 
 * [7, 3, 5, 2, -4, 8, 11], then there are actually two pairs that sum to the
 * number 7: [5, 2] and [-4, 11]. Your program should return all pairs, with
 * the numbers separated by a comma, in the order the first number appears in
 * the array. Pairs should be separated by a space. So for the example above,
 * your program would return: 5,2 -4,11
 * If there are no two numbers that sum to the first element in the array,
 * return -1.
 */

function TwoSum(arr) { 
  let target = arr.shift();
  let resultArr = [];

  while (arr.length >= 2) {
    let current = arr.shift();
    for (let i=0; i<arr.length; i++) {
      if ((current + arr[i]) === target) {
        resultArr.push(`${current},${arr[i]}`);
      }
    }
  }

  if (!resultArr.length) {
    return -1;
  }
  return resultArr.join(' ');
}
   
// keep this function call here 
console.log(TwoSum(readline()));