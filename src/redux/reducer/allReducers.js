export const loadingReducer = (state = false, action) => {
  switch (action.type) {
    case 'SET_LOADING':
      return action.loading;
    default:
      return state;
  }
};

export const currentColorsReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_CURRENT_COLORS':
      return action.colors;
    default:
      return state;
  }
};

export const currentProjectReducer = (state = {}, action) => {
  switch (action.type) {
    case 'GET_CURRENT_PROJECT':
      return action.project;
    default:
      return state;
  }
};

export const allProjectsReducer = (state = [], action) => {
  switch (action.type) {
    case 'GET_ALL_PROJECTS':
      return action.projects;
    default:
      return state;
  }
};
