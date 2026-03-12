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

function findTodo(id){
      const todoId = id

      const todo = todos.find(user => user.id === Number(todoId))

      return todo
}

function createTodo(todo){
    todo.id = Date.now()

    todos.push(todo)

    return true
}

export const todoService = {
    findTodo,
    createTodo,
    todos
}

// export default todoService


