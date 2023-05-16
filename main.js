console.log('Hello World') // Testing Js Link
// This is comment
/*
Multi line
Comment
*/

// var, let, const declaring keywords
// declare a variable
var firstName;

console.log(firstName);

firstName = 'dylan'
console.log(firstName)
// bad practice redeclaring variable
var firstName = 'sean'
console.log(firstName)
// bad practice declaring without keyword
lastName = 'currie'
console.log(lastName)

console.log(firstName); console.log(lastName); console.log('test')

var string1 = 'This is a string'
var string2 = "This is a string"
var string3 = "This is Sean's string"
var string4 = 'This is Sean\'s string'

// Concat strings
var joinedString = string1 + '!'
console.log(joinedString)
var fullName = firstName + ' ' + lastName
console.log(fullName)

console.log(firstName, lastName)
console.log(firstName + ' ' + lastName)
// indexing
console.log(fullName[0])
// cannot user negative indexes
console.log(fullName[-1])
console.log(fullName[100]) // will get undefined instead of getting out of range 

// console.log(fullName.charAt(-1))
// String Methods
console.log(fullName.toUpperCase())
console.log('IM NOT YELLING'.toLowerCase())

console.log(fullName[0].toUpperCase() + fullName.substring(1,11))
// let index = -1
// Console.log(fullName.charAt(fullName.length + index)

// length property
console.log(fullName.length)

// string slicing similar to [::]
// .slice(<startIndex>, <endIndex>)

var myName = 'dylan smith'
var slicedName = myName.slice(0,5)
var subStringName = myName.substring(0,5)
console.log(myName.slice(0,5))
console.log(subStringName)
console.log(slicedName)
// out of place, strings are immutable
console.log(myName)
// using negative index
console.log(myName.slice(-5, -1))

var compoundString = 'welcometojavascript'
console.log(compoundString.slice(7,9))

// Replacing a substring
var marriedName = myName.replace('smith', 'cervantes')
console.log(myName)

// Template Literal aka formatted string 
var congratsString = `Congrats on the marriage ${marriedName}`
console.log(congratsString)
console.log(`Dear Whoever
    Greeting!
    ${marriedName}
    Sincerely
`)

var multiVars = `Your instructors are ${fullName} and ${myName}`
console.log(multiVars)

// Create 3 variables each being diff info about your best friend -> create a template literal include all 3 variables
var first = 'Thong'
var last = 'Nguyen'
var degree = '1 degree hotter'
var combine = `my best friend, who is ${first} ${last} is ${degree} than me`
console.log(combine)

// Types
console.log(typeof multiVars)
// array is an object
console.log(typeof [])
console.log(typeof 12)
console.log(typeof 12.74)

// Math Operation
console.log(5+5)
console.log(10-5)
console.log(10*10)
console.log(12/3)
console.log(10**2)
console.log(11 % 2)
// floor division use Math Library
console.log(Math.floor(11/2), 'math floor')

var num = 10
console.log(num*=2)
console.log(num)

var num2 = 100
// long hand version
// num2 = num2/25
// short hand version
num2 /= 25

// incrementing by 1
num += 1
console.log(num)
num++
console.log(num)
++num
console.log(num)
console.log(num++)
console.log(num)
console.log(++num, 'test')
console.log(num2)

// decrement by one
var newNum = 10
newNum-- // newNum = newNum - 1
console.log(newNum)
--newNum
console.log(newNum)
console.log(newNum--, 'sign after var')
console.log(--newNum, 'sign before var') 

// Type Conversion
// str -> number
var strNum = '123'
var numberNum = parseInt(strNum)
console.log(numberNum, typeof numberNum)

var decimalString = '12.5'
console.log(parseInt(decimalString))
// parseFloat to keep digits after decimal
console.log(parseFloat(decimalString))

// number -> string
var myNum = 100
var numbers = myNum.toString()
console.log(numbers, typeof numbers)

// '3.14' + 4
console.log('3.14' + 4)
console.log(parseFloat('3.14') + 4)

// Boolean 
var bool1 = true
var bool2 = false
console.log(typeof bool1)

// Comparison
console.log(2>1)
console.log(1<2)
console.log(2>=3)
console.log(2<=2)
console.log(1 == '1', 'not strict')
console.log(1 === '1')
console.log("1" === '1')

// Negating Booleans

console.log(1 !== 2)
console.log(!10 > 11)
console.log(!true)
console.log(!false)

console.log(Boolean(''))
console.log(Boolean(12))
console.log(Boolean(0))
// membership check on empty objects return true
console.log(Boolean([]))
console.log(Boolean({}))

// Chaining conditions
// || == or in Python
console.log('=================', 'testing or')
console.log(true||false)
console.log(false||true)
console.log(false||false)
console.log(true||true)

// and == &&
console.log('=================', 'testing and')
console.log(true && false)
console.log(false && true)
console.log(false && false)
console.log(true && true)

// short circuit
function one() {
    console.log('one ran')
    return true
}

function two() {
    console.log('two ran')
    return false
}

function three() {
    console.log('three ran')
    return true
}

// one() && two() && three()
// one() || two() || three()

// one() && true && three() && false && three()

false || two() || false || !three() || one()

// null vs undefined

var noValue
console.log(noValue)

var myNull = null
console.log(typeof myNull)

noValue || myNull || one()

// let and const
var myNull = true
console.log(myNull)

