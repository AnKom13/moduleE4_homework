function DeviceF(name, power) {
    this.name = name;
    this.power = power;
    this.showPower = function () {
        console.log(this.power * 2);
    }
}

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
const lamp = new Device("lamp", 25, true);
//let tmp = Object.create(Device())
const lamp1 = new DeviceF("lamp", 30);

console.log(lamp.condition)
console.log(lamp1.showPower())
lamp.showPower()
//console.log(lamp1.power)

showOwnProperties = (obj) => {
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        console.log(`${key} - ${obj[key]}`);
      }
    }
  }
//showOwnProperties(lamp1)