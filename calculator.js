//create functions for each operation: add, subtract, multiply and divide 

//helper functions
function add(num1, num2){
    return num1 + num2
  }
  
  function subtract(num1, num2){
    return num1 - num2
  }
  
  function multiply(num1, num2){
    return num1 * num2
  }
  function divide(num1, num2){
    return num1 / num2
  }
  
  //create a function named operate that takes in 3 parameters: 2 numbers and the operation to be performed 
  function operator(num1, num2, operator){
    if(operator === 'add'){
      return add(num1, num2)
    }
    else if(operator === 'subtract'){
      return subtract(num1, num2)
    }
    else if(operator === 'multiply'){
      return multiply(num1, num2)
    }
    else if(operator === 'divide'){
      return divide(num1, num2)
    }
    else {
      return 'error operator not recognized'
    }
  }
  let num1 = 0
  let num2 = 0
  let operatorButtonVal = ''

  function equalsClicked(){
    num1 = document.querySelector ('#num1').value
    num2 = document.querySelector ('#num2').value

//Personal notes 
//The parseInt function converts its first argument to a string, parses that string, then returns an integer or NaN.
//Parsing means analyzing and converting a program into an internal format that a runtime environment can actually run. 
  num1 = parseInt(num1)
  num2 = parseInt(num2)
  
//Button Value Property 
//https://www.w3schools.com/jsref/prop_pushbutton_value.asp
  operatorButtonVal = document.querySelector ('#operator').value

  const results = document.getElementById('result-num')

  const numResult = operator(num1,num2,operatorButtonVal)

  results.textContent = numResult

}

equalsClicked()