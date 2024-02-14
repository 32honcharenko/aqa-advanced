// function declaration
function square (width, height) {
    const area = width * height
    console.log(area)
    return area
    
}
square(5, 10)

//  function expression
const bla = function square (width, height) {
    const area = width * height
    console.log(area)
    return area
}
const result = bla(3, 4)

// arrow function
const lala = (width, height) => {
    const area2 = width * height
    console.log(area2)
    return(area2)
}
const area2 = lala(3, 7)