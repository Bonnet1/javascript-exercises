const repeatString = function(string, timesRepeated) {
    let output = '';
    let i = 0;
    if (timesRepeated < i) {
        return 'ERROR'
    } else while (i < timesRepeated) {
        output +=string;
        i++
    }
    return output;
}

module.exports = repeatString
