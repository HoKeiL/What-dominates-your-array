/**
 * What-dominates-your-array 
 * A zero-indexed array arr consisting of n integers is given. The dominator of array arr is the value that occurs in more than half of the elements of arr.
 * For example, consider array arr such that arr = [3,4,3,2,3,1,3,3]
 * The dominator of arr is 3 because it occurs in 5 out of 8 elements of arr and 5 is more than a half of 8.
 * Write a function dominator(arr) that, given a zero-indexed array arr consisting of n integers, returns the dominator of arr. The function should return −1 if array does not have a dominator. All values in arr will be >=0.
 * 
 * function: dominatorFinder
 * @param a - an array of number
 * @returns a number
 * 
 * pusedo:
 * function dominatorFinder(arr:number[]):number{
 *  variable of currentDominator = -1
 *  for loop to loop through the array to find the occurance of numbers{
 *    if(condition: the number is occured more times than arr.length/2){
 *      reassign currentDominator to the number
 *    }
 *  }
 *  return currentDominator
 * }
 */
function dominatorFinder(a: number[]): number {
  let currentDominator = -1;
  return currentDominator;
}

export default dominatorFinder;
