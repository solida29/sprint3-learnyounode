const path = 'http://localhost:3000';
const option = {
  method: 'GET',
  headers: { 'Content-type': 'text/html' }
};

const isResponseOk = (response: Response) => {
  if (!response.ok) {
    throw new Error(response.status.toString());
  } else {
    return response.text();
  }
};

fetch(path, option)
  .then((response) => isResponseOk(response))
  .then((data) => console.log(data))
  .catch((error) => console.log('Error: ', error.message));
