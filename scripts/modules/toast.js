/**
 * Вызывает тост сбоку экрана
 * 
 * @param {object} data - объект с настройками вызова.
 */
export function showToast(data){
   const toast = document.createElement('div')

   toast.classList.add('toast')

   toast.classList.add(`toast--${data.type}`)

   const title = document.createElement('p')
   const text = document.createElement('p')

   title.textContent = data.title
   text.textContent = data.text

  toast.append(title, text)

  document.body.append(toast)

  setTimeout(()=> {
    toast.remove()
  }, data.time || 3000)
}