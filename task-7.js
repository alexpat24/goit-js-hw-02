function filterArray(array) {
  "use strict";
  const numbers = [];
  for (let i = 0; i < array.length; i += 1) {
    // Write code under this line
    // numbers[i] = array[i];
    if (Number.isFinite(array[i])) numbers.push(array[i]);
    // ? Math.abs(true)
    // : false
    //numbers.push(numbers[i])
  }
  return numbers;
}

console.log(filterArray([-2, 0, 2]));
// [-2, 0, 2]

console.log(filterArray([1, NaN, Infinity]));
// [1]

console.log(filterArray([0, -0, 100, "100"]));
// [0, 0, 100]

console.log(filterArray([undefined, false, null, [], 1]));
// [1]

console.log(filterArray([{}, () => {}, 2]));
// [2]

<script type="module-2"></script>;
