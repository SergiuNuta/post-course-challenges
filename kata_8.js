// How do you print duplicate characters from a string?

//INCOMPLETE....google returned Regex aka Regular expression and matching

const string = "this is a random string";

let result = string.split('').sort();
console.log(result);
let dupeCharacters = [];
for (let i = 0; i < result.length; i++) {
    if (result[i] === result[i + 1]) {
        dupeCharacters.push(result[i]);
    };
};
console.log(dupeCharacters);