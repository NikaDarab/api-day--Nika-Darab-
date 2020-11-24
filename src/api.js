/* eslint-disable no-console */
/* eslint-disable no-unreachable */
/* eslint-disable no-unused-vars */


const BASE_URL = 'https://thinkful-list-api.herokuapp.com/nika-darab';

const getItems = function () {

  return fetch(`${BASE_URL}/items`);

};



export default {
  getItems
};