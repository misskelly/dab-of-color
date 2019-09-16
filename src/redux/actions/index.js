export const isLoading = loading => ({
  type: 'IS_LOADING',
  loading
});

export const hasErrored = message => ({
  type: 'HAS_ERRORED',
  message
});

export const setCurrentProject = project => ({
  type: 'SET_CURRENT_PROJECT',
  project
});

export const setAllProjects = projects => ({
  type: 'SET_ALL_PROJECTS',
  projects
});

export const setCurrentColors = colors => ({
  type: 'SET_CURRENT_COLORS',
  colors
});
