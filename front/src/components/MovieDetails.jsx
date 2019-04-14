import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getOneMovie } from '../actions/fetch';

const MovieDetails = (props) => {
  const { match, movie } = props;

  useEffect(() => {
    if (!movie.name) {
      props.getOneMovie(`http://localhost:4100/movies-api/movie/${match.params.id}`);
    }
  });


  return (
    <div className="MovieDetails">
      <h1>{`Movie details : ${movie.name || 'loading'}`}</h1>
    </div>
  );
};

const mapDispatchToProps = dispatch => bindActionCreators({
  getOneMovie,
}, dispatch);

const mapStateToProps = state => ({
  movie: state.singleMovie,
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetails);
