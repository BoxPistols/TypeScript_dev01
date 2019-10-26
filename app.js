var rs = [10, 20, 30];
console.log(rs);
// 列挙型
var Signal;
(function (Signal) {
    Signal[Signal["Red"] = 0] = "Red";
    Signal[Signal["Blue"] = 1] = "Blue";
    Signal[Signal["Yellow"] = 2] = "Yellow";
})(Signal || (Signal = {}));
(function (Signal) {
    Signal[Signal["Green"] = 5] = "Green";
})(Signal || (Signal = {}));
var result;
console.log(Signal[5]);
function add(a, b) {
    return a + b;
}
console.log(add(12, 90));
