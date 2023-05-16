// Question 1:
/* Write a function that takes a string (sentence) and an array of strings (in this example dog_names) and check if one of the list members (dog names) is in the string (sentence). Return an array of the dog names found in the array

hint: filter, includes */
var dogNames = ["Max","Fido","Gizmo","Nala"]
const checkDogNames = (str, dogs) => {
    const newList = []
    for (let i = 0; i < dogs.length; i++){
        if (str.includes(dogs[i]))
        newList.push(dogs[i]);
    }
    return newList
}

let testString1 = "Hello, my dog is Max, and they have purple eyes!"

console.log(checkDogNames(testString1, dogNames))

// Question 2
/* Write a Function using map to convert an array of number from inches to feet
 */

function converter(arr) {
    return arr.map((a) => a/12)
}
const heightsInInches = [66, 64, 60, 52, 72, 80, 51]
console.log(converter(heightsInInches))

// Question 3
/* Using the Ternary Operator and map create an array that adds is eating pizza to every name from the array tmnt that ends with o and add is being rude to any other name. */

const eatingPizza = (list1) => {
    let newList = []
    list1.map((l) => {
        if (l.endsWith('o')){
            newList.push(l + ' ' + 'is eating pizza')
        } else {
            newList.push(l + ' ' + 'is being rude')
        }
    })
    return newList
}
const tmnt = ["Leonardo", "Michelangelo", "Donatello", "Raphael"]
console.log(eatingPizza(tmnt))

// Question 4
/* 
Write an arrow function to find the max number in a list */

const maxNumber = (list2) => {
    return list2.sort((a, b) => a - b).slice(-1)
}
const maxNum = [123,5436,45784,1234,34,65,234125,645,3452,13216,49]
console.log(maxNumber(maxNum))

/* Question #5

At the end of the third Iteration (the third time the loop has ran) of this for Loop define the state of all the variables used in the cell
 */
/* var bingo = "B-I-N-G-O"
var ognib = ""
for(let i=bingo.length-1; i>=0; i--){
    ognib+=(bingo[i])
    //define state from this line on the third iteration
}
//bingo value is
    N
//ognib value is
    N
// i value is
    2 */

/* https://www.codewars.com/kata/62a611067274990047f431a8/train/javascript */
function alternate(n, firstValue, secondValue){
    arr = []
    if (n ==0 ){
        return []
    }
    while (arr.length < n) {
          arr.push(firstValue)
          arr.push(secondValue)
    }
    if (n % 2 == 1) {
        arr.pop()
    }
    return arr
}

console.log(alternate(5, true, false))
console.log(alternate(0, 'blue', 'red'))

/* https://www.codewars.com/kata/51f2d1cafc9c0f745c00037d/train/javascript */

function solution(str, ending){
    if (str.endsWith(ending)) {
      return true
    } else {
      return false
    }
}
console.log(solution('abc', 'bc'))

/* https://www.codewars.com/kata/58ee4db3e479611e6f000086/train/javascript */

function oddBitsMarch(n) {
    let path = [];
    let step = Array(8).fill(0);
    for (let i = 0; i < n; i++) {
      step[i] = 1;
      path.push([...step]);
    }
    return path;
  }
  