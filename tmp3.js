class User {
    name

    constructor(name) {
        this.name = name
    }

    getName() {
        return this.name
    }
}

class ContentWriter extends User {
//    posts 

    constructor(name, posts) {
        super(name)
        this.posts = posts
    }
}

const writer = new ContentWriter('Лермонтов', 'Герой нашего времени')
console.log(writer.name) // Лермонтов
console.log(writer.posts) // ['Герой нашего времени']
console.log(writer.prototype)
//console.log(getPrototypeOf(writer))
console.log(Object.getPrototypeOf(writer))