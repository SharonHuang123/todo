import { ADD_ITEM, FILTER_ITEM, REMOVE_ITEM } from './actionTypes.js';

let id = 0;

export const addItem = (text) => {
  return {
    type: ADD_ITEM,
    id: ++id,
    text: text
  }
}

export const filterItem = (filter) => {
  return {
    type: FILTER_ITEM,
    filter: filter
  }
}

export const removeItem = (id) => {
  return {
    type: REMOVE_ITEM,
    id: id
  }
}