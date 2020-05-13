// How do you print the first non-repeated character from a string?

//INCOMPLETE

const firstNonRepeatedCharacter = (string) => {
    let result = string.split('').sort();
    console.log(result);
   
}

console.log(firstNonRepeatedCharacter('ridiculous'));