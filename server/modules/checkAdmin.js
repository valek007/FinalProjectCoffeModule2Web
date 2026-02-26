import { colorLog } from './logger.js';
const [nodePath, serverPAth, adminName] = process.argv

const admins = [
  'Alice',
  'Max',
  'Jack'
]

export function checkAdmin(){
    if(!admins.includes(adminName)){
         colorLog('Сервер запустил недопустимый пользователь', 'red')

         process.exit(0)
     } else {
       colorLog('Доступ разрешен', 'green')
      }
}