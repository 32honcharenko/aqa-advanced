function handleNum (number, callback1, callback2) {

    if (number % 2 === 0) {
        callback1() 
        
    } else {
        callback2()
    }
}


function handleEven () {
    console.log (`number is even`)
}

function handleOdd () {
    console.log (`number is odd`)
}

handleNum (11, handleEven, handleOdd)


