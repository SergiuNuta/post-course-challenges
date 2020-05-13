// How do you check if two strings are a rotation of each other?

const stringRotation = (string1, string2) => {
    let controlString = string1.concat(string1);
    return (controlString.includes(string2))
};

console.log(stringRotation('hello', 'lohel'));