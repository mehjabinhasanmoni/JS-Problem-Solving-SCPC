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