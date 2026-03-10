import { readBody } from '../modules/readBody.js';

const users = [
    {
        id: 1,
        name: 'Petr',
        age: 18
    }
]

export async function usersRoute(req, res){
    switch (req.method) {
        case 'GET':
            res.end(JSON.stringify(users));

            break;
       case 'POST':
            const newUser = await readBody(req)

            newUser.id = Date.now()
            users.push(newUser)

           res.end(JSON.stringify({
            message: 'Success',
            data: newUser
           }));

            break;
        default:
            break;
    }
}

