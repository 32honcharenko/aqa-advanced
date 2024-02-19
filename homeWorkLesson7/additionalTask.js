function makeCounter(num) { 

    let number = num
    return function () {
        number = number + 5
        return number
    }

}
const bla = makeCounter(5)
console.log (bla())
console.log (bla())
console.log (bla())
console.log (bla())