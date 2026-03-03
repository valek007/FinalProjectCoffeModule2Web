export async function readFile(filePath) {
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

// const readFilePromise = promisify(fs.readFile);

// const data = fs.readFileSync(getPath('./files/data.txt'), 'utf-8');

// fs.readFile(getPath('./files/data.txt'), 'utf8', (err, data) => {
//      if (err) return;

//      console.log(data);
//   }
// );

process.on('unhandledRejection', (reason) => {
   console.error('Unhandled Promise:', reason.message);
});

process.on('uncaughtException', (err) => {
    console.error('CRITICAL ERROR:', err);
   // записать лог и перезапустить процесс
});