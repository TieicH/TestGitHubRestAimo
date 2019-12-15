import { combineReducers } from "redux";
import pruebaReducer from "./prueba";

export const rootReducer = combineReducers({
  prueba: pruebaReducer
});
