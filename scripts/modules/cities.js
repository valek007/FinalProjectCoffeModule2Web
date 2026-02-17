const cities = [
    'Milan',
    'Moscow',
    'Astana',
    'Abu-Dabi',
    'Almaty',
    'New-York'
]

const inputCity = getById('city-input')
const list = getById('list')
let chosenCity = ''

inputCity.addEventListener('input', (e) => {
    clearList()

    createlist(e.target.value)
})

function createlist(text){
    const fragment = document.createDocumentFragment()

    const findCities = cities.filter(item => {
        const city = item.toLowerCase()
        const lowText = text.toLowerCase()

        if(city.startsWith(lowText) && text){
            return item
        }
    })

    findCities.forEach(city => {
      const li = document.createElement('li')
      li.textContent = city

      li.addEventListener('click', (e) => {
        chosenCity = e.target.textContent
        inputCity.value = chosenCity

        clearList()
      })

      fragment.append(li)
    })

    list.append(fragment)
}

const clearBtn = getById('clear-city-input')
clearBtn.addEventListener('click', ()=> {
    chosenCity = ''
    inputCity.value = ''
    clearList()
})

function getById(id){
  return document.getElementById(id)
}

function clearList(){
    list.innerHTML = ''
}

export function getCity(){
    return [chosenCity]
}
