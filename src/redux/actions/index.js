export const isLoading = (loading) => ({
  type: "IS_LOADING",
  loading
});

export const hasErrored = (message) => ({
  type: "HAS_ERRORED",
  message
});

export const pushPalette = (palette) => ({
  type: "PUSH_PALETTE",
  palette
});

export const createProject = (project) => ({
  type: "CREATE_PALETTE",
  project
});

export const isLocked = (locked) => ({
  type: "IS_LOCKED",
  locked
});