let add = (a: number ,b: number): number => a + b;
// let add = (a: number ,b: number): number =>{
//   return a + b;
// }

const el = document.querySelector('h1');
el.innerHTML = (add(2, 12));