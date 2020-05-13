// How do you check if two strings are anagrams of each other?

const checkIfStringsAreAnagrams = (string1, string2) => {
    let result1 = string1.toLowerCase().split('').sort().join();
    console.log(result1);
    let result2 = string2.toLowerCase().split('').sort().join();
    console.log(result2);
        return (result1 === result2) 
}
console.log(checkIfStringsAreAnagrams('Silent', 'Listen'));