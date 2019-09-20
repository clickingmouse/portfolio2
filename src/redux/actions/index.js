import { ADD_ITEM } from "./types";

export function addItemActionCreator(payload) {
  return {
    type: ADD_ITEM,
    payload
  };
}
