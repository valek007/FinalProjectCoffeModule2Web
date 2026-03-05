export function addHeaders(res, req){
      res.setHeader('Content-Type', 'application/json');
     // Говорим: "Всё прошло успешно"
     // Разрешаем доступ с любого домена
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE, PATCH');
      res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

      if (req.method === 'OPTIONS') {
          res.statusCode = 204; // No Content
          res.end();
           
          return;
      }
}