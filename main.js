class Calculator{
	constructor(previousOperand,currentOperand){
		this.previousOperand = previousOperand;
		this.currentOperand = currentOperand;

	}
	clear(){
		this.currentOperand = '';
		this.previousOperand = '';
		this.operation = undefined;
	}

	delete(){

	}

	appendNumber(number){

	}

	chooseOperation(operation){

	}

	computer(){

	}

	updateDisplay(){

	}

}

const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons =document.querySelectorAll('[data-operation]')
const equalsButtons = document.querySelector('[data-equals]');
const deleteButton = document.querySelector('[data-delete]');
const allClearButton = document.querySelector('[data-all-clear]')
const previousOperand = document.querySelector('[data-prev-op]');
const currentOperand = document.querySelector('[data-current-op]')

const calculator = new Calculator(previousOperand, currentOperand);

numberButtons .forEach(button = >{button.addEventListener('click',() =>
	{
		calculator.appendNumber(button.innerText) 
		calculator.updateDisplay()
	})
})