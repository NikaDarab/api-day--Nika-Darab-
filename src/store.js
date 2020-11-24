/* eslint-disable no-console */
import item from './item';

const items = [];
let hideCheckeditems = false;

const findById = function (id) {
  return this.items.find(currentItem => currentItem.id === id);
};

const addItem = function (item) {
  this.items.push(item);
};


const findAndUpdate = function (id,newData) {
  let found= this.findById(id);
  let merge = Object.assign(found,newData);
  return merge;
};

export default {
  items,
  hideCheckeditems,
  findById,
  addItem,
  findAndUpdate,
};