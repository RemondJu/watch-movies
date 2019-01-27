const initialState = [];

const fetchedActors = (state = initialState, action) => {
  switch (action.type) {
    case 'ACTORS_FETCHED': return action.actors;
    default: return state;
  }
};

export default fetchedActors;
