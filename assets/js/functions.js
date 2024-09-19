
// const getMinNumber = function (number1, number2) {
//   if (number1 > number2) {
//     return number2;
//   } else {
//     return number1;
//   }
// };
// console.log(getMinNumber(4, 5));

const  getMinNumber = function (number1, number2){
  return number1 > number2 ? number2 : number1; 
}
console.log(getMinNumber(15, 7));


// const isAdult = function (age) {
//   if (age >= 18) {
//     return true;
//   } else {
//     return false;
//   }
// };
// console.log(isAdult(17));

const isAdult = function (age) {
  return age >= 18 ? true : false;
}
console.log(isAdult(35));


// const getDiscount = function (price) {
//   if (price >= 1500) {
//     return price - (price / 100 * 10);
//   } else {
//     return price - (price / 100 * 5);
//   }
// };
// console.log(getDiscount(2300));

const getDiscount = function (price) {
  return price  >= 1500 ? price - price / 100 * 10 :  price - price / 100 * 5;
  }
  console.log(getDiscount(1500));
  

// if (isNaN(firstNumber - secondNumber)) {
//   return null;
// };
// const isEven = function (number) {
//   if (number % 2 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// };
// console.log(isEven(9));

const isEven = function (number) {
  return number % 2 === 0 ? true : false;
}
console.log(isEven(11));