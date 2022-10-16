"use strict";

const arr = [1, 2, 3, 6, 8];

/* arr[99] = 0;

console.log(arr.length);

console.log(arr);

arr.pop();

arr.push(10);
 */
arr.forEach(function(item, i, arr) {
    console.log(`${i} :${item} внутри массива ${arr}`)
});

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

for (let value of arr) {
    console.log(value);
}