console.log("Simple debugging example running.");

let x = 99;
let y = 42;

console.log(x);

// let oo = { foo: 42, bar: 83, baz: 79 };
// for (let key in oo) {
//   let value = oo[key];
//   console.log("key:", key, "value:", value);
// }
let oo = { foo: 42, bar: 83, baz: 79 };
console.log("   Object.keys(oo) =>", Object.keys(oo));
console.log(" Object.values(oo) =>", Object.values(oo));
console.log("Object.entries(oo) =>", Object.entries(oo));
