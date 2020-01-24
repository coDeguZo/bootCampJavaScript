var array = ["Pokemon", "Ditto", "Amanda"]
var pokemon = array.slice(1)
console.log(pokemon)

var array2 = ["Pokemon", "Ditto", "Amanda"]
array2.pop()
console.log(array2)

var array3 = ["Pokemon", "Ditto", "Amanda"]
var array4 = ["Philadelphia", ...array3]        //Using the Spread Operator spreads out the arrays content.
console.log(array4)                             //This example spreads out and adds "Philadelphia" to the beginning of array3


var array3 = ["Pokemon", "Ditto", "Amanda"] 
var array4 = [...array3, "Philadelphia"]        //This example uses the Spread Operator to add "Philadelphia" to the end array3
console.log(array4)   

var array5 = ["Pokemon", "Ditto", "Amanda"]
array5[5] = 5
console.log(array5)

var array6 = ["Pokemon", "Ditto", "Amanda"]
var array7 = array6.slice(0, array6.length -1)  //[slice] method removes elements starting from how many Elements removed from beginning to end
console.log(array7)                             //[length] method allows one to choose how many Elements to removed starting from index choosen to end

var array8 = ["Pokemon", "Ditto", "Amanda"]
var array9 = array8.splice(0, 2, "Feb", "Mar")  //[splice] method removes Elements ; At index 0 remove two Elements and add "Feb" and "Mar"
console.log(array8)

var array10 = ["Pokemon", "Ditto", "Amanda"]
var bio = ` is the best video game of all time!`  //Using Template Literals to add array[index] and var bio together
console.log(array10[0] + bio)

var array11 = ["Pokemon", "Ditto", "Amanda"]  //[.length] is being used to tell the exact length in array11 ; array11 === 3
console.log(array11.length)

var array12 = ["Pokemon", "Ditto", "Amanda"] //[unshift] method ; Adds Element to the beginning of the array
array12.unshift("Griffen")
console.log(array12)

var array13 = ["Pokemon", "Ditto", "Amanda"] //[push] method ; Adds Element to the end of the array
array13.push("Griffen")
console.log(array13)

var array14 = ["Pokemon", "Ditto", "Amanda"] //[pop] method ; Removes the Element at the end of the array
array14.pop()
console.log(array14)

var array15 = ["Pokemon", "Ditto", "Amanda"] //[shift] method ; Removes the Element at the beginning of the array
array15.shift()
console.log(array15)

var array16 = ["Pokemon", "Ditto", "Amanda"]
var array17 = ["Leaf", "Alligator", "Giraffe"]
var array18 = array16.concat(array17)        //[concat] method ; Adds two Arrays togther without changing existing arrays
console.log(array18)





