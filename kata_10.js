// How do you print the first non-repeated character from a string?

const printFirstNonRepeat = (text) => {
    for (const character of text.split("")) {
        if (text.indexOf(character) === text.lastIndexOf(character)) {
            return `The first non-repeated character from "${text}" is : ${character}`;
        }
    }
}

console.log(printFirstNonRepeat('aleluia'));