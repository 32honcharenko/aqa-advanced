const array = [10, 20, 30, 40, 50]

const reduce = array.reduce (function(total, amount) {
    return total+amount
})

console.log (reduce)

