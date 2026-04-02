import 'dotenv/config';
import express from 'express'
import cors from 'cors'
import { todosRouter } from '#routes/todos';

const PORT = process.env.PORT

// обрабатыавет боди
const bodyJsonMiddleWare = express.json({
  type: () => true
})

const app = express()

app.use(cors())
app.use(bodyJsonMiddleWare)
app.use(express.urlencoded({ extended: true })); 
app.use(express.static('./server/dist'))
app.use('/todos', todosRouter)

app.get('/',async () => {
  console.log('hello');
  // res.sendFile('./index.html', { root: './server/dist' } );
})

app.listen(PORT, () => {
   console.log(`Server started on port ${PORT}`);
});













