import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './containers/HomePage';
import Movies from './containers/Movies';
import NavBar from './containers/NavBar';
import './App.css';
import Actors from './containers/Actors';
import AddMovieForm from './containers/ModifyMovieForm';
import SearchedMovies from './components/SearchedMovies';
import ModifyMovieForm from './containers/ModifyMovieForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/movies" component={Movies} />
          <Route path="/actors" component={Actors} />
          <Route path="/series" component={Movies} />
          <Route path="/add-movie" component={AddMovieForm} />
          <Route path="/searched-movies" component={SearchedMovies} />
          <Route path="/modify-movie/:id" component={ModifyMovieForm} />
        </Switch>
      </div>
    );
  }
}

export default App;
