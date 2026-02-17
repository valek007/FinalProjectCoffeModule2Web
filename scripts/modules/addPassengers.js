function getById(id){
  return document.getElementById(id)
}

const minusBtn = getById('minus-btn')
const plusBtn = getById('plus-btn')
const passengersCounter = getById('passenger-count')
let counter = 1

minusBtn.addEventListener('click', () => changeCount(Operands.MINUS))

plusBtn.addEventListener('click', () => changeCount(Operands.PLUS))

const Operands = {
    PLUS: '+',
    MINUS: '-'
}

function changeCount(operand){
  if(operand === Operands.PLUS){
    counter += 1
    } else {
        if(counter === 1) return
        
        counter -= 1
    }

    passengersCounter.textContent = counter
}

export function getPassengersCounter(){
    return counter
}