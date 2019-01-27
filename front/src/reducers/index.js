import { combineReducers } from 'redux';
import { fetchHasErrored, fetchIsLoading } from './fetch';
import fetchedMovies from './fetchedMovies';
import fetchedSeries from './fetchedSeries';
import bigPosters from './bigPosters';
import searchedMovies from './searchedMovies';
import singleMovie from './singleMovie';
import fetchedActors from './fetchedActors';

const allReducers = combineReducers({
  fetchHasErrored,
  fetchIsLoading,
  fetchedMovies,
  fetchedSeries,
  bigPosters,
  searchedMovies,
  singleMovie,
  fetchedActors,
});

export default allReducers;
