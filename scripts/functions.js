import { example } from "./test.js";
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
const userWithAdress = {
    name: 'Alice',
    age: 25,
    street: '',
    house: 22,
    city: '',
    male: ''
};
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
const newFunc = (source, subString) => {
    return source.includes(subString);
};
class Car {
    brand;
    color;
    // Поля должны быть объявлены
    // public brand: string;
    speed = 0;
    token = 123;
    power = 200;
    // constructor(brand: string) {
    //   this.brand = brand;
    //  }
    constructor(brand, color) {
        this.brand = brand;
        this.color = color;
    }
    accelerate(speed) {
        this.speed += speed;
        console.log(this.token);
    }
}
class HyperCar extends Car {
    constructor(brand, color, power) {
        super(brand, color);
        this.power = power;
    }
    accelerate(speed) {
        console.log('speed', this.speed);
        super.accelerate(speed * 2);
    }
}
const myCar = new Car('BMW', 'green');
myCar.accelerate(10);
const myHyperCar = new HyperCar('RR', 'black', 500);
class Shape {
    // Обычный метод (есть реализация)
    getColor() { return "red"; }
}
class Circle extends Shape {
    radius;
    constructor(radius) {
        super();
        this.radius = radius;
    }
    // Мы обязаны реализовать getArea
    getArea() {
        return Math.PI * this.radius ** 2;
    }
}
class CircleClone extends Shape {
    radius;
    constructor(radius) {
        super();
        this.radius = radius;
    }
    // Мы обязаны реализовать getArea
    getArea() {
        return Math.PI * this.radius ** 2;
    }
}
let myCircle = new Circle(3);
myCircle = new CircleClone(4);
class User {
    name;
    age;
    street;
    house;
    city;
    email;
    male = 'male';
    constructor(name, age, street, house, city, email) {
        this.name = name;
        this.age = age;
        this.street = street;
        this.house = house;
        this.city = city;
        this.email = email;
    }
    getEmail(newEmail) {
        this.email = newEmail;
    }
}
var OrderStatus;
(function (OrderStatus) {
    OrderStatus[OrderStatus["Created"] = 100] = "Created";
    OrderStatus[OrderStatus["Processing"] = 101] = "Processing";
    OrderStatus[OrderStatus["Shipped"] = 102] = "Shipped";
    OrderStatus[OrderStatus["Delivered"] = 103] = "Delivered"; // 3
})(OrderStatus || (OrderStatus = {}));
var Role;
(function (Role) {
    Role["Admin"] = "ADMIN";
    Role["User"] = "USER";
})(Role || (Role = {}));
let myStatus = OrderStatus.Created;
const Statuses = {
    [OrderStatus.Created]: 'Created', // 0
    [OrderStatus.Processing]: 'Processing', // 1
    [OrderStatus.Shipped]: 'Shipped', // 2
    [OrderStatus.Delivered]: 'Delivered' // 3
};
let myStatus2 = 0;
myStatus = OrderStatus.Delivered;
function wrap(val) {
    return [val];
}
const arr = wrap(5);
wrap('Alice');
// Мы говорим: T может быть чем угодно,
// НО оно обязано иметь свойство length типа number
function getLength(arg) {
    return arg.length;
}
const myLenght = {
    length: 10
};
getLength(myLenght);
function getProperty(obj, key) {
    return obj[key];
}
const user = { id: 1, name: "Alice" };
getProperty(user, 'id');
getProperty(admin, 'access');
const AnnesessaryAdmin = {
    name: 'Petr',
    age: 30,
    access: 1,
    email: ''
};
// Объект, где ключи - это Pages, а значения - PageInfo
const nav = {
    home: { title: "Home", text: '' },
    about: { title: "About Us", text: '' },
    contact: { title: "Contacts", text: '' }
    // Если забыть какой-то ключ или добавить лишний - будет ошибка
};
const customObject = {
    text: '',
    title: ''
};
// Проблема с обычным указанием типа:
// const palette: Colors = { ... }
// TS "забудет", что 'red' — это массив, а 'green' — строка.
// Решение satisfies: проверяет тип, но сохраняет конкретику
const palette = {
    red: { r: 255, g: 0, b: 0 },
    green: "#00ff00"
};
// Теперь это работает!
console.log(palette.green.toUpperCase()); // TS знает, что
// Магия здесь: возвращаемый тип "pet is Fish"
function isFish(pet) {
    return pet.swim !== undefined;
}
function move(pet) {
    if (isFish(pet)) {
        pet.swim(); // TS знает, что здесь это Fish
    }
    else {
        pet.fly(); // А здесь - Bird
    }
}
function getArea(shape) {
    switch (shape) {
        case "circle": return Math.PI;
        case "square": return 100;
        // Забыли "triangle"!
        default:
            // TS увидит, что здесь остался тип "triangle",
            // и не сможет присвоить его типу never.
            // const _exhaustiveCheck: never = shape;
            // Ошибка: Type 'string' is not assignable to type 'never'.
            return shape;
    }
}
example('');
