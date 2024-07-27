const myString = 'developer';

//using charAt()
const myNewString = myString.charAt(0).toUpperCase()+myString.substring(1);
console.log('capitalize String : ', myNewString);
document.getElementById('usingChar').innerHTML = myNewString;

//using string[index]
const usingString = myString[0].toUpperCase() + myString.substring(1);
document.getElementById('usingString').innerHTML = usingString;

//using template literal and slice
const usingLiteralSlice = `${myString[0].toUpperCase()}${myString.slice(1)}`;
document.getElementById('usingLiteralSlice').innerHTML = usingLiteralSlice;
