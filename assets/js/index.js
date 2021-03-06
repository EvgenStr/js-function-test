const num1 = prompt("number 1:");
const num2 = prompt("number 2:");
const num3 = prompt("number 3:");

writeValues(num1, num2, num3);

console.log(
  "max value:",
  compareMax(num1, num2),
  "min value:",
  compareMin(num1, num2),
  ";",
  num1,
  isParity(num1)
);

console.log("quadratic equation", quadraticEquation(num1, num2, num3));

function writeValues(...params) {
  let length = params.length;
  let wrap = document.getElementById("wrap");

  for (let i = 0; i <= length - 1; i++) {
    let newElement = document.createElement("p");
    newElement.innerHTML = `Number ${i + 1} = ${params[i]};`;
    wrap.appendChild(newElement);
  }
}

function compareMax(a, b) {
  const val_a = Number(a);
  const val_b = Number(b);
  // writeMaxValue(val_a > val_b ? val_a : val_b);
  return val_a > val_b ? val_a : val_b;
}

function compareMin(a, b) {
  const val_a = Number(a);
  const val_b = Number(b);
  return val_a < val_b ? val_a : val_b;
}

function isParity(a) {
  return a % 2 === 0 ? " - is parity" : " - is not parity";
}

function quadraticEquation(a, b, c) {
  if (isNaN(a - b - c)) return false;
  if (a === 0) return false;
  let D = b ** 2 - 4 * (a * c);
  if (D < 0) return null;
  else if (D === 0) {
    let res = -b / (a * 2);
    return [res, res];
  }
  let arr = [];
  arr.push((-b + D ** (1 / 2)) / (a * 2));
  arr.push((-b - D ** (1 / 2)) / (a * 2));
  return arr;
}


// function writeMaxValue(num) {
//   document.getElementById("max-value").innerHTML = `Max value: ${num}`;
// }

// let elements = document.getElementsByClassName("value");
// elements[i].innerHTML = `Number ${i + 1} = ${params[i]};`;

// function compareMax(a, b) {
//   const val_a = Number(a);
//   const val_b = Number(b);
//   writeMaxValue(val_a > val_b ? val_a : val_b);
//   return val_a > val_b ? val_a : val_b;
// }

// function writeValues(num1, num2, num3) {
//   document.getElementById("num-one").innerHTML = `Number 1 = ${num1};`;
//   document.getElementById("num-two").innerHTML = `Number 2 = ${num2};`;
//   document.getElementById("num-three").innerHTML = `Number 3 = ${num3};`;
// }
// ================================================================

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