//Написать функцию, которая создает пустой объект, но без прототипа.

makeObjWithoutPrototype = () => {
    return Object.create(null)
}

let obj = makeObjWithoutPrototype()
console.log(Object.getPrototypeOf(obj));