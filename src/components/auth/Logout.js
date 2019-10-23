import React, { Fragment } from "react";
import { connect } from "react-redux";
import { logout } from "../../store/actions/authActions";
import { Nav } from "react-bootstrap";
import PropTypes from "prop-types";
const Logout = props => {
  return (
    <>
      <Nav.Link onClick={props.logout} href="#">
        logout
      </Nav.Link>
    </>
  );
};

Logout.propTypes = {
  logout: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
  logout: () => {
    dispatch(logout());
  }
});

export default connect(
  null,
  mapDispatchToProps
)(Logout);
