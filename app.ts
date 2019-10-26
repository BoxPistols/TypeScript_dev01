// const add = (a: number, b: number): number => {
//   return a + b;
// }

// OverLoad シグネチャー
// const add = (a: number, b: number): number => a + b;
function add(a: number, b: number): number;
function add(a: string, b: string): string;

function add(a:any, b:any){
  if(typeof a === "string" && typeof  b === "string"){
    return a + " " + b;
  }
  return a + b
}
console.log(add("Moge", "bbbb"));