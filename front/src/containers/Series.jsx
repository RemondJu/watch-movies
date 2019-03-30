import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SerieCard from '../components/SerieCard';
import './Series.css';
import { fetchSeries } from '../actions/fetch';

class Series extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const { fetchSeriesAction, series } = this.props;
    if (!series[0]) {
      fetchSeriesAction('http://localhost:4100/movies-api/series');
    }
  }

  render() {
    const { series } = this.props;
    return (
      <div className="Series">
        <h2>Series</h2>
        <div className="seriesDisplay">
          {series.map(serie => (
            <SerieCard
              key={serie.id}
              id={serie.id}
              name={serie.name}
              date={serie.release_date}
              rating={serie.rating}
              category={serie.category}
              director={serie.director}
              poster={serie.poster}
              seasons={serie.seasons}
            />
          ))}
        </div>
      </div>
    );
  }
}

const mstp = state => ({
  series: state.fetchedSeries,
});

const mdtp = dispatch => bindActionCreators({
  fetchSeriesAction: fetchSeries,
}, dispatch);

export default connect(mstp, mdtp)(Series);
