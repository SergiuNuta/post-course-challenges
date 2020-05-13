// How do you check if a given string is a palindrome?

const palindromeCheck = (string) => {
    const reverseString = string.toLowerCase().split('').reverse().join('');
    console.log(reverseString);
    return string.toLowerCase() === reverseString;
}
console.log(palindromeCheck('Minim'));