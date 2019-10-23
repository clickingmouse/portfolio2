import React, { Component, useState } from "react";
import { Button, Modal, Form, Label, Input, FormLabel } from "react-bootstrap";
import { connect } from "react-redux";
import { addItem } from "../../store/actions/itemActions";
//import uuid from "uuid";
import PropTypes from "prop-types";
const ItemModal = props => {
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChange = e => {
    //    setName({ [e.targe.name]: e.target.value });
    console.log("itemHandleChange");
    setName(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();
    console.log("XXX");
    const newItem = {
      //id: uuid(),
      name: name
    };
    // add item via addItem action
    props.addItem(newItem);
    // close model
    handleClose();
  };
  return (
    <>
      {props.isAuthenticated ? (
        <Button
          variant="primary"
          onClick={handleShow}
          style={{ marginBottom: "2rem" }}
        >
          Add Item
        </Button>
      ) : (
        <h4 className="mb-3 ml-4">Please login to mange items</h4>
      )}

      <Modal show={show} onHide={handleClose}>
        <Form onSubmit={onSubmit}>
          <Modal.Header closeButton>
            <Modal.Title>Add to Shopping List</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Woohoo, you're reading this text in a modal!
            <Form.Group controlId="formItem">
              <Form.Label>Add Item</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter item to add"
                onChange={handleChange}
              />
              <Form.Text className="text-muted">add new item....</Form.Text>
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="primary" type="submit">
              Add Item
            </Button>
          </Modal.Footer>{" "}
        </Form>
      </Modal>
    </>
  );
};

ItemModal.propTypes = {
  isAuthenticated: PropTypes.bool
};
const mapStateToProps = state => ({
  item: state.item,
  isAuthenticated: state.auth.isAuthenticated
});
const mapDispatchToProps = dispatch => {
  return {
    addItem: item => {
      dispatch(addItem(item));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemModal);
