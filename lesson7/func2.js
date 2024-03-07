function fetchData(url, callback) {
  fetch(url)
    .then((response) => response.json())
    .then((data) => callback(data))
    .catch((error) => console.log(error));
}

fetchData('https://jsonplaceholder.typicode.com/todos/1', (data) => {
  console.log(data);
});

function Person(name) {
  this.name = name;
  this.greet = function () {
    console.log(`Hello, ${this.name}!`);
  };
}

// apply  / bind  / this /  call / Анонімна функція /

/*     // call
greet = function() {
    console.log(`Hello, ${this.name}!`);
  };
  const person22 = { name: 'Koala' }
  greet.call(person22)
  // apply
  function greet(timesOfDay, weather) {
    console.log(`Good ${timesOfDay}, ${this.name}! It's ${weather} today.`);
  }

  const person = { name: 'Bob' };
  greet.apply(person22, ['morning', 'sunny']); // Виведе: Good morning, Bob! It's sunny today.
  // bind
  function greet() {
    console.log(`Hi, I'm ${this.name}`);
  }

  const person33 = { name: 'Charlie' };
  const greetPerson = greet.bind(person33);
  greetPerson(); // Виведе: Hi, I'm Charlie */
