import { createCalendar as generateCalendar, getDates } from './modules/calenndar.js'
import { getCity } from './modules/cities.js'
import { getPassengersCounter} from './modules/addPassengers.js'
import { showToast } from './modules/toast.js'

generateCalendar()

function getById(id){
  return document.getElementById(id)
}

const sendBtn = getById('send-form')


sendBtn.addEventListener('click', () => {
   validate()
})

function validate(){
    const cityes = getCity()
    const dates = getDates()

    if(!cityes[0]) {
       showToast({
          type: 'error',
          title: 'Error',
          text: 'Add cities'
        })
         return
    }
    if(!dates) {
        showToast({
          type: 'error',
          title: 'Error',
          text: 'Add dates'
        })
        return
    }

    const body = {
      dates: {
        depart:  dates[0],
        arrive:  dates[1]
      },
      passengers: getPassengersCounter(),
      cities: {
        depart: cityes[0],
        arrive: ''
     }
}

      showToast({
          type: 'success',
          title: 'success',
          text: 'Get your tickets'
        })

fetch('localhost:3000', {
    method: 'POST',
    body: body
})
}

const questinBoxes = document.querySelectorAll('.faq__question-box')

// раскрытие блоков с воопросами
questinBoxes.forEach(item => {
  item.addEventListener('click', () => {
    item.nextElementSibling.classList.toggle('faq__answer--visible')
    item.children[1].classList.toggle('faq__image--clicked')
  })
})


const burgerBtn = document.querySelector('.header__burger-menu')
const menuDiv = document.querySelector('.header__menu')

burgerBtn.addEventListener('click', () => {
     menuDiv.classList.toggle('header__menu--visible')
})

const menuCloseBtn = document.getElementById('menu-close-btn')
menuCloseBtn.addEventListener('click', () => {
  menuDiv.classList.toggle('header__menu--visible')
})

document.body.addEventListener('click', (e) => {
   if(e.target.classList.contains('header__burger-menu') 
    || e.target.classList.contains('header__menu-btn')
    || e.target.classList.contains('header__list-item')
  ) return 

   menuDiv.classList.remove('header__menu--visible')
})


