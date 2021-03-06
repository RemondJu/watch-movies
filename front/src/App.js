import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './containers/HomePage';
import Movies from './containers/Movies';
import NavBar from './containers/NavBar';
import './App.css';
import Actors from './containers/Actors';
import AddMovieForm from './components/AddMovieForm';
import SearchedContent from './components/SearchedContent';
import ModifyMovieForm from './containers/ModifyMovieForm';
import AddSeriesForm from './components/AddSeriesForm';
import AddActorForm from './components/AddActorForm';
import Series from './containers/Series';
import MovieDetails from './components/MovieDetails';

const App = () => (
  <div className="App">
    <NavBar />
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/movies" component={Movies} />
      <Route path="/movie/:id" component={MovieDetails} />
      <Route path="/actors" component={Actors} />
      <Route path="/series" component={Series} />
      <Route path="/add-movie" component={AddMovieForm} />
      <Route path="/add-serie" component={AddSeriesForm} />
      <Route path="/add-actor" component={AddActorForm} />
      <Route path="/searched-content" component={SearchedContent} />
      <Route path="/modify-movie/:id" component={ModifyMovieForm} />
    </Switch>
  </div>
);

export default App;
