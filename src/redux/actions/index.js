export const isLoading = loading => ({
  type: 'IS_LOADING',
  loading
});

export const hasErrored = message => ({
  type: 'HAS_ERRORED',
  message
});

export const getCurrentProject = project => ({
  type: 'GET_CURRENT_PROJECT',
  project
});

export const getAllProjects = projects => ({
  type: 'GET_ALL_PROJECTS',
  projects
});

export const setCurrentColors = colors => ({
  type: 'SET_CURRENT_COLORS',
  colors
});
