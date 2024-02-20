const numbersList = [1,10,14,2,4,5,43,34]

const newList = numbersList.sort(function(a, b) {
    return a - b
})

const newList2 = numbersList.sort(function(a, b) {
    return b - a
})

console.log (newList)
console.log (newList2)