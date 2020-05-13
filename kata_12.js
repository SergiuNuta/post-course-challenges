// How can a given string be reversed using recursion?

//This uses the TERNARY OPERATOR....see Sarah Chima on dev.to
//or attacomsian.com (reverse a string)
//Read up more on this one to familiarise myself

const reverseString = (string) => {
    return string ? reverseString(string.substr(1)) + string[0] : string;
};

console.log(reverseString('hello world!'));