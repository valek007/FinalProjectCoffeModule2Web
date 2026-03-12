import 'dotenv/config';
import express from 'express'
import cors from 'cors'
import { usersRouter } from '#routes/users';
import { requestTime } from '#middleWare/requestTime';
import { errorHandler } from '#middleWare/errorHandler';
import { todosRouter } from '#routes/todos';

const PORT = process.env.PORT

// обрабатыавет боди
const bodyJsonMiddleWare = express.json({
  type: () => true
})

const app = express()

app.use(cors())
app.use(requestTime)
app.use(bodyJsonMiddleWare)
app.use(express.urlencoded({ extended: true })); 
app.use(express.static('./server/dist'))
app.use('/users', usersRouter)
app.use('/todos', todosRouter)

app.get('/',async (req, res) => {
  res.sendFile('./index.html', { root: './server/dist' } );
})

// app.get('/', (req, res) => {
//    // res.status(200).json({ message: 'Home page' });

//    // throw new Error("my custom error");
   

//    console.log('in rout', req.url);
//    console.log(req.requestTime);

//    res.status(200).send(JSON.stringify({ message: 'Home page' }))
// });


app.use(errorHandler);

app.listen(PORT, () => {
   console.log(`Server started on port ${PORT}`);
});


// const server = http.createServer((req, res) => {
//         addHeaders(res, req)

//         const { pathName } = getURL(req)

//         res.statusCode = 200;

//         switch (pathName) {
//           case '/':
//                res.end(JSON.stringify('home page '));
//                break;
//           case '/users':
//                usersRoute(req, res)

//                break;
//           case '/home':
//                res.end(JSON.stringify('home page '));

//                break;
//           default:
//                res.statusCode = 404;
//                res.end(JSON.stringify('page not found'));
//                break;
//         }
// });

// server.listen(PORT, () => {
//     console.log(`server work on port ${PORT}`);
// })












