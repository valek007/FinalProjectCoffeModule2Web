import { colorLog } from './modules/logger.js';
import 'dotenv/config';
import http from 'http'
import { copyFile } from './modules/fsFunctions.js';
import { createCss } from './modules/createCss.js';
import { addHeaders } from './modules/addHeaders.js';
import { getURL } from './modules/urlData.js';
import { usersRoute } from './routes/users.js';

const PORT = process.env.PORT

const server = http.createServer((req, res) => {
        addHeaders(res, req)

        const { pathName } = getURL(req)

        res.statusCode = 200;

        switch (pathName) {
          case '/':
               res.end(JSON.stringify('home page '));
               break;
          case '/users':
               usersRoute(req, res)

               break;
          case '/home':
               res.end(JSON.stringify('home page '));

               break;
          default:
               res.statusCode = 404;
               res.end(JSON.stringify('page not found'));
               break;
        }
});

server.listen(PORT, () => {
    console.log(`server work on port ${PORT}`);
})











