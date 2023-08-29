const axios = require('axios');

/* Exemplo de uso de Promise com try/catch

O que é ?
    Promise é um objeto usado para processamento assíncrono. Um Promise (de "promessa") representa um valor que pode estar disponível agora, no futuro ou nunca.
Como funciona ?
    Uma Promise é um objeto que representa a eventual conclusão ou falha de uma operação assíncrona. Uma Promise é um objeto retornado para o qual você adiciona callbacks, em vez de passar callbacks para uma função.
*/
async function fetchPostById(postId) {
  try {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
}

/* Função para fazer uma requisição e imprimir um post usando Axios 

O que é ?
    Axios é um cliente HTTP baseado em Promises para fazer requisições. Pode ser utilizado tanto no navegador quando no Node.js.
*/
async function fetchAndPrintPost(postId) {
  try {
    const post = await fetchPostById(postId);
    console.log('Post:', post);
  } catch (error) {
    console.error('Erro:', error);
  }
}

// Usando as funções
const postId = 1;
fetchAndPrintPost(postId);


