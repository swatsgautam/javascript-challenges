const arr = [1,2,3,4,5];

arr.push(6);
arr.unshift(0);
arr.reverse();

console.log(arr);
document.getElementById('newArr').innerHTML = arr;

//combine two array and omit the repetition

const arr1 = [1,2,3,4,5];
const arr2 = [5,6,7,8,9,10];

const arr3 = arr1.slice(0,4).concat(arr2);
console.log(arr3);
document.getElementById('combineOmit').innerHTML = arr3;

const arr4 = [...arr1, ...arr2];
console.log(arr4);
arr4.splice(4,1);
console.log(arr4);
document.getElementById('spreadSplice').innerHTML = arr4;
