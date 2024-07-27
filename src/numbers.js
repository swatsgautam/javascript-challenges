//declare x and y 

const x = Math.floor(Math.random() * 100 +1);
const y = Math.floor(Math.random() * 50 +1);

//sum
const sum = x+y;
console.log(sum);
document.getElementById('arithmaticSum').innerHTML = sum;

//literal Sum
const sumOutput = `${x} + ${y} = ${sum}`;
console.log(sumOutput)
document.getElementById('literalExp').innerHTML = sumOutput;


//Difference
const diff = x-y;
console.log(diff);
document.getElementById('arithmaticdiff').innerHTML = diff;

//literal Difference
const diffOutput = `${x} - ${y} = ${diff}`;
console.log(diffOutput)
document.getElementById('literalExpDiff').innerHTML = diffOutput;

//Product
const prod = x * y;
console.log(prod);
document.getElementById('arithmaticProd').innerHTML = prod;

//literal Product
const prodOutput = `${x} * ${y} = ${prod}`;
console.log(prodOutput)
document.getElementById('literalExpProd').innerHTML = prodOutput;


//Quotient
const quot = x / y;
console.log(quot);
document.getElementById('arithmaticQuot').innerHTML = quot;

//literal Quotient
const quotOutput = `${x} / ${y} = ${quot}`;
console.log(quotOutput)
document.getElementById('literalExpQuot').innerHTML = quotOutput;

//Remainder
const remain = x % y;
console.log(remain);
document.getElementById('arithmaticRemainder').innerHTML = remain;

//literal Remainder
const remainOutput = `${x} % ${y} = ${remain}`;
console.log(remainOutput)
document.getElementById('literalExpRemainder').innerHTML = remainOutput;

