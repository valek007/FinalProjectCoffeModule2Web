let myNumber = 6
let myString:string = 'Alice'
let myBoolean: boolean = true

let myArray: number[] = []
const coordinates: readonly [number, string] = [4, 'alice']
let myArra2: Array<number> = []


myArra2.push(4)
myArra2.push(7)

function plusAB(a:number, b:number):number {
   return a + b
}

function minusAB(a:number, b:number) {
   return a - b
}

function logNumber(a:number, b?: number): void {
   if (b) {
    console.log(a + b);
   }
   console.log(a);
}

async function returnPromise(url: string) :Promise<any>  {
   try {
      const response = await fetch(url)

     const data = await response.json()
     
     return data
   } catch (err){
      type ErrorType = {
         message: string
      }

      (err as { message: string }).message
   }
}

type multiplyType = (x: number, y: number) => number

const multiply: multiplyType = (x, y) =>  x * y

myString.toLowerCase()


myNumber = plusAB(7, 8)
logNumber(5)
minusAB(3, 1)
console.log(logNumber(6, 8));

interface IUser {
   name: string;
   age: number;
   email?: string;
}

type UserType = {
   name: string;
   age: number;
   email?: string;
}

type EmployeType = {
   profession: string;
   stage: number;
} & UserType

type AccessType = 1 | 2 | 3

type AdminType = {
   readonly access: AccessType
} & UserType

let admin: AdminType = {
  name: 'Petr',
  age: 30,
  access: 3,
}

admin.name = 'Aizhan'

let id: number | string | boolean = 0
let email: string | undefined

if(email){
   email.toUpperCase()
}

id = 87
id = 'user87'
id = false

// логическое или
console.log(id || myNumber);

function parseObject(data:UserType | null) {
   if(!data) {
      return 'data is empty'
   }

   const valuesArr = Object.values(data)

   data.email?.toLowerCase()
   data.name.toLowerCase()

   return valuesArr
}

type StatusType = 'error' | 'success' | 'pending'

let status: StatusType = 'success'

function handleRequest(status: StatusType) {
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

let url: unknown

url = 'localhost:3000'

if(typeof url === 'string') {
  url.toLowerCase()
}





