//Creating objects
//What are Objects?
//In JavaScript, the barebones associative data structure is called an object.

//Constructing Objects using [Object]

//Literal Syntax
var meals = {} //Curly Brackets are an object

//Object constructor
var meals = new Object()
//Adding / Initializing key-value pairs when creating Object
var meals = new Object({ breakfast: 'oatmeal' }) //breakfast === key and 'oatmeal' === value
//All keys in JavaScript objets are considered Strings 
//Keys must be unique.  If you initialize the folowing:
var meals = {
  breakfast: 'eggs',
  breakfast: 'bacon'
}
//^ You will get the last key-value pair as the key that is saved
//Values, on the other hand, do not have to be unique
var meals{
  breakfast: 'avocado',
  lunch: 'avocado',
  dinner: 'avoado'
}

//Say you had a variable const and created an object:
const firstmeal = 'breakfast'
var meals = { firstmeal: 'oatmeal' }
//The variable meals object would be {firstmealt: 'oatmeal'} and not the variable constants element.
//Say you wanted to use variables as object keys.
//Using Square Brackets [] you can.  Using example above:
var meals = { [firstmeal]: 'oatmeal'}
//That would give back:
meals = { breakfast: 'oatmeal' }

//Access values in an object using dot notation:
meals.firstmeal or meals.breakfast when using [] for Variable //oatmeal

//Adding Objects
//Sometimes we might need to add key-value pairs to the object.
var meals = {
  breakfast: 'oatmeal',
  lunch: 'burrito',
  dinner: 'steak'
}
//Knowing name of key and value will help us add to above variable object
meals.snack = 'yogurt'
//Using a literal dot will allow us to access the property that goes by the string.
//Thus allowing us to add a new key and its value to the variable object created.
//We can also add key-value pairs using bracket notation:
meals['snack'] = 'yogurt'
//we can also use variables as keys this way:
var sweetMeal = 'dessert'
meals[sweetMeal] = 'pie'
//This returns:
var meals = {
  breakfast: 'oatmeal',
  lunch: 'burrito',
  dinner: 'steak',
  dessert: 'pie'
}
//You can also update existing key-value pairs using the key:
meals.breakfast = 'cereal'

                  //  ALL OF THESE CHANGES ARE DESTRUCTIVE!!!!!!!!!

//[Object.assign()] method to create new object and pass its properties from existing objects
Object.assign()
//Example:
var course = { name: "Uzoma" }
var grade = { grade: "95" }
var finalGrade = Object.assign(course, grade)
console.log(finalGrade)
//Object.assign account merged/hanged/rewrote the two objects without destructive methods

//[delete] method used for deleting the Key-Value Pair, Non-Destructively.  Example below:
var meals = {
    breakfast: 'oatmeal',
    lunch: 'burrito',
    dinner: 'steak',
    dessert: 'pie'
  }

delete meals.breakfast
//This will delete the breakfast key and value pair together.

