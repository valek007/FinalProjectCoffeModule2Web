console.log('Введите ваш текст,чтобы закончить введите exit или нажмите CTRL+C: ');
import process from 'process';
import fs from 'fs'
let input  = process.stdin
let output  = process.stdout
import { getPath } from './filePath.js';

//удаление при следующем запуске
// fs.access(getPath('./files/text.txt'),err=>{
//   if(!err){
//     fs.unlink(getPath('./files/text.txt'))
//   }
// })

//проверка ввода
input.on('data',data=>{
   writeData(data)
})

//запись ввода в файл
function writeData(data){
  if(data.toString().trim()=='exit'){
    process.exit()
  }

  fs.appendFile(getPath('./files/text.txt'), data, err=>{
    if(err) throw err})
}

//проверка на выход через клавиши
process.on('SIGINT',() => {
    process.exit()
})

//вывод прощания 
process.on('exit', () => { output.write('bye bye') })