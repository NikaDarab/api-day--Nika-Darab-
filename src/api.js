/* eslint-disable no-console */
/* eslint-disable no-unreachable */
/* eslint-disable no-unused-vars */


const BASE_URL = 'https://thinkful-list-api.herokuapp.com/nika-darab';

const getItems = function () {
  return fetch(`${BASE_URL}/items`);

};

const createItem = function(name) {
  let newItem = JSON.stringify({
    name 
  });

  return fetch(`${BASE_URL}/items`, {
    method: 'POST', 
    headers: {
      'Content-Type': 'application/json',
    },
    body: newItem,
  });
};

export default {
  getItems,
  createItem
};