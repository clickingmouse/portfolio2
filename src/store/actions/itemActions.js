import { GET_ITEMS, ADD_ITEM, DELETE_ITEM, ITEMS_LOADING } from "./itemTypes";
import axios from "axios";
// export const getItems = () => {
//   return {
//     type: GET_ITEMS
//   };
// };

export const getItems = () => dispatch => {
  dispatch(setItemsLoading());
  axios.get("/api/items").then(res => {
    dispatch({
      type: GET_ITEMS,
      payload: res.data
    });
  });

  return {
    type: GET_ITEMS
  };
};

// export const addItem = item => {
//   //console.log("====>", id);
//   return {
//     type: ADD_ITEM,
//     payload: item
//   };
// };

export const addItem = item => dispatch => {
  //console.log("====>", item);
  axios.post("/api/items", item).then(res =>
    dispatch({
      type: ADD_ITEM,
      payload: res.data
    })
  );
};

// export const deleteItem = id => {
//   //console.log("====>", id);
//   return {
//     type: DELETE_ITEM,
//     payload: id
//   };
// };

export const deleteItem = id => dispatch => {
  console.log("====>", id);
  axios.delete(`/api/items/${id}`).then(res =>
    dispatch({
      type: DELETE_ITEM,
      payload: id
    })
  );
};

export const setItemsLoading = () => {
  return {
    type: ITEMS_LOADING
  };
};
