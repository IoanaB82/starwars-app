const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_FAV":
      return state.includes(action.name) ? state : [...state, action.name];

    case "DELETE_FAV":
      return state.filter((item) => item !== action.name);

    default: {
      return state;
    }
  }
};

export default reducer;
