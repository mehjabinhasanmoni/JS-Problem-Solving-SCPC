// Problem : Create a program that generates a random password of a specified length. The password should include a mix of uppercase letters, lowercase letters, numbers, and special characters.

function randomPassword(length){
  const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
  const numericChars = '0123456789';
  const specialChars = '!@#$%^&*()-_=+[]{}|;:,.<>?';
  const allChars = uppercaseChars + lowercaseChars + numericChars + specialChars;
  const allCharsLength = allChars.length;

  let password = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * allCharsLength);
    password += allChars[randomIndex];
  }

  return password;
}

let inputLength = randomPassword(8)
console.log(inputLength);