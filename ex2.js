/*
Написать функцию, которая принимает в качестве аргументов строку и объект, 
а затем проверяет есть ли у переданного объекта свойство с данным именем. 
Функция должна возвращать true или false.
*/
checkProperty = (str, obj) => {
//    return obj.hasOwnProperty(str)
      return str in obj
}

const ex = {
    a: '1',
    b: '2'
}
Object.getPrototypeOf(ex).c = 3
console.log(checkProperty('a', ex))
console.log(checkProperty('aa', ex))
console.log(checkProperty('c', ex))
