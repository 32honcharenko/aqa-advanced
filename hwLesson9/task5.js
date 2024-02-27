const users = [

    {
    firstName: "Alan",
    email: "bla@gmail.com",
    age: 5000,
},
{
    firstName: "Durko",
    email: "durko@gmail.com",
    age: 5,
},
{
    firstName: "Bobo",
    email: "bobo@gmail.com",
    age: 4000,
}

];

for (let {firstName, email, age} of users) {
    
    console.log(`Name: ${firstName}, Email: ${email}, age: ${age}`)
    
}

