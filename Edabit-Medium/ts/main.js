var arrayOfMultiples = function (num, length) {
    var arr = [];
    for (var i = 1; i <= length; i++) {
        arr.push(i * num);
    }
    return arr;
};
console.log(arrayOfMultiples(7, 5));
var removeLeadingTrailing = function (n) {
    return Number(n).toString();
};
console.log(removeLeadingTrailing(230.000));
//# sourceMappingURL=main.js.map