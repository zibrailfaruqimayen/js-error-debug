function isBigger(num) {
  if (num > 5) {
    return true;
  } else {
    return false;
  }
}
// } (syntax error exempla)
const result = isBigger(11);
// console.log(result);
//
//
// const sum = a, b => a + b; (you get error for bracket of 2 parameter)
const sum = (a, b) => a + b;
const res = sum(3, 5);
//
//
//
const musk = {
  name: "elon",
  // age: 53 (error for  ' , ' between property's)
  age: 53,
  job: "tesla",
};
console.log(musk.age);

// if (SVGAnimatedNumberList.length > 5 && Numbers[0] === 5) {
// }
