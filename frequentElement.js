// Problem :  Write a JavaScript program to find the most frequent element in an array and return it.
// Example Input: [3, 5, 2, 5, 3, 3, 1, 4, 5] Example Output: 3


function frequentElements( arr, n) {
    let item;
    let m =0;
    let mf=1;

    for(let i=0; i<arr.length; i++){
        for(let j = i; j<arr.length; j++){
            if(arr[i] == arr[j])
                m++;
            if(mf<m)
            {
                mf=m; 
                  item = arr[i]; 
            }

        }
        m=0;

    }
    return item;

}

let inputNumbers = frequentElements([3, 5, 2, 5, 3, 3, 1, 4, 5])
console.log(inputNumbers);
