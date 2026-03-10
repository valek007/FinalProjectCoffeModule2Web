import express from 'express'
export const usersRouter = express.Router()

const users = [
    {
        id: 1,
        name: 'Petr',
        age: 18
    }
]

usersRouter.get('/', (req, res) => {
    res.json(users)
});

usersRouter.get('/about', (req, res) => res.json('О пользователях'));

usersRouter.post('/', (req, res) => {
    console.log(req.url);
    const newUser = req.body

    console.log(newUser);
    
    
    // newUser.id = Date.now()
    users.push(newUser)

    res.json(users)
})

usersRouter.delete('/:id', (req, res) => {
    console.log(req.params.id);

    const newUser = req.body

    console.log(newUser);
    
    res.json(users)
})
