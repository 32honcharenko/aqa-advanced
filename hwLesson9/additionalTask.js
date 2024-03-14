import _ from 'lodash';

const object1 = {
  name: 'Carl',
  age: 35,
  knowledges: { history: 5, language: 4 },
};

const object2 = {
  name: 'Carl',
  age: 35,
  knowledges: { history: 5, language: 4 },
};

// #1
console.log(_.isEqual(object1, object2));

// #2 working if the same key possition in the object
console.log(JSON.stringify(object1) === JSON.stringify(object2));

/// ////////////////////////////////////////////////////////////

function isObjectsEqual(object1, object2) {
  return object1.name === object2.name && object1.age === object2.age;
}
// #3
console.log(isObjectsEqual(object1, object2));
