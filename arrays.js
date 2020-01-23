//Example of Template Arrays
//Variables of Ingrediants 
var ingredient1 = "bread"
var ingredient2 = "mild cheese"
var ingredient3 = "sharp cheese"
var ingredient4 = "butter"
var ingredient5 = "tomato"
var ingredient6 = "garlic"

//Array Creation
var grilledCheeseIngredients = [
  'bread',
  'mild chesse',
  'sharp cheese',
  'butter',
  'tomato',
  'garlic'
]

var tomatoSauceIngredients = [
  'tomato',
  'garlic',
  'olive oil',
  'basil',
  'oregano'
]

//Adding an element to Array
//Use [.push] to add element to end of array
//Use [.unshift] to add element to beginning of an array
//Change underlying array or really mutate the array
var superheroines = ["catwomen", "she-hulk", "mystique"]
superheroines.push("wonderwomen")

var superheroines = ["catwomen", "she-hulk", "mystique"]
superheroines.unshift("wonderwomen")

//Using sprea operator [...example]
var cities = ["Philadelphia", "New York"]
cities = [...cities, "Houston"] //Assigns it to exisitng vairable
cities = ["Houston", ...cities] // ^
//What about if we have a const?
const cats = ["Milo", "Garfield"]
//We need a new variable
const moreCats = ["Felix", ...cats]

//Accessing Arrays
var entrepreneurs = ["Oprah Winfrey", "Laurene Powell Jobs", "Arianna Huffington"];
 
// the line below will print the string "Oprah Winfrey"
console.log(entrepreneurs[0]);
 
// the code below will print the string "Arianna Huffington is the co-founder and editress-in-chief of The Huffington Post"
var bio = " is the co-founder and editress-in-chief of The Huffington Post";
console.log(entrepreneurs[2] + bio);
 
// the line below will return undefined
entrepreneurs[9];

//Removing an element from the beginning of an array using [shift] DESTRUCTIVE
const days = ["Monday", "Tuesday", "Wednesday"]
days.shift() // returns the removed element, in this case "Monday"
days // ["Tuesday", "Wednesday"]

//Removing an Elemenet using at the beginning of array NONDESTRUCTIVE [slice]
var cats = ["Milo", "Garfield", "Otis"]
cats = cats.slice(1) // ["Garfield", "Otis"] //Need to assign our slice to a new variable to save changes
cats // ["Garfield", "Otis"]

//Removing an Element from the End DESTRUCTIVE using [pop]
var iceCreams = ["chocolate", "vanilla", "raspberry"]
iceCreams.pop() // returns the removed element, in this case "raspberry"
iceCreams // ["chocolate", "vanilla"]

//Removing an Element from the End NONDESTRUCTIVE using 

//Review
array.unshift("Adds Element to Beginning of Array Mutating Array (Destructive)")
array.push("Adds Elemennt to the End of Array Mutating Array (Destructive)")
array.pop() "No Arguments; Returns(deletes) the removed element from the End of Array (Destructive)"
array.unshift() "No Argument; Deletes item from the Beginning of Array (Destructive)"
array.slice(1) "Example removes first Element in Array; (NonDestructive) method to removes Elements from Array"
array.slice(0, array.length -1) `Can be read 'From index 0, remove up to index -1 item;` "Removes a certain length of Elements in the Array (NONDESTRUCTIVE)"
array.splice(0, 1, "Feb", "Mar") `Can be read 'From index 0, remove index 1 and add "Feb" and "Mar" in its stead`