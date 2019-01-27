const initialState = [];

const fetchedSeries = (state = initialState, action) => {
  switch (action.type) {
    case 'SERIES_FETCHED': return action.series;
    default: return state;
  }
};

export default fetchedSeries;
