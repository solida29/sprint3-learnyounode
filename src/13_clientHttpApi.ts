const optionApi = {
  host: 'http://localhost:3000',
  method: 'GET',
  headers: { 'Content-type': 'application/json' }
};
const date = new Date();

const ResponseOk = (response: Response) => {
  if (!response.ok) {
    throw new Error(response.status.toString());
  } else {
    return response.text();
  }
};

fetch(`http://localhost:3000/api/unixtime?iso=${date.toISOString()}`, optionApi)
  .then((response) => ResponseOk(response))
  .then((data) => console.log(data))
  .catch((error) => console.log('Error: ', error.message));

fetch(
  `http://localhost:3000/api/parsetime?iso=${date.toISOString()}`,
  optionApi
)
  .then((response) => ResponseOk(response))
  .then((data) => console.log(data))
  .catch((error) => console.log('Error: ', error.message));
