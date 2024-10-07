function addCar(agentString, car) {
    let object = JSON.parse(agentString)
    object.car = car
    return object
}
agentString = '{"numbers": "1", "firstName": "Peugeot", "lastName": "Coca"}'
let car = "Aston Martin"
let updatedAgent = addCar(agentString, car)
console.log(updatedAgent)