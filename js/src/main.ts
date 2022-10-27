const inputFirstNumber = document.getElementById('inputFirstNumber') as HTMLInputElement
const inputSecondNumber = document.getElementById('inputSecondNumber') as HTMLInputElement
const output = document.getElementById('output') as HTMLElement;
const plusButton = document.getElementById('plus')!
const minusButton = document.getElementById('minus')!
const multiplyButton = document.getElementById('multiply')!
const devideButton = document.getElementById('devide')!

let firstValue:number = 0;
let secondValue: number = 0;

inputFirstNumber.value = firstValue.toString()
inputSecondNumber.value = firstValue.toString()



inputFirstNumber.addEventListener('change', (e) => {
    const target = e.target  as HTMLInputElement;
    firstValue = target.valueAsNumber
})
inputSecondNumber.addEventListener('change', (e) => {
    const target = e.target  as HTMLInputElement;
    secondValue = target.valueAsNumber
})

const plus = (first: number, second: number ) => {
    output.innerText = (first + second).toString()
}
const minus = (first: number, second: number ) => {
    output.innerText = (first - second).toString()
}
const multiply = (first: number, second: number ) => {
    output.innerText = (first * second).toString()
}
const devide = (first: number, second: number ) => {
    output.innerText = (first / second).toString()
}


plusButton.addEventListener('click',() => plus(firstValue,secondValue) )
minusButton.addEventListener('click',() => minus(firstValue,secondValue) )
multiplyButton.addEventListener('click',() => multiply(firstValue,secondValue) )
devideButton.addEventListener('click',() => devide(firstValue,secondValue) )