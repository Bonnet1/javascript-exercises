const sumAll = function(start, end) {
    let sum = 0;
    let current = start;
    while (current <=end) {
        sum += current;
        current++;
    } return sum;
}

module.exports = sumAll
