export const isLoading = (boolean) => ({
  type: "IS_LOADING",
  loading: boolean
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

export const isLocked = (boolean) => ({
  type: "IS_LOCKED"
});