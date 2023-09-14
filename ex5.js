//Переписать консольное приложение из предыдущего юнита на классы.

class Device {
    constructor(name, power, condition = false) {
        this.name = name;
        this.power = power;
        this.condition = condition;
        this.showPower = function () {
            console.log(this.power);
        };
        this.getPowerOn = function () {
            this.condition = true;
        };
        this.getPowerOff = function () {
            this.condition = false;
        };
    }
}


class Computer extends Device {
    constructor(name, power, condition, type = null, model = null) {
        super(name, power, condition);
        this.type = type
        this.model = model
    }
}

class Cleaner extends Device {
    constructor(name, power, condition, color = null, model = null) {
        super(name, power, condition);
        this.color = color
        this.model = model

        this.showColor = function () {
            console.log(this.color)
        }

        //пусть пылесосы ПОКАЗЫВАЮТ, что потребляют вдвое больше чем заявлено        
        //пример переопределения метода
        this.showPower = function () {
            console.log(this.power * 2)
        }
        this.work = function () {
            if (this.condition) {
                console.log('ZZZZZZZZZZ')
            }
            else {
                console.log('Please power on')
            }
        }
    }
}
function sumPower(device) {
    let sum = 0;
    for (let val of device) {
        if (val.condition) {
            sum += val.power;
        }
    }
    return sum;
}


const lamp = new Device("lamp", 30);
const lamp2 = new Device("small lamp", 10);
const MyPC = new Computer("комп", 300, true, 'mobile', 'Intel');
const MyCleaner = new Cleaner("пылесос", 500, true, 'black', 'Vax');
lamp2.getPowerOn()

device = [lamp, lamp2, MyCleaner, MyPC]
lamp.xxx = 1
MyCleaner.showPower()
MyCleaner.work()
console.log(sumPower(device));
MyCleaner.getPowerOff()
MyCleaner.work()
console.log(sumPower(device));
console.log(lamp.xxx);