import { GET_ITEMS, ADD_ITEM, DELETE_ITEM, ITEMS_LOADING } from "./itemTypes";
import { tokenConfig } from "./authActions";
import { returnErrors } from "./errorActions";
import axios from "axios";
// export const getItems = () => {
//   return {
//     type: GET_ITEMS
//   };
// };

export const getItems = () => dispatch => {
  dispatch(setItemsLoading());
  axios
    .get("/api/items")
    .then(res =>
      dispatch({
        type: GET_ITEMS,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );

  // return {
  //   type: GET_ITEMS
  // };
};

// export const addItem = item => {
//   //console.log("====>", id);
//   return {
//     type: ADD_ITEM,
//     payload: item
//   };
// };

export const addItem = item => (dispatch, getState) => {
  //console.log("====>", item);
  axios
    .post("/api/items", item, tokenConfig(getState))
    .then(res =>
      dispatch({
        type: ADD_ITEM,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

// export const deleteItem = id => {
//   //console.log("====>", id);
//   return {
//     type: DELETE_ITEM,
//     payload: id
//   };
// };

export const deleteItem = id => (dispatch, getState) => {
  console.log("====>", id);
  axios
    .delete(`/api/items/${id}`, tokenConfig(getState))
    .then(res =>
      dispatch({
        type: DELETE_ITEM,
        payload: id
      })
    )
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const setItemsLoading = () => {
  return {
    type: ITEMS_LOADING
  };
};
