
const url = "https://jsonplaceholder.typicode.com/todos/1"

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}


async function todo () {
    
    try {
        await delay(2000)
        const response = await fetch(url)
        const data = await response.json()
        //console.log(`Todo: `, data)
        return data
    
    } catch (error) {
        console.error(error)
    } finally {
        //console.log(`Proces finished`)
    }

    
}

async function user () {
    
    try {
        await delay(2000)
        const response = await fetch(url)
        const data = await response.json()
        //console.log(`User: `, data)
        return data
    
    } catch (error) {
        console.error(error)
    } finally {
        //console.log(`Proces finished`)
    }

    
}

// todo()
// user()

async function todoAndUser () {
    try {
        const [todoResult, userResult] = await Promise.all([todo(), user()])
        console.log("Todo: ", todoResult)
        console.log("User: ", userResult)
    } catch(error) {
        console.error(`Some error`)
    } finally {
        console.log(`Proces finished`)
    }

}
todoAndUser ()