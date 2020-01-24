//Object Examples ; ALL Keys are considered Strings; So treat them as Such!!!!!!!!!!!

var subject = "psychology"
var courseSpecific = {
    math: 'alegebra',
    reading: 'grammar',
    science: 'planets',
    gym: 'excercie'
}

console.log(courseSpecific.reading)
console.log(courseSpecific['reading']) //Two ways to find the value to a key in the object. ^^

courseSpecific['literature'] = 'Shakespeare' 
courseSpecific.literature = 'Shakespeare' ////Two ways to add a new Key with a new variable (DESTRUCTIVELY) Uses literal dot

courseSpecific['math'] = "geometry"
courseSpecific.math = "geometry" //Two ways of changing the inside Key to a new variable (DESTRUCTIVELY)
console.log(courseSpecific)

courseSpecific[subject] = "Freud"
courseSpecific.subject = "Freud"  //Adds the Global var of subject as a key-value pair to the Object (DESTRUCTIVELY)
console.log(courseSpecific)

////DESTRUCTIVE METHODS\\\\   If we apply these changes to an object by passing the object to a function, the original object will change: Example

function destructivelyUpdateKeyAndValue(obj, key, value){
    obj[key] = value
    console.log(obj)
}
const change = {flour: 3}
destructivelyUpdateKeyAndValue(change, 'Sauce', '4 Tea Spoons')

///////////////////////////////////////////////////////////////////////////////////

//Create New Objects that stores Both Old and New copies
const food = Object.assign({egg: 3}, {meat: 'ham'}, {cheese: "swiss"}) //[Object.assign] passes properties from new object to existing objects
console.log(food)  //First Object is the Target Object

//[Object.assign] used in a function (NONDESTRUCTIVE)
function updateObjectWithKeyAndValue(obj, key, value){
    var pizza = Object.assign({}, obj, {[key]: value})
    console.log(pizza)
}
var pie = { sugar: 80 }
updateObjectWithKeyAndValue(pie, 'ice cream', '70')










    

