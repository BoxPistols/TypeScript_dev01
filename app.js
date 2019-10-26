// const add = (a: number, b: number): number => {
//   return a + b;
// }
function add(a, b) {
    if (typeof a === "string" && typeof b === "string") {
        return a + " " + b;
    }
    return a + b;
}
console.log(add("Moge", "bbbb"));
