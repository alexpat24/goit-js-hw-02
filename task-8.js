function reduceArray(array) {
  "use strict";
  let total = 0;
  // Write code under this line

  for (const argument of array) {
    total += argument;
  }
  array.length;
  return total;
}

console.log(reduceArray([1, 2, 3]));
// 6

//console.log(reduceArray([-2, 0, 2]));
// 0

//console.log(reduceArray([1, 2, 2.5]));
// 5.5

<script type="module-2"></script>;
