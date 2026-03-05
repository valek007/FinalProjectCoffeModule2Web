export function readBody(req) {
     let body = [];

     const newPromise = new Promise((res, rej) => {
              req.on('data', (chunk) => {
             // Собираем байты в массив
             body.push(chunk);
           });

       req.on('end', () => {
      // Склеиваем байты и превращаем в строку
      try{
        const parsedBody = Buffer.concat(body);

        const userData = JSON.parse(parsedBody);

        res(userData)
        console.log("Получен юзер:", userData);
      } catch (err){
        console.log(err);
        rej(err)
      }
     });
     })

     return newPromise

}