//  Create a function that takes a sorted array of numbers and a target value as input. The function should find two numbers in the array that add up to the target value. Return an array containing the indices of the two numbers.
// Example Input: ([1, 3, 6, 8, 11, 15], 9) Example Output: [1, 2] (numbers at indices 1 and 2: 3 + 6 = 9)


function twoNumbersWithSum (inpArray, target) {
    var map = [];
    var indexnum = [];
    for (let i = 0; i < inpArray.length; i++){
        if (map[inpArray[i]] != null){
            var index = map[inpArray[i]];
            indexnum[0] = index;
            indexnum[1] = i;
            break;
        } 
        else
        {
        map[target - inpArray[i]] = i;
        }
    }
    return indexnum;
}

let inputNumbers = twoNumbersWithSum([1, 3, 6, 8, 11, 15], 9)
console.log(inputNumbers);