export const fetchHasErrored = (state = false, action) => {
  switch (action.type) {
    case 'DATA_ERRORED': return action.hasErrored;
    default: return state;
  }
};

export const fetchIsLoading = (state = false, action) => {
  switch (action.type) {
    case 'DATA_IS_LOADING': return action.isLoading;
    default: return state;
  }
};
