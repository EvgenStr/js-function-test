// alert("hello world");

// let hello = "Hello World";
// console.log(hello);

// let arr = [];
// console.log( 'test' + " " + typeof arr)

// console.log(!!true);
// console.log(!typeof {});

// console.log(Boolean(""));
// console.log(Boolean(typeof {}));
// console.log(Boolean(!typeof {}));

// console.log("--------------");

// console.log("10" + 1);
// console.log(+"10" + 1);
// console.log(+"10" + "1");
// console.log(10 + +"1");

// ---------------
// let test  = `says "Hello"`;
// let test2 = " test \n \"test\""
// console.log(test);
// console.log(test2);
// let test = 8;

// function isParity(test) {
//   console.log(test % 2 === 0 ? "+" : "-");
// }

// let a = 4;
// let b = 6;
// let c = 5;
// let d = 3;
// let e = 7;
// let f = 2;
// const eleven = 11;
// const bool = true;
// const text = "java script";
// const stringNum = "100";
// let num = 1;

// num += 11;
// num -= 11;
// num *= 11;
// num /= 11;
// num++;
// num--;

// console.log(a * b, "\n", c / b, "\n", e + f);
// console.log(`${a+b} \n ${c} `);

// console.log(eleven, bool, text, stringNum);
// const func = function (a, b, ...params) {
// const result = a+b;
// return isNaN(Number(a) + Number(b)) ? null : a + b;
// };

const num1 = prompt("number 1:");
const num2 = prompt("number 2:");
const num3 = prompt("number 3:");

console.log(
  "max value -",
  compareMax(num1, num2),
  "min value-",
  compareMin(num1, num2),
  "/n",
  num1,
  isParity(num1)
);
console.log("quadratic equation", square(num1, num2, num3));

function compareMax(a, b) {
  const val_a = Number(a);
  const val_b = Number(b);
  return val_a > val_b ? val_a : val_b;
}

function compareMin(a, b) {
  const val_a = Number(a);
  const val_b = Number(b);
  return val_a < val_b ? val_a : val_b;
}

function isParity(a) {
  return a % 2 === 0 ? "is parity" : "is not parity";
}

// square(num1, num2, num3);

function square(a, b, c) {
  let D = b ** 2 - 4 * (a * c);
  // console.log(D)
  if (D < 0) {
    return "D < 0, корней нет";
  } else if (D === 0) {
    return -b / (a * 2);
  } else {
    let arr = [];
    arr.push((-b + Math.sqrt(D)) / (a * 2));
    arr.push((-b - Math.sqrt(D)) / (a * 2));
  }
  return arr;
}
