let myNumber = 6;
let myString = 'Alice';
let myBoolean = true;
let myArray = [];
const coordinates = [4, 'alice'];
let myArra2 = [];
myArra2.push(4);
myArra2.push(7);
function plusAB(a, b) {
    return a + b;
}
function minusAB(a, b) {
    return a - b;
}
function logNumber(a, b) {
    if (b) {
        console.log(a + b);
    }
    console.log(a);
}
async function returnPromise(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    }
    catch (err) {
        err.message;
    }
}
const multiply = (x, y) => x * y;
myString.toLowerCase();
myNumber = plusAB(7, 8);
logNumber(5);
minusAB(3, 1);
console.log(logNumber(6, 8));
let admin = {
    name: 'Petr',
    age: 30,
    access: 3,
};
admin.name = 'Aizhan';
let id = 0;
let email;
if (email) {
    email.toUpperCase();
}
id = 87;
id = 'user87';
id = false;
// логическое или
console.log(id || myNumber);
function parseObject(data) {
    if (!data) {
        return 'data is empty';
    }
    const valuesArr = Object.values(data);
    data.email?.toLowerCase();
    data.name.toLowerCase();
    return valuesArr;
}
let status = 'success';
function handleRequest(status) {
    switch (status) {
        case 'success':
            console.log('all done');
            break;
        case 'error':
            console.log('some error');
            break;
        default:
            break;
    }
}
let url;
url = 'localhost:3000';
if (typeof url === 'string') {
    url.toLowerCase();
}
export {};
