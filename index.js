const produceDrivingRange = (blockRange) => {
  let callbackCity1 = (pickUp, dropOff) => {
    let start = parseInt(pickUp)
    let end = parseInt(dropOff)

    let distance = Math.abs(end - start)
    let range = blockRange - distance

     if (range > 0) {
      return `within range by ${range}`
    } else {
      return `${Math.abs(range)} blocks out of range`
    }
  }
  return callbackCity1
}
// takes the num || percentage returns the tip from calbackCity
const produceTipCalculator = (percentage) => {
 let callbackCity2 = function(total){return  total * percentage}
  return callbackCity2
}


const createDriver = () => {
  let driverId = 0;
  return class {
    constructor(name) {
      this.name = name;
      this.id = driverId+=1;
    }
  }
}

let Driver = createDriver(); //returns class

console.log('driver1', new Driver('Ben').id);
//Driver = createDriver()
console.log('driver2', new Driver('Jhon').id);
console.log('driver3', new Driver('Jule').id);
