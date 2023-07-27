// Problem : Create a function that takes a string as input and returns the reversed version of the string without using the built-in reverse() method. 

function reverseString (str) {
    let reverseStr = str.split("").reverse().join("");
    return reverseStr;
}

let strr = reverseString("Hello World")
console.log(strr);
