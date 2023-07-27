// Problem : Implement a JavaScript function to find the second smallest element in an array of numbers. The function should return the second smallest number.

function secondSmallestNumber(inpArray){
    if(inpArray.length < 2){
        return "Array length at least 2 numbers";
    }

    let smallest = Number.MAX_VALUE ;
    let secondSmallest= Number.MAX_VALUE ; 
    for(let i =0 ; i < inpArray.length ; i++){
        if (inpArray[i] < smallest) 
        { 
            secondSmallest = smallest; 
            smallest = inpArray[i]; 
        } 
        else if (inpArray[i] < secondSmallest && inpArray[i] != smallest) 
        secondSmallest = inpArray[i]; 
    }
    if (secondSmallest == Number.MAX_VALUE ) 
        return "There is no second smallest element"; 
    else
        return "The second smallest is  ", secondSmallest ; 

}

let inputNumbers = secondSmallestNumber([5,2,10,8,6,1,3])
console.log(inputNumbers);