// 1. Створити функцію, яка буде знаходити та повертати найменьше з двох чисел. Зробити на початку перевірки, які мають стежити за тим щоб у функцію не передали некорректні дані при її запуску. У випадку передачі хоч одного некорректного параметру фунція має одразу повернути null.

const getMinNumber = function (number1, number2) {
  if (typeof number1 !== "number" || isNaN(number1)) {
    throw new TypeError(' The number1  must be correct');
  }
  if (typeof number2 !== 'number' || isNaN(number2)) {
  throw new TypeError(' The number2 must be correct');
}
  if (number1 > number2) {
    return number2;
  } else {
    return number1;
  }
};
console.log(getMinNumber(4, 5));

// тернарка
// const  getMinNumber = function (number1, number2){
//   return number1 > number2 ? number2 : number1; 
// }
// console.log(getMinNumber(15, 7));

//2. Створити функцію, яка буде отимувати вік людини і казати, повнолітня вона, чи ні. Зробити на початку перевірки, які мають стежити за тим щоб у функцію не передали некорректні дані при її запуску. У випадку передачі хоч одного некорректного параметру фунція має одразу повернути null.

const isAdult = function (age) {
  if (typeof age !== 'number' || isNaN(age)) {
    throw new TypeError(' The age must be correct');
  }
  return age >= 18;
}
console.log(isAdult(35));

// 3. Створити функцію, яка буде приймати від користувача загальну суму його покупки та буде повертати суму з урахуванням знижки. Базова знижка у 5% дається усім покупкам, але при загальній вартості покупки від 1500грн знижка має складати 10%.
// Зробити на початку перевірки, які мають стежити за тим щоб у функцію не передали некорректні дані при її запуску. У випадку передачі хоч одного некорректного параметру фунція має одразу повернути null.

const getDiscountPrice = function (price) {
  if (typeof price !== 'number' || isNaN(price)) {
    throw new TypeError(' The price  must be correct');
  }
  if (price >= 1500) {
    return price - (price / 100 * 10);
  } else {
    return price - (price / 100 * 5);
  }
};
console.log(getDiscountPrice(2300));

// тернарка
// const getDiscountPrice = function (price) {
//   return price  >= 1500 ? price - price / 100 * 10 :  price - price / 100 * 5;
//   }
//   console.log(getDiscount(1500));



// Створити функцію яка буде приймати число та казати, чи є воно парним. Парні числа завжди діляться без залишку на 2.
// Зробити на початку перевірки, які мають стежити за тим щоб у функцію не передали некорректні дані при її запуску. У випадку передачі хоч одного некорректного параметру фунція має одразу повернути null.

const isEven = function (number) {
  if (typeof number !== 'number' || isNaN(number)) {
    throw new TypeError(' The number  must be correct');
  }
  return number % 2 === 0;
};
console.log(isEven(9));

