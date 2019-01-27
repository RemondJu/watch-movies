export const dataErrored = bool => ({
  type: 'DATA_ERRORED',
  hasErrored: bool,
});

export const dataIsLoading = bool => ({
  type: 'DATA_IS_LOADING',
  isLoading: bool,
});

export const moviesFetched = movies => ({
  type: 'MOVIES_FETCHED',
  movies,
});

export const fetchMovies = url => (dispatch) => {
  dispatch(dataIsLoading(true));
  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      dispatch(dataIsLoading(false));
      return response;
    })
    .then(response => response.json())
    .then(data => dispatch(moviesFetched(data)))
    .catch(() => dispatch(dataErrored(true)));
};

export const seriesFetched = series => ({
  type: 'SERIES_FETCHED',
  series,
});

export const fetchSeries = url => (dispatch) => {
  dispatch(dataIsLoading(true));
  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      dispatch(dataIsLoading(false));
      return response;
    })
    .then(response => response.json())
    .then(data => dispatch(seriesFetched(data)))
    .catch(() => dispatch(dataErrored(true)));
};

export const actorsFetched = actors => ({
  type: 'ACTORS_FETCHED',
  actors,
});

export const fetchActors = url => (dispatch) => {
  dispatch(dataIsLoading(true));
  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      dispatch(dataIsLoading(false));
      return response;
    })
    .then(response => response.json())
    .then(data => dispatch(actorsFetched(data)))
    .catch(() => dispatch(dataErrored(true)));
};

export const bigPostersFetched = posters => ({
  type: 'BIG_POSTERS_FETCHED',
  posters,
});

export const getBigPosters = url => (dispatch) => {
  dispatch(dataIsLoading(true));
  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      dispatch(dataIsLoading(false));
      return response;
    })
    .then(response => response.json())
    .then(data => dispatch(bigPostersFetched(data)))
    .catch(() => dispatch(dataErrored(true)));
};

export const searchedMoviesFetched = movies => ({
  type: 'SEARCHED_MOVIES_FETCHED',
  movies,
});

export const getSearchedMovies = url => (dispatch) => {
  dispatch(dataIsLoading(true));
  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      dispatch(dataIsLoading(false));
      return response;
    })
    .then(response => response.json())
    .then(data => dispatch(searchedMoviesFetched(data)))
    .catch(() => dispatch(dataErrored(true)));
};

export const oneMovieFetched = movie => ({
  type: 'ONE_MOVIE_FETCHED',
  movie,
});

export const getOneMovie = url => (dispatch) => {
  dispatch(dataIsLoading(true));
  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      dispatch(dataIsLoading(false));
      return response;
    })
    .then(response => response.json())
    .then(data => dispatch(oneMovieFetched(data)))
    .catch(() => dispatch(dataErrored(true)));
};
