const initialState = [];

const searchedMovies = (state = initialState, action) => {
  switch (action.type) {
    case 'SEARCHED_CONTENT_FETCHED': return action.content;
    default: return state;
  }
};

export default searchedMovies;
