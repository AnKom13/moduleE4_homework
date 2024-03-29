/*
Написать, функцию, которая принимает в качестве аргумента объект и выводит в консоль все ключи и значения 
только собственных свойств. Данная функция не должна возвращать значение.
*/

showOwnProperties = (obj) => {
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      console.log(`${key} - ${obj[key]}`);
    }
  }
}



const ex = {
  a: '1',
  b: '2',
}

Object.getPrototypeOf(ex).c = 3
showOwnProperties(ex)

/* 
for in перебирает перечисляемые свойства.
не перечисляемые - которые унаследованы от других либо закрытые
Вроде с-3 д.б. не перечислямым. 
Однако, " 
          свойства созданные пользователем, по умолчанию являются перечисляемыми."
для этого и нужна проверка hasOwnProperty
*/