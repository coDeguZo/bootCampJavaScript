// write your code below!
var name = "Susan"
var height = 39
var message = `${name} is ${height} inches tall`

module.exports = {name, height, message}

var word = "bird"
word = "bunny"
console.log(word)

function birdie () {
  console.log('Hello, World')
}
function sayHelloUzoma(){
  console.log('Hello, Uzoma')
}
function sayHelloChibu(){
  console.log('Hello, Chibu')
}
function sayHelloAdamma(){
  console.log('Hello, Adamma')
}
function doAnything(thing){
  console.log(thing)
}
function sayHelloTo(firstName, age) {
  console.log(`Hello, ${firstName}! Are you ${age} years old?`) // <--- Argument throught the Paranthesis
}
sayHelloTo('Uzoma', '25')
sayHelloTo('Adamma', '26')

var name = "Uzoma"
var age = "25"
var message = `${name} is ${age} years old` //Use Back ticks with ${}
console.log(message)