const initialState = [];

const searchedMovies = (state = initialState, action) => {
  switch (action.type) {
    case 'SEARCHED_MOVIES_FETCHED': return action.movies;
    default: return state;
  }
};

export default searchedMovies;
