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
  Input,
  Button,
  CustomInput,
} from 'reactstrap';
import { NavLink as RouterLink, withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getSearchedContent } from '../actions/fetch';

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      searchFilter: '',
      customRadio: 'movies',
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
    const { history, getSearchedContentAction } = this.props;
    const { searchFilter, customRadio } = this.state;
    e.preventDefault();
    getSearchedContentAction(`http://localhost:4100/movies-api/${customRadio}/${searchFilter}`);
    this.setState({
      searchFilter: '',
    });
    history.push('/searched-content');
  }

  render() {
    const { searchFilter, isOpen } = this.state;
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">watchMovies</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mx-auto" navbar>
              <Form onSubmit={this.handleSubmit}>
                <FormGroup row className="flex-nowrap">
                  <Input
                    type="text"
                    name="searchFilter"
                    id="searchFilter"
                    placeholder="Search..."
                    value={searchFilter}
                    onChange={this.handleChange}
                  />
                  <Button type="submit">Go</Button>
                  <CustomInput
                    className="mx-1"
                    type="radio"
                    id="moviesRadio"
                    name="customRadio"
                    label="Movies"
                    value="movies"
                    onChange={this.handleChange}
                  />
                  <CustomInput
                    className="mx-1"
                    type="radio"
                    id="seriesRadio"
                    name="customRadio"
                    label="TV shows"
                    value="series"
                    onChange={this.handleChange}
                  />
                  <CustomInput
                    className="ml-1 mr-2"
                    type="radio"
                    id="actorsRadio"
                    name="customRadio"
                    label="Actors"
                    value="actors"
                    onChange={this.handleChange}
                  />
                </FormGroup>
              </Form>
              <NavItem className="px-2">
                <RouterLink to="/movies/">Movies</RouterLink>
              </NavItem>
              <NavItem className="px-2">
                <RouterLink to="/actors/">Actors</RouterLink>
              </NavItem>
              <NavItem className="px-2">
                <RouterLink to="/series/">TV shows</RouterLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret className="p-0">
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
                    <NavLink href="/add-serie/">Add a TV show</NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink href="/add-actor/">Add an actor</NavLink>
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
  getSearchedContentAction: getSearchedContent,
}, dispatch);

export default withRouter(connect(null, mdtp)(NavBar));
