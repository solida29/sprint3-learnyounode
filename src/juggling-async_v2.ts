import http from 'http';

const urls = [process.argv[2], process.argv[3], process.argv[4]];

function collectContent(url: string) {
  return new Promise((resolve, reject) => {
    let result = '';
    http
      .get(url, (response) => {
        response.setEncoding('utf8');
        response.on('data', (chunk) => {
          result += chunk;
        });
        response.on('end', () => {
          resolve(result);
        });
      })
      .on('error', (error) => {
        reject(error);
      });
  });
}

async function collectAllContent() {
  try {
    let allContent = '';
    for (const url of urls) {
      const content = await collectContent(url);
      allContent += content + '\n';
    }
    return allContent;
  } catch (error) {
    console.error('Error:', error);
  }
}

collectAllContent().then((data) => console.log(data));