let myLet = 'let'
// break can't declare
// let myLet = 'test'
myLet = 'update'
console.log(myLet)

let test;
test = 'test'

const myConst = 'Const'
// break for redeclaring
// const myConst = 'break'
// myConst = 'test'
// console.log(myConst)

if (true) {
    let blockVariable = 'test let'
    console.log(blockVariable)
}
if (true) {
    const blockVariable2 = 'test const'
    console.log(blockVariable2)
}
if (true) {
    var blockVariable3 = 'test var'
    console.log(blockVariable3)
}

// console.log(blockVariable)
// console.log(blockVariable2)
console.log(blockVariable3)

// Array
// empty array 
let myArray = []
let myArray2 = new Array()
console.log('======================== Working with Arrays')
// array with elements
const filledArray = [1,2,3,'a', 'b', 'c']
console.log(filledArray[3])
console.log(filledArray[0])
// undefined
console.log(filledArray[100])
console.log(filledArray.length)
// add to end of array .push()
myArray.push('sean')
console.log(myArray, myArray.length)
// push returns new length
console.log(myArray.push('dylan'))
// can add multiple elements at once
console.log(myArray.push('gian', 'todd', 'john', 'alec', [1,2,3]))
console.log(myArray)

let myPop = myArray.pop()
console.log(myPop, myArray)

filledArray.pop()
console.log(filledArray)
// Destructing
console.log('======================== Destructuring')
console.log(myArray)

const [instructorOne, instructorTwo, studentOne, studentTwo, studentThree, studentFour] = myArray
console.log(myArray)
console.log(instructorOne, instructorTwo, studentThree)

const [teacherOne, teacherTwo, ...students] = myArray
console.log(teacherOne, students)

const [newOne, newTwo,, four, ...fiveAndSeven] = [1,2,3,4,5,7]
console.log(newOne, four, fiveAndSeven)
console.log(...students)

students.unshift('khoa', 'test')
// can add multiple
students.unshift('Christopher', 'David')
console.log(students)
// remove from the beginning shift
students.shift()
console.log(students)

console.log(students.indexOf('todd'))
// return -1 if the value is not present
console.log(students.indexOf('test'))

// map, filter, reduce
// array.methods(<function>)

console.log(students.map((student) => {return student.toUpperCase() })) // just in case of same line, the {} will not be required in a function so we don't need 'return', otherwise it has to be always needed for the function

console.log(students.map((student) => student.toUpperCase()))

console.log(students.filter((student) => student.length === 4 ))
console.log(students.filter((student) => student.length !== 4 ))
console.log(students.filter((student) => false ))
console.log(students.filter((student) => true ))

console.log([12,3,4,5].reduce((acc, num) => acc + num))

console.log(students.reduce((acc, student) => acc + ` ${student}`, 'Welcome to Matrix'))

console.log(students.toString())

console.log(students.join(', '))

// Slicing same as students[1:4] in Python
console.log(students.slice(1,4))

// Splice .splice(<startingIndex>, how many to remove, optional element to add)
console.log(students.splice(2, 2, 'Karina'))
console.log(students)

console.log(students.splice(0,1))
console.log(students)

const favFoods = ['sushi', 'pizza', 'tacos']
favFoods.push('Pho')
console.log(favFoods)
favFoods.unshift('Korean Food')
console.log(favFoods)
favFoods.pop()
console.log(favFoods)
favFoods.shift()
console.log(favFoods)

// Functions

/* 
Traditional Syntax
function nameOfFunc(<parameters>){}

ES6 Arrow func syntax
const <nameOfFunc> () => {}
*/
console.log(addNums(10,15)) // this Hoisting because in JS it read whole page then accessing to see how it work

function addNums(num1, num2) {
    console.log(num1, num2)
    return num1 + num2
}


// console.log(arrowAddNums(10,10)) // Arrow Function can't hoist
const arrowAddNums = (num1, num2) => {
    return num1 + num2
}

// const greeting = (name) => {
//     console.log(`Hellow ${name}`)
// }

// arrow function with 1 param don't need parenthesis
// implicit
// single operation which is the return we can include return on the same line w/o return keyword
const greeting = name => `Hellow ${name}`
console.log(greeting('Sean'))

function addMultipleNums(num1, num2, num3) {
    return num1 + num2 + num3
}

const randomNums = [10,4,5]
console.log(addMultipleNums(12,1,5))
console.log(addMultipleNums(randomNums[0], randomNums[1], randomNums[2]))
console.log(addMultipleNums(...randomNums))

function addManyNumbers(...numbers){
    console.log(numbers)
    return numbers.reduce((acc, num) => acc + num)
}

console.log(addManyNumbers(10,4,9,10,10,11))
console.log(addManyNumbers(...randomNums))

// Conditionals
// if () {} syntax
// if () {}else{} syntax
// if () {}else if {} else syntax

if (10 > 11) {
    console.log('10 > 11')
} else if (100 === '100') {
    console.log('same data types')
} else if (100!=='100') {
    console.log('2nd else if')
} else {
    console.log('Running else action')
}

// For loop
// Traditional Syntax
// for(index; condition; incrementer) {}

for(let i = 0; i<10; ++i){
    console.log(`i = ${i}`)
}
for(let i=0; i<10; i+=2){
    console.log(`i = ${i}`)
}
for(let i = 0; i < students.length; i++){
    console.log(students[i])
}
for(let student of students){
    console.log(student)
}