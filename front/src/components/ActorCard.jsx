import React, { Component } from 'react';
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from 'reactstrap';
import { withRouter } from 'react-router-dom';

class ActorCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.getActorToUpdate = this.getActorToUpdate.bind(this);
    this.deleteActor = this.deleteActor.bind(this);
  }

  getActorToUpdate(id) {
    const { history, getOneActorAction } = this.props;
    getOneActorAction(`http://localhost:4100/movies-api/movie/${id}`);
    history.push(`/modify-movie/${id}`);
  }

  deleteActor(id) {
    const { history } = this.props;
    const config = {
      method: 'DELETE',
    };
    fetch(`http://localhost:4100/movies-api/movie/${id}`, config);
    history.push('/actors');
  }

  render() {
    const {
      name,
      lastname,
      age,
      id,
      picture,
    } = this.props;
    console.log(this.props);
    return (
      <div className="ActorCard">
        <Card>
          <CardImg top width="100%" src={picture} alt="Card image cap" />
          <CardBody>
            <CardTitle>{`${name} ${lastname}`}</CardTitle>
            <CardSubtitle>{age}</CardSubtitle>
            <Button onClick={() => this.deleteActor(id)}>Delete</Button>
            <Button type="button" onClick={() => this.getActorToUpdate(id)}>Update</Button>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default withRouter(ActorCard);
