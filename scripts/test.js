const btn = document.getElementById('get-btn')

btn.addEventListener('click', () => {
    sendData()
})

async function getData() {
    const resp = await fetch('http://localhost:3000/users?page=1&limit=10')
    console.log(resp);

    const data = await resp.json()
    console.log(data);
}

async function sendData() {
    const body = {
        name: 'Alice',
        age: 25
    }
    const resp = await fetch('http://localhost:3000/users', {
        method: 'POST',
        body: JSON.stringify(body)
    })
    console.log(resp);

    const data = await resp.json()
    console.log(data);
}