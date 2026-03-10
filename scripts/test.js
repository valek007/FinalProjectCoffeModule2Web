const btn = document.getElementById('get-btn')

btn.addEventListener('click', () => {
    getData()
})

async function getData() {
    const resp = await fetch('http://localhost:3000/todos')

    const data = await resp.json()
    console.log(data);
}

async function sendData() {
    const body = {
        text: 'Покушать',
        done: false
    }

    const resp = await fetch('http://localhost:3000/todos', {
        method: 'POST',
        body: JSON.stringify(body)
    })

    const data = await resp.json()
    console.log(data);
}

async function updateTodo() {
    const body = {
        text: 'Помыть посуду',
        done: true
    }

    const resp = await fetch('http://localhost:3000/todos/1', {
        method: 'PUT',
        body: JSON.stringify(body)
    })

    const data = await resp.json()
    console.log(data);
}

async function deleteTodo(id) {
    const resp = await fetch(`http://localhost:3000/todos/${id}`, {
        method: 'DELETE',
    })

    const data = await resp.json()
    console.log(data);
}