// --------------------------------------------------------------------------
// 📌 객체 비교
// --------------------------------------------------------------------------

const obj1 = { a: 1, b: { c: 2 } }
const obj2 = { a: 1, b: { c: 2 } }
const obj3 = obj1

console.log(obj1 === obj2)
console.log(obj2 === obj3)
console.log(obj3 === obj1)