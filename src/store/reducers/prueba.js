import * as actionTypes from "../actions/type";

const initialState = {
  texto: "Soy una prueba"
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.TEST:
      return { ...state, texto: action.payload };
  }
  return state;
};

export default reducer;
