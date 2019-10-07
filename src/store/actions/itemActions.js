import { GET_ITEMS, ADD_ITEM, DELETE_ITEM } from "./itemTypes";

export const getItems = () => {
  return {
    type: GET_ITEMS
  };
};

export const deleteItem = id => {
  //console.log("====>", id);
  return {
    type: DELETE_ITEM,
    payload: id
  };
};

export const addItem = item => {
  //console.log("====>", id);
  return {
    type: ADD_ITEM,
    payload: item
  };
};
