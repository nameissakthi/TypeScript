var concateString = function (a, b, c) {
    if (c === void 0) { c = "d"; }
    return a + b + c;
};
console.log(concateString("a", "b", "c"));
console.log(concateString("a", "b"));
