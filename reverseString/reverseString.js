const reverseString = function(str) {
    let i = 0;
    let j = str.length;
    let output = '';
    while (i <= j) {
        let last = str.charAt(j);
        output +=last;
        j--;
    } return output;
}

module.exports = reverseString
