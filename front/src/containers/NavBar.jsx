import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Form,
  FormGroup,
  Label,
  Input,
  Col,
  Button,
} from 'reactstrap';
import { NavLink as RouterLink, withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getSearchedMovies } from '../actions/fetch';

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      searchFilter: '',
    };
    this.toggle = this.toggle.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  toggle() {
    const { isOpen } = this.state;
    this.setState({
      isOpen: !isOpen,
    });
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit(e) {
    const { history, getSearchedMoviesAction } = this.props;
    const { searchFilter } = this.state;
    e.preventDefault();
    getSearchedMoviesAction(`http://localhost:4100/movies-api/search/${searchFilter}`);
    this.setState({
      searchFilter: '',
    });
    history.push('/searched-movies');
  }

  render() {
    const { searchFilter, isOpen } = this.state;
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">watchMovies</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <Form onSubmit={this.handleSubmit}>
                <FormGroup row>
                  <Label for="searchFilter" sm={2}>Search</Label>
                  <Col sm={7}>
                    <Input
                      type="text"
                      name="searchFilter"
                      id="searchFilter"
                      placeholder="Type something in..."
                      value={searchFilter}
                      onChange={this.handleChange}
                    />
                  </Col>
                  <Button sm={2} type="submit">Go</Button>
                </FormGroup>
              </Form>
              <NavItem>
                <RouterLink to="/movies/">Movies</RouterLink>
              </NavItem>
              <NavItem>
                <RouterLink to="/actors/">Actors</RouterLink>
              </NavItem>
              <NavItem>
                <RouterLink to="/series/">Series</RouterLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Actions
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    My watchlist
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink href="/add-movie/">Add a movie</NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    Add a serie
                  </DropdownItem>
                  <DropdownItem>
                    Add an actor
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

const mdtp = dispatch => bindActionCreators({
  getSearchedMoviesAction: getSearchedMovies,
}, dispatch);

export default withRouter(connect(null, mdtp)(NavBar));
