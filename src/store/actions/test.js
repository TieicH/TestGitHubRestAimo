import * as actionType from "./type";

export const prueba = texto => {
  return {
    type: actionType.TEST,
    payload: texto
  };
};
