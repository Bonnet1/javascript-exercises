const removeFromArray = function(myArray, toRemove) {
        for( var i = myArray.length-1; i--;) {
            if (myArray[i] === toRemove[i]) myArray.splice(i, 1);
        }
    }

module.exports = removeFromArray
