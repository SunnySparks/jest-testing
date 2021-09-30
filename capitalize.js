function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
capitalize('hello');

module.exports = capitalize;