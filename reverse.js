// Problem : Create a function that takes a string as input and returns the reversed version of the string without using the built-in reverse() method. 

function reverseString (str) {
    let reverseStr = "";

    for (let i= str.length -1; i>=0 ; i--) {
        reverseStr+= str[i];
    }

    return reverseStr;
}

let inputStr = reverseString("Hello World")
console.log(inputStr);
