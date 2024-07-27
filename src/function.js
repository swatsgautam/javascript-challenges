function getCelsius(fahrenheit){
    const celsius = ((fahrenheit - 31) * 5) / 9;
    console.log(celsius)
    return Math.round(celsius);
}

const celsiusValue = getCelsius(98);
document.getElementById('getCelsius').innerHTML = `The Temperature is ${celsiusValue} \xB0C`;


//Min Max 

const minMax = (arr) =>{
    const min = Math.min(...arr);
    const max = Math.max(...arr);
    return {
        min, max,
    };
}

console.log(minMax([2,10,4,5,9,22,1,0]));
const minMaxVal = minMax([2,10,4,5,9,22,1,0]);
console.log(minMaxVal.min, minMaxVal.max)
document.getElementById('minMaxVal').innerHTML = `{min:${minMaxVal.min}, max:${minMaxVal.max}}`;

//IIFE

((length,width)=>{
    const areaOfRectangle = length * width;
    console.log(`The area of a rectangle with a length of ${10} and a width of ${5} is ${areaOfRectangle}. `);
    document.getElementById('areaOfRect').innerHTML = `The area of a rectangle with a length of ${10} and a width of ${5} is ${areaOfRectangle}. `
    return areaOfRectangle;

})
(10,5);