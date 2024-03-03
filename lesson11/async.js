

function hi() {
    console.log('hi')
    
}

function checkElement() {
    console.log('Searching for UI element')
    
}


setTimeout(hi, 0)   // timeout: 1000 = 1 sec

function hiWithParam(name) {
    console.log(`hi ${name}`)
    
}

const timeoutId = setTimeout(hiWithParam, 1000, 'Koala') 
clearTimeout(timeoutId)

hiWithParam('Koala2')

//const intervalId = setInterval(checkElement, 500)
//clearInterval(intervalId)

let timeoutId2 = setTimeout(function check () {
    console.log ('Check the UI header element')
    timeoutId2 =  setTimeout (check, 500)
}, 1000)


/*new Promise( function(resolve, reject) {
     ··· 
     if (···) {
         resolve(value);  
        } else { 
            reject(reason);  } } );*/
            