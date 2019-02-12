export const UPDATE_TITLE = "UPDATE_TITLE";
export const TOGGLE_CLOCK = "TOGGLE_CLOCK";

export const updateTitle = newTitle => ({
  type: UPDATE_TITLE,
  payload: newTitle
});

export const toggleClock = isDisplayed => ({
  type: TOGGLE_CLOCK,
  payload: isDisplayed
});
