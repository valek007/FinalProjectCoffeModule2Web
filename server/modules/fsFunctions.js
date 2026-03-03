import fsPromises from 'fs/promises';
import fs from 'fs'
import { getPath } from './filePath.js';
import path from 'node:path'
import { colorLog } from './logger.js';

export async function createFile(fileName, content){
  try{
   await fsPromises.writeFile(getPath(fileName), content)

   colorLog('File created', 'green')
  }catch(err){
    console.log(err);
  }
}

export async function readDirSimple(dirName){
  try{
   const files = await fsPromises.readdir(getPath(dirName))

   colorLog(files, 'green')
  }catch(err){
    console.log(err);
  }
}

export async function removeFile(path) {
   try {
        await fsPromises.unlink(getPath(path));
        console.log(`Файл ${path} удален.`);
    } catch (error) {
    if (error.code === 'ENOENT') {
          console.log("Файла и так нет, ничего страшного.");
     } else {
       console.log(err);
     }
}
}

export async function addUser(user) {
       const DB_PATH = getPath('./files/db.json')
      // 1. Читаем строку
        const rawData = await fsPromises.readFile(DB_PATH, 'utf-8');
       // 2. Превращаем в массив JS
       const users = JSON.parse(rawData);
       // 3. Меняем данные
       users.push(user);
       // 4. Превращаем обратно в строку и записываем
       // null, 2 — для красивых отступов
       await fsPromises.writeFile(DB_PATH, JSON.stringify(users, null, 2));

      colorLog('User created', 'green')
}


export function getStream(fileName) {
    const stream = fs.createReadStream(getPath(fileName));

    stream.on('data', (chunk) => {
        console.log(`Получил кусок размером ${chunk.length} байт`);
        // Можем сразу отправлять этот кусок клиенту, не храня весь файл в памяти
    });

    stream.on('end', () => console.log('Чтение завершено'));
}

export function copyDir(dirName, copyDirName) {
    fsPromises.cp( getPath(dirName), getPath(copyDirName), { recursive: true });
}

export async function removeDir(dirName) {
    await fsPromises.rm( getPath(dirName), { recursive: true });

    colorLog(`Directory ${dirName} deleted`, 'green')
}

export async function checkFile(fileName) {
  const stats = await fsPromises.stat(getPath(fileName), { throwIfNoEntry: false });

  console.log( 'Данные файла', stats );
  console.log('Явяется ли файл папкой', stats.isDirectory());
  console.log('Размер файла', stats.size);
}


export function copyFile(fileName, copyFileName) {
    const stream = fs.createReadStream(getPath(fileName));

    const writeableStream = fs.createWriteStream(getPath(copyFileName));

    stream.pipe(writeableStream);

    stream.on('end', () => console.log('Запись файла завершено'));
}

export function readDir(dirName) {
    fs.readdir(getPath(dirName),{ withFileTypes: true }, (err,data) => {
     if(err){ throw err }

    data.forEach(item=>{
      if(item.isFile()){
        let name = item.name.split('.')[0]
        let ext = path.extname(item.name)
        let index =  path.resolve(getPath(dirName),`./${item.name}`)

        fs.stat(index, (err,stats) => {
          console.log('Имя файла: ' + name + '; Расширение : '+ ext + '; Размер : ' + stats.size +' байт;');
        })
      }
    })
})
}


