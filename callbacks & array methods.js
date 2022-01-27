// Try and catch to avoid displaying error


try {
    hello.toUpperCase
}
catch {
    console.log("please skip")
}

// forEach() function


const arr = [1, 2, 3, 4, 5, 6, 9, 8, 7]

arr.forEach(function (num) {

    console.log(num)
}

)

// Map() function


const cube = arr.map(function (num) {
    return `${num}` ** 3

})
const fullNames = [{ first: 'Albus', last: 'Dumbledore' }, { first: 'Harry', last: 'Potter' }, { first: 'Hermione', last: 'Granger' }, { first: 'Ron', last: 'Weasley' }, { first: 'Rubeus', last: 'Hagrid' }, { first: 'Minerva', last: 'McGonagall' }, { first: 'Severus', last: 'Snape' }];

const firstName = fullNames.map(function (name) {

    return name.first
})

//Arrow function

const mul = (a, b) => {
    return a * b;
}

const greet = (name) => {
    return `Hey ${name}`
}

const rollDie = () => {
    return Math.floor(Math.random() * 10) + 1
}
const add = (x, y) => x + y

//setTimeOut

setTimeout(() => {
    console.log("Hello")
}, 3000)

arr.filter((num) => {
    return num <= 6
})

// Filter method
function validUserNames(arr) {

    const names = arr.filter(str => {
        return str.length < 10;
    })
    return names
}

// Some & Every method

const marks = [75, 85, 71, 86, 92]

marks.some(mark => mark >= 70)

function allEvens(arr) {

    const even = number => number % 2 === 0;
    console.log(arr.every(even))
}

const low = marks.reduce((low, high) => {
    if (low > high) {
        return low
    }
    return high
})