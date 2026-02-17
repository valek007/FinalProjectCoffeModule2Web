const months = [
    'Январь',
    'Февраль',
    'Март',
    'Апрель',
    'Май',
    'Июнь',
    'Июль',
    'Август',
    'Сентябрь',
    'Октябрь',
    'Ноябрь',
    'Декабрь',
]
const daysOfWeek = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб','Вс']

function getById(id){
  return document.getElementById(id)
}

let date = new Date()

let curMonth = {
    month: date.getMonth(),
    year: date.getFullYear()
}
let nextMonth = {
    month: date.getMonth() + 1,
    year: date.getFullYear()
}

function showMonth({ year, month }) {
    const calendar = document.createElement('div')
    calendar.classList.add('days')
    calendar.id = 'days'

    const monthTitle = document.createElement('div')
    monthTitle.classList.add('month-title')
    monthTitle.textContent = `${months[month]} ${year}`


    let firstDayOfMonth = new Date(year, month, 7).getDay()
    let lastDayOfMonth = new Date(year, month+1, 0).getDate()
   
    for(let i = 1; i <= lastDayOfMonth; i+=1){
        // добавление предыдущих дней месяца
        if(i === 1){
          for(let j = 0; j < firstDayOfMonth; j+=1){
            let day = document.createElement('div')
            day.classList.add('day-title')
            calendar.append(day)
          }
        }

        // актуалььные дни
        let day = document.createElement('div')
        day.textContent = i
        day.classList.add('day-title')

        // привыязываю функцию клика и покраски
        day.dataset.date = new Date(year, month, i).toLocaleDateString()
        day.addEventListener('click', ()=>{
            paintDay(day)
        })

        allDays.push(day)
        calendar.append(day)

        // добавление дней следующего месяца
        if(i === lastDayOfMonth){
            let remainDays = new Date(year, month, i).getDay()
   
            for(remainDays; remainDays < 7; remainDays+=1){
              let day = document.createElement('div')
              day.classList.add('day-title', 'inactive')
              calendar.append(day)
            }
        }
    }

    const monthBlock = document.createElement('div')
    monthBlock.classList.add('month')

    monthBlock.append(monthTitle, createDaysTitle(), calendar)

    getById('month-box').append(monthBlock)
}

let counterClick = 0
let allDays = []
let clickedDays = []
let beetweenDays = []

function paintDay(day){
    // обнуление выбранных дней если уже естть выбранные
    if(counterClick > 1){
       resetPaintedDays()
    }
    // Запрет выбора дня меньше чем текущий
    if(clickedDays.length && day.dataset.date < clickedDays[0].dataset.date){
        return
    }

    clickedDays.push(day)

    if(counterClick === 1){
      let first = allDays.indexOf(clickedDays[0])
      let last = allDays.indexOf(clickedDays[1])
      beetweenDays = allDays.slice(first+1, last)
      beetweenDays.forEach(item => item.style.backgroundColor = 'pink')
    }

    day.style.backgroundColor = 'red'
    counterClick+=1
}

function createDaysTitle(){
    const daysTitleBlock = document.createElement('div')
    daysTitleBlock.classList.add('daysTitle')

    daysOfWeek.forEach(item => {
        let day = document.createElement('div')
        day.textContent = item
        day.classList.add('day-title')
        daysTitleBlock.append(day)
    })

    return daysTitleBlock
}

function showNextMonth() {
    if(curMonth.month === 11){
        curMonth.month = 0
        curMonth.year += 1
    } else {
        curMonth.month +=1
    }

   if(nextMonth.month === 11){
        nextMonth.month = 0
        nextMonth.year += 1
    } else {
        nextMonth.month +=1
    }
    
    clearBlock()
    createMonthes()
}
function showPrevMonth() {
    if(curMonth.month === 0){
        curMonth.month = 11
        curMonth.year -= 1
    } else {
        curMonth.month -= 1
    }

    if(nextMonth.month === 0){
        nextMonth.month = 11
        nextMonth.year -=1
    } else {
        nextMonth.month-=1
    }
    clearBlock()
    createMonthes()
}

function createMonthes() {
    showMonth(curMonth)
    showMonth(nextMonth)
}

export function createCalendar(){
    getById('next').addEventListener('click',showNextMonth)
    getById('prev').addEventListener('click',showPrevMonth)
 
    createMonthes()
}

function clearBlock(){
    getById('month-box').innerHTML = ''
}

let showCalendar = false

function toggleCalendar(){
    const calendar = getById('calendar')
    if(showCalendar){
        calendar.style.display = 'none'
    }else{
        calendar.style.display = 'block'
    }

    showCalendar = !showCalendar
}

getById('hide').addEventListener('click', toggleCalendar)

const resetBtn = getById('reset')
const applyBtn = getById('apply')
const returnSpan = getById('return')
const departSpan = getById('depart')

function resetPaintedDays(withSpans) {
      counterClick = 0
      clickedDays.forEach(item => item.style.backgroundColor = 'inherit')
      clickedDays = []
      beetweenDays.forEach(item => item.style.backgroundColor = 'inherit')
      beetweenDays = []

      if(withSpans){
        returnSpan.textContent = 'Return'
        departSpan.textContent = 'Depart'
      }
}

applyBtn.addEventListener('click', () => {
    if(clickedDays.length !== 2){
       return
    }

    const [departDate, returnDate] = clickedDays

    returnSpan.textContent = returnDate.dataset.date
    departSpan.textContent = departDate.dataset.date

   toggleCalendar()
})

resetBtn.addEventListener('click', () => {
    resetPaintedDays(true)
})

function validateDates() {
    if(!clickedDays.length) return null

    const dates = clickedDays.map(div => div?.dataset.date || null)

    if(dates.length === 2){
        return dates
    } else {
        return null
    }
}

export function getDates(){
    return validateDates()
}



// export default function calendar(){
//     return {
//         createCalendar,
//         getDates
//     }
// }