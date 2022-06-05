class Calculator{
	constructor(previousOperandText,currentOperandText){
		this.previousOperandText = previousOperandText;
		this.currentOperandText = currentOperandText;
		this.clear();

	}
	clear(){
		this.currentOperand1 = '';
		this.previousOperand = '';
		this.operation = undefined;
	}

	delete(){

	}

	appendNumber(number){
		this.currentOperand1 = number;
	}

	chooseOperation(operation){

	}

	compute(){

	}

	updateDisplay(){
		this.currentOperandText.innerText = this.currentOperand1
	}

}

const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons =document.querySelectorAll('[data-operation]')
const equalsButtons = document.querySelector('[data-equals]');
const deleteButton = document.querySelector('[data-delete]');
const allClearButton = document.querySelector('[data-all-clear]')
const previousOperandText = document.querySelector('[data-prev-op]');
const currentOperandText = document.querySelector('[data-current-op]')

const calculator = new Calculator(previousOperandText, currentOperandText);

numberButtons.forEach(button =>{ 
	button.addEventListener('click',() =>
	{
		calculator.appendNumber(button.innerText) 
		calculator.updateDisplay()
	})
})