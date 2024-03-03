function todo() {
    return new Promise ((resolve, reject) => {
        fetch("https://jsonplaceholder.typicode.com/todos/1")

        .then (response => {
            if (!response.ok) {
                throw new Error (`wrong response`)
            }
            return response.json()
        })

        .then (todo => {
            resolve(todo);
            
        })

        .catch (error => {
            reject(error);
        })
    })
}


function user() {
    return new Promise ((resolve, reject) => {
        fetch("https://jsonplaceholder.typicode.com/todos/1")

        .then (response => {
            if (!response.ok) {
                throw new Error (`wrong response2`)
            }
            return response.json()
        })

        .then (user => {
            resolve(user);
            
        })

        .catch (error => {
            reject(error);
        })
    })
}

Promise.all([todo(), user()])
.then(([todoResult, userResult]) => {
    console.log(`todo:`, todoResult);
    console.log(`user:`, userResult);
})

.catch(Err => {
    console.error(`error`, Err)
})

