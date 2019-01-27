const initialState = {};

const singleMovie = (state = initialState, action) => {
  switch (action.type) {
    case 'ONE_MOVIE_FETCHED': return action.movie;
    default: return state;
  }
};

export default singleMovie;
