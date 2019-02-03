import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import MainCarousel from './MainCarousel';
import Footer from '../components/Footer';
import { fetchMovies, fetchSeries } from '../actions/fetch';
import BestMovies from '../components/BestMovies';
import BestSeries from '../components/BestSeries';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const { fetchMoviesAction, fetchSeriesAction } = this.props;
    fetchMoviesAction('http://localhost:4100/movies-api/movies');
    fetchSeriesAction('http://localhost:4100/movies-api/series');
  }

  render() {
    const { movies, series } = this.props;
    return (
      <div className="HomePage">
        <MainCarousel />
        <BestMovies movies={movies} />
        <BestSeries series={series} />
        <Footer />
      </div>
    );
  }
}

const mstp = state => ({
  movies: state.fetchedMovies,
  series: state.fetchedSeries,
});

const mdtp = dispatch => bindActionCreators({
  fetchMoviesAction: fetchMovies,
  fetchSeriesAction: fetchSeries,
}, dispatch);

export default connect(mstp, mdtp)(HomePage);
