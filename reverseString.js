//Task 2

function reverseString(str) {
    return str.split("").reverse().join("");
}
reverseString("hello");

module.exports = reverseString;