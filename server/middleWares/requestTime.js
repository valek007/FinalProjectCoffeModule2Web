export function requestTime(req, res, next) {
     req.requestTime = Date.now(); // Обогащаем объект запроса

     next(); // Передаем управление дальше!
}; 