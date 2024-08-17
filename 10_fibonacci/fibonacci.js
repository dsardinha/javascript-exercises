const fibonacci = function(num) {
    if (typeof num !== 'number') num = +num;
    if (num < 0) return "OOPS";
    if (num === 0 || isNaN(num)) return 0;
    if (num === 1 || num === 2) return 1;
    let arr = [1, 1];
    for (let i = 1; i < num; i++) {
        arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
    }
    return arr[num - 1];
};

// Do not edit below this line
module.exports = fibonacci;
