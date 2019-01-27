const initialState = [];

const bigPosters = (state = initialState, action) => {
  switch (action.type) {
    case 'BIG_POSTERS_FETCHED': return action.posters;
    default: return state;
  }
};

export default bigPosters;
