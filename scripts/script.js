import { createCalendar as generateCalendar, getDates } from './modules/calenndar.js'
import { getCity } from './modules/cities.js'
import { getPassengersCounter} from './modules/addPassengers.js'

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
        console.log('Введите города');
         return
    }
    if(!dates) {
        console.log('Укажите даты');
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

fetch('localhost:3000', {
    method: 'POST',
    body: body
})

console.log(body);
}




