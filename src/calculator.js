//using if else

function calculator(num1, num2, operator){
    let result;
    if(operator =='+'){
        result = num1 + num2;
    }
    else if(operator == '-'){
        result= num1 - num2;
    }
    else if(operator == '*'){
        result= num1 * num2;
    }
    else if(operator == '/'){
        result = num1 / num2;
    }
    else{
        result = 'Invalid Operator';
    }
    console.log(result);
    
}
document.getElementById('calAdd').innerHTML = calculator(5, 2, '+');
document.getElementById('calSub').innerHTML = calculator(5, 2, '-');
document.getElementById('calMult').innerHTML = calculator(5, 2, '*');
document.getElementById('calDiv').innerHTML = calculator(5, 2, '/');
document.getElementById('calError').innerHTML = calculator(5, 2, '&');
calculator(5, 2, '+') 
calculator(5, 2, '-') 
calculator(5, 2, '*') 
calculator(5, 2, '/') 
calculator(5, 2, '&') 

//using switch

function calculator(num1, num2, operator) {
    let result;
    switch (operator) {
      case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      case '*':
        result = num1 * num2;
        break;
      case '/':
        result = num1 / num2;
        break;
      default:
        result = 'Invalid operator';
    }
    console.log(result);
    return result;
}
document.getElementById('calAddSwitch').innerHTML = calculator(5, 2, '+');
document.getElementById('calSubSwitch').innerHTML = calculator(5, 2, '-');
document.getElementById('calMultSwitch').innerHTML = calculator(5, 2, '*');
document.getElementById('calDivSwitch').innerHTML = calculator(5, 2, '/');
document.getElementById('calErrorSwitch').innerHTML = calculator(5, 2, '&');
calculator(5, 2, '+') 
calculator(5, 2, '-') 
calculator(5, 2, '*') 
calculator(5, 2, '/')
calculator(5, 2, '&')