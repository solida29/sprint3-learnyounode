const options = {
  method: 'POST',
  headers: { 'Content-type': 'text/html' },
  body: 'texto plano a convertir en caja alta'
};

const responseOk = (response: Response) => {
  if (!response.ok) {
    throw new Error(response.status.toString());
  } else {
    return response.text();
  }
};

fetch('http://localhost:3000', options)
  .then((response) => responseOk(response))
  .then((data) => console.log(data))
  .catch((error) => console.log('Error: ', error.message));
