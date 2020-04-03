var bitwiseAND = function (n1, n2) {
    return n1 & n2;
};
console.log(bitwiseAND(7, 12));
var bitwiseOr = function (n1, n2) {
    return n1 | n2;
};
console.log(bitwiseOr(7, 12));
var bitwiseXor = function (n1, n2) {
    return n1 ^ n2;
};
console.log(bitwiseXor(7, 12));





var addUp = function (num) {
    var sum = 0;
    for (var i = 1; i <= num; i++) {
        sum += i;
    }
    return sum;
};
console.log('addup', addUp(4));
//# sourceMappingURL=main.js.map