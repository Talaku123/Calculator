let currentNumber = ''

function additionToDisplay(value) {

 
  let resultNum = ''

    
  if (currentNumber === "0" || resultNum) {

      currentNumber = value;

  } else {

      currentNumber += value;
  }

  updateNumbers();
}


function updateNumbers() {

      const displayElement = document.getElementById('js-number-calculator');

      displayElement.textContent = currentNumber;
}

function calculateResult() {

  try {

      const result = eval(currentNumber);

      currentNumber += '\n' + result.toString();

      updateNumbers();

  } catch (error) {

      currentNumber += '\n' + "Error";

      updateNumbers();
  }

}

function clearLastElement() {

  currentNumber = currentNumber.slice(0, -1);

    if (currentNumber === '') {

      currentNumber = '';
    }
    updateNumbers();
}

function deleteNumber() {

    currentNumber = '';

    updateNumbers();
}

