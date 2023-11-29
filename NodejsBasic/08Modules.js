const mymodules = require('./modules/mymodules')

const TimeNow = require('./modules/mymodules').getCurrentTime

const plus = require('./modules/mymodules').add

console.log(mymodules.getCurrentTime())

console.log(mymodules.add(200,100))

console.log("-------------------------------")

console.log(TimeNow())

console.log(plus(200,100))