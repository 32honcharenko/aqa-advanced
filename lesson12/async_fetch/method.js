async function getSingleUseData() {
  const responce = await fetch('https://reqres.in/api/users/2');
  const data = await responce.json();
  console.log(data);
  // console.log(responce) - log all dara for responce
}

getSingleUseData();
// JSON =>
// JSON.parse
// JSON.stringify

const data = {
  name: 'morpheus',
  job: 'leader',
};

const data2 = {
  name: 'morpheus',
  job: 'leader',
};

async function createSingleUser() {
  const post_responce = await fetch('https://reqres.in/api/users', {
    method: 'POST',
    body: data,
  });
  const statusCode = post_responce.status;
  console.log(statusCode);
  const data_responce = JSON.parse(post_responce.data);
  console.log(data_responce);
}

createSingleUser();

const convertJSONiNJS = JSON.stringify(data2);
console.log(convertJSONiNJS);
