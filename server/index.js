import { colorLog } from './modules/logger.js';
import 'dotenv/config';
 
// const {PI, add } = require('./modules/math.js')
import { PI, add } from "./modules/math.js";
import os from 'os';
import path from 'path';
import { fileURLToPath } from 'url';

console.log(import.meta.url);

const __filename = fileURLToPath(import.meta.url);

console.log(__filename);
const __dirname = path.dirname(__filename);

console.log(__dirname);

const fullPath = path.join('users', 'documents', 'file.txt')


console.log(fullPath);
console.log(os.platform());
console.log(PI);
console.log(add(3, 4));
console.log('Hi from node');

console.log(process.env.PORT)
console.log(process.env.ADMIN_NAME)
colorLog('Hello world!')
colorLog('Error!', 'red')

