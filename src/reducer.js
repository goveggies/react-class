import { UPDATE_TITLE, TOGGLE_CLOCK } from "./actions";

const appReducer = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_TITLE:
      return { ...state, appTitle: action.payload };
    case TOGGLE_CLOCK:
      return { ...state, clockDisplayed: action.payload };
    default:
      return state;
  }
};

export default appReducer;
