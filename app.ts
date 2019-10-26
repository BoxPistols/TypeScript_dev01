
const rs: number[] = [10, 20, 30];
console.log(rs);

// 列挙型
enum Signal {
  Red,
  Blue,
  Yellow
}
enum Signal {
  Green = 5
}
let result: Signal;
console.log(Signal[5]);

function add(a: number, b: number):number {
  return a + b;
}
console.log(add(12, 90));