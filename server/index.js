import { colorLog } from './modules/logger.js';
import 'dotenv/config';
import express from 'express'
import cors from 'cors'
import { addHeadersMiddleWare } from './modules/addHeaders.js';
import { usersRouter } from './routes/users.js';

let todos = [
   {
      id:1,
      text: 'Помыть посуду',
      done: false
   },
      {
      id:2,
      text: 'Сделать домашку',
      done: true
   }
]

// обрабатыавет боди
const bodyJsonMiddleWare = express.json({
  type: () => true
})

const app = express()
app.use(bodyJsonMiddleWare)
app.use(express.urlencoded({ extended: true })); 
app.use(addHeadersMiddleWare)

const PORT = process.env.PORT

app.get('/', (req, res) => {
   // res.status(200).json({ message: 'Home page' });

   res.status(200).send(JSON.stringify({ message: 'Home page' }))
});

app.get('/todos', (req, res) => {
   console.log('query params', req.query);

   let data = todos
  
   const limit = req.query.limit
   const page = req.query.page

   if(limit) {
      data = todos.slice(limit - 1 , 1)
   }

   res.status(200).json({ 
      message: 'success',
      data
    });
});

app.get('/todos/:id', (req, res) => {
   console.log('params = ', req.params);

  const todoId = req.params.id

  const todo = todos.find(user => user.id === Number(todoId))

  if(user){
     res.status(200).json({ 
      message: 'success',
      data: todo
    });
  } else {
    res.status(404).json({ 
      message: 'User not found',
    });
  }
});

app.post('/todos', (req, res) => {
    const todo = req.body

    todo.id = Date.now()

    todos.push(todo)
  
    res.json({message: 'Todo added to list'})}
 )

 app.put('/todos/:id', (req, res) => {
   const todoId = req.params.id
    const todo = req.body


    const todoIndex = todos.findIndex(todo => todo.id === Number(todoId))

    todos.splice(todoIndex, 1, todo)

    res.json({
      message: 'Todo changes',
      data: todos
   })}
 )

  app.delete('/todos/:id', (req, res) => {
    const todoId = req.params.id

    todos = todos.filter(todo => todo.id !== Number(todoId))

    res.json({
      message: 'Todo removed',
      data: todos
   })}
 )

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











