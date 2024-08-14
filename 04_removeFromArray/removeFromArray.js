const removeFromArray = function(arr, ...numbers) {
    for (const number of numbers) {
        while (arr.includes(number)) {
            arr.splice(arr.indexOf(number), 1)
        }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
