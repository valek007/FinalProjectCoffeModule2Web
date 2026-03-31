// тип ErrorData
type ErrorData = {
  errorOrCode: number | string; // код ошибки
  payload?: Record<string, string | number | boolean>; //payload (опциональный)
};

// данные errorData
const errorData: ErrorData = {
  errorOrCode: 'TIMEOUTERROR',
  payload: {
    userId: 1,
  },
};

// пытаемся перевести в нижний регистр
errorData.errorOrCode // отсутсвует метод toLowerCase()!

function isString(test: any): test is string{
    return typeof test === "string";
}

export function example(foo: any){
    if(isString(foo)){
        console.log("it is a string" + foo);
        console.log(foo.length); // string function
    }
}
example("hello world");