import React, { Component, useState } from "react";
import { Button, Modal, Form, Label, Input, FormLabel } from "react-bootstrap";
import { connect } from "react-redux";
import { addItem } from "../../store/actions/itemActions";
//import uuid from "uuid";
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
      <Button
        variant="primary"
        onClick={handleShow}
        style={{ marginBottom: "2rem" }}
      >
        Add Item
      </Button>

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

const mapStateToProps = state => ({
  item: state.item
});
const mapDispatchToProps = dispatch => {
  return {
    addItem: item => {
      dispatch(addItem(item));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(ItemModal);
