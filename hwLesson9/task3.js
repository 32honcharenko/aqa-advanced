let car1 = {
    brand: "Tesla",
    model: "X",
    year: 2022
}

let car2 = {
    brand: "Tesla2",
    model: "X2",
    owner: 2023
}

let car3 = { ...car1 , ...car2 };

console.log(car3)



