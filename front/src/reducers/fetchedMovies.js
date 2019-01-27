const initialState = [];

const fetchedMovies = (state = initialState, action) => {
  switch (action.type) {
    case 'MOVIES_FETCHED': return action.movies;
    default: return state;
  }
};

export default fetchedMovies;
