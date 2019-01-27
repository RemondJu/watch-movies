import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchActors } from '../actions/fetch';
import ActorCard from '../components/ActorCard';

class Actors extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  };

  componentDidMount() {
    const { fetchActorsAction } = this.props; 
    fetchActorsAction('http://localhost:4100/movies-api/actors');
  }

  render() { 
    const { fetchedActors } = this.props;
    return ( 
      <div className="Actors">
        <h2>Actors</h2>
        <div className="actorsDisplay">
        {fetchedActors[0] ? fetchedActors.map(actor => (
          <ActorCard
            key={actor.id}
            id={actor.id}
            name={actor.name}
            lastname={actor.lastname}
            age={actor.age}
          />
        )) : ''}
        </div>
      </div>
     );
  }
}

const mstp = state => ({
  fetchedActors: state.fetchedActors,
});

const mdtp = dispatch => bindActionCreators({
  fetchActorsAction: fetchActors,
}, dispatch);
 
export default connect(mstp, mdtp)(Actors);