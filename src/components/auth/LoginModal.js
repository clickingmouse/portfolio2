import React, { Component, useState, useEffect } from "react";
import {
  Button,
  Modal,
  Form,
  Label,
  Input,
  FormLabel,
  Nav,
  Alert
} from "react-bootstrap";
import { connect } from "react-redux";
//import uuid from "uuid";
import PropTypes from "prop-types";
//import { register } from "../../store/actions/authActions";
import { login } from "../../store/actions/authActions";

import { clearErrors } from "../../store/actions/errorActions";

const LoginModal = props => {
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  const [state, setState] = useState({
    //    name: "",
    email: "",
    password: "",
    msg: null
  });

  // useEffect(() => {
  //   props.getPosts();
  // }, []);

  useEffect(() => {
    //console.log(">>>>>>>>>>>>>>mounted or updated");
    //console.log(props.error);
    const { error, isAuthenticated } = props;
    if (error.id === "LOGIN_FAIL") {
      //      this.setState({msg:error.msg.msg})
      setState({ msg: error.msg.msg });
    } else {
      setState({ msg: null });
    }

    // when modal is open， if authenticated, close modal
    if (show) {
      if (isAuthenticated) {
        setShow(false);
      }
    }

    // props.getPosts();
  }, [props.error]);

  const handleClose = () => {
    props.clearErrors();
    setShow(false);
  };
  const handleShow = () => setShow(true);

  const handleChange = e => {
    //    setName({ [e.targe.name]: e.target.value });
    //console.log(">>>");
    setState({ ...state, [e.target.name]: e.target.value });
    setName(e.target.value);
    //console.log("=====state========>", state);
  };

  const onSubmit = e => {
    e.preventDefault();
    console.log("XXX");
    const { email, password } = state;
    //Create user obj
    const user = {
      email,
      password
    };

    //Attempt to login
    //    console.log("===============>", newUser);
    props.login(user);

    // close model
    handleClose();
  };
  return (
    <>
      <Nav.Link onClick={handleShow} href="#">
        Login
      </Nav.Link>

      <Modal show={show} onHide={handleClose}>
        <Form onSubmit={onSubmit}>
          <Modal.Header closeButton>
            <Modal.Title>Login</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Woohoo, you're reading this text in a modal!
            {state.msg ? <Alert variant="danger">{state.msg}</Alert> : null}
            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter Email"
                className="mb-3"
                onChange={handleChange}
                name="email"
              />
              <Form.Text className="text-muted">add name....</Form.Text>
            </Form.Group>{" "}
            <Form.Group controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter Email"
                className="mb-3"
                onChange={handleChange}
                name="password"
              />
              <Form.Text className="text-muted">add password..</Form.Text>
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="primary" type="submit">
              Login
            </Button>
          </Modal.Footer>{" "}
        </Form>
      </Modal>
    </>
  );
};

LoginModal.propTypes = {
  isAuthenticated: PropTypes.bool,
  error: PropTypes.object.isRequired,
  login: PropTypes.func.isRequired,
  clearErrors: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.error
});

const mapDispatchToProps = dispatch => {
  return {
    login: user => {
      dispatch(login(user));
    },
    clearErrors: () => {
      dispatch(clearErrors());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginModal);
