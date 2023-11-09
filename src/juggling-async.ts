/**
Ce problème est le même que le précédent (Collecteur HTTP), dans le sens où vous aurez besoin de http.get(). Cependant, cette fois-ci vous allez recevoir trois URLs sur la ligne de commande.
Vous devrez collecter le contenu complet qui vous sera envoyé pour chaque URL, et l’afficher sur la console (stdout). Vous n’avez pas besoin d’afficher la longueur, juste les données en tant que String, à raison d’une ligne par URL. La difficulté réside dans le fait que vous devez les afficher dans le même ordre que celui des URLs transmises sur la ligne de commande.

CONSEILS
Ne vous attendez pas à ce que les trois serveurs soient sympa ! Ils ne vous enverront pas leurs réponses complètes dans l’ordre que vous espérez, donc vous ne pouvez pas naïvement juste afficher les contenus au fil de leur réception, car l’ordre ne sera pas le bon.
Vous allez devoir garder les résultats sous le coude et compter les URLs qui ont fini leurs retours. Une fois que vous les aurez toutes, vous pourrez afficher vos résultats dans la console.
Compter les fonctions de rappels et une des manières basiques de gérer l’asynchrone en Node. Plutôt que de le faire vous-même, vous trouverez sûrement utile de vous baser sur des modules tiers tels que async ou after. Mais pour cet exercice, essayez de réussir sans l’aide d’un module externe.
 **/

import http from 'http';

const urls = [process.argv[2], process.argv[3], process.argv[4]];

function collectContent(url: string) {
  return new Promise((resolve, reject) => {
    let result: string = '';
    http
      .get(url, (response) => {
        response.setEncoding('utf8');
        response.on('data', (chunk: WritableStream) => {
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

type Output = unknown | string;

async function collectAllContent(): Promise<Output> {
  let content: string | unknown = '';
  let allContent = '';

  try {
    for (let i = 0; i < urls.length; i++) {
      content = await collectContent(urls[i]);
      if (i < urls.length - 1) {
        allContent += content + '\n';
      } else {
        allContent += content;
      }
    }
    return allContent;
  } catch (error) {
    console.log(error);
    return error;
  }
}

collectAllContent().then((data) => console.log(data));
