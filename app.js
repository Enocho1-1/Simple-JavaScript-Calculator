//Calculator constructor 
class Calculator{
  constructor(inputOne, inputTwo){
    this.inputOne = inputOne
    this.inputTwo = inputTwo
  }


  operation(operator){
    let output = ''
      switch(operator){
        case '1':
          output = parseInt(this.inputOne) + parseInt(this.inputTwo)
          break
        case '2':
          output = parseInt(this.inputOne) - parseInt(this.inputTwo)
          break
        case '3':
          output= parseInt(this.inputOne) * parseInt(this.inputTwo)
          break 
        case '4':
          output = parseInt(this.inputOne) / parseInt(this.inputTwo)
          break
      }
      
      document.getElementById('result').value = output 
  }

  error(message){
    const parent = document.querySelector('form'),
          input = document.querySelector('div.input-group')

    switch(this.inputOne && this.inputTwo){
      case '':
      const errorDiv = document.createElement('div')
      errorDiv.className = 'alert alert-danger'
      errorDiv.appendChild(document.createTextNode(message))

      parent.insertBefore(errorDiv, input)
      break
    }

    setTimeout(clearError, 2000)
  }

}

const clearError = function() {
  document.querySelector('div.alert').style.display ='none'
  document.getElementById('loadGif').style.display = 'none'
}

const clearInput = function() {
  const inputOne = document.getElementById('inputOne').value = '',
        inputTwo = document.getElementById('inputTwo').value = '';
}

//Form Event Listener 
document.querySelector('form').addEventListener('submit', e =>{
  
  document.getElementById('loadGif').style.display = 'block'
  document.querySelector('div.resultDiv').style.display = 'none'

  setTimeout(calculatedResults, 2000)
  e.preventDefault()
})


 const calculatedResults = function () {
  let inputOne = document.getElementById('inputOne').value,
        inputTwo = document.getElementById('inputTwo').value,
        operator = document.getElementById('inputGroupSelect01').value;


  const calculator = new Calculator(inputOne, inputTwo)

  switch(inputOne || inputTwo){
    case '':
     calculator.error('Please, check your numbers')
      break
    default:
      calculator.operation(operator)
      clearInput()
      document.querySelector('div.resultDiv').style.display = 'block'
      document.getElementById('loadGif').style.display = 'none'
      
  }
 
}


