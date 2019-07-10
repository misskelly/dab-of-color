export const loadingReducer = (state = false, action) => {
  switch (action.type) {
    case 'SET_LOADING':
      return action.loading;
    default:
      return state;
  }
}

export const currentColorsReducer = (state = [], action) => {
  switch (action.type) {
    case 'GET_CURRENT_COLORS':
      return action.colors;
    default:
      return state;
  }
}