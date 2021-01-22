const INGRIDIENT_PRICE = {
  meat: 35,
  bacon: 25,
  cheese: 55,
  salad: 10,
};

const initialState = {
  ingridients: {
    meat: 0,
    bacon: 0,
    cheese: 0,
    salad: 0,
  },
  price: 10,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADDINGRIDIENT":
      return {
        ...state,
        ingridients: {
          ...state.ingridients,
          [action.value]: state.ingridients[action.value] + 1,
        },
        price: state.price + INGRIDIENT_PRICE[action.value],
      };
    case "REMOVEINGRIDIENT":
      return {
        ...state,
        ingridients: {
          ...state.ingridients,
          [action.value]: state.ingridients[action.value] - 1,
        },
        price: state.price - INGRIDIENT_PRICE[action.value],
      };
    default:
      return state;
  }
};

export default reducer;
