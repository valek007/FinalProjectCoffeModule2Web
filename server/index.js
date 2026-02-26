import { colorLog } from './modules/logger.js';
import 'dotenv/config';
import { promisify } from 'util'
// import fs from 'fs'
// const {PI, add } = require('./modules/math.js')
import { PI, add } from "./modules/math.js";
import os from 'os';
import { getPath } from './modules/filePath.js'
import { log } from 'console';
import fs from 'fs/promises'
import { ValidationError } from './modules/customErrors.js';
import {checkAdmin} from './modules/checkAdmin.js'

process.on('unhandledRejection', (reason) => {
   console.error('Unhandled Promise:', reason.message);
});

process.on('uncaughtException', (err) => {
    console.error('CRITICAL ERROR:', err);
   // записать лог и перезапустить процесс
});

checkAdmin()

// const readFilePromise = promisify(fs.readFile);

// const data = fs.readFileSync(getPath('./files/data.txt'), 'utf-8');

// fs.readFile(getPath('./files/data.txt'), 'utf8', (err, data) => {
//      if (err) return;

//      console.log(data);
//   }
// );

fs.readFile(getPath('./files/data2.txt'), 'utf-8')
.then(data => {
  console.log(data);
})


async function readFile(filePath) {
  try {
     let data = await fs.readFile(getPath(filePath), 'utf-8')

     if(!data){
       throw new ValidationError('no data')
     }

     colorLog(data, 'green')
  } catch(err) {
     colorLog(err.message, 'red')
     colorLog(err.name, 'red')
     colorLog(err.statusCode, 'red')
  }
}
readFile('./files/data.txt')


console.log('Server is working');

console.log('after data');






