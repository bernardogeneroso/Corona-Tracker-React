const INITIAL_STATE = {
  active: true,
  inputSearch: "",
};

export default function course(state = INITIAL_STATE, action) {
  if (action.type === "TOGGLE_ACTIVE") {
    return {
      active: true,
      inputSearch: action.inputSearch,
    };
  }

  if (action.type === "TOGGLE_CHANGE") {
    return {
      ...state,
      inputSearch: action.inputSearch,
    };
  }

  if (action.type === "TOGGLE_INACTIVE") {
    return {
      active: false,
      inputSearch: "",
    };
  }

  return state;
}
