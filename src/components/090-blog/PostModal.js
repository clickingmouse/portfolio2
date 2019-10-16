import React, { Component, useState } from "react";
import { Button, Modal, Form, Label, Input, FormLabel } from "react-bootstrap";
import { connect } from "react-redux";
import { addPost } from "../../store/actions/postActions";
//import uuid from "uuid";
const PostModal = props => {
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [rant, setRant] = useState(
    "ipsum Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet, voluptates error id eos delectus veritatis hic autem nihil culpa officia itaque consectetur, architecto quisquam molestias tenetur sed ducimus. Enim, velit?"
  );

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleTitleChange = e => {
    //    setName({ [e.targe.name]: e.target.value });
    setTitle(e.target.value);
  };

  const handleRantChange = e => {
    //    setName({ [e.targe.name]: e.target.value });
    setRant(e.target.value);
  };

  const handleChange = e => {
    //    setName({ [e.targe.name]: e.target.value });
    setName(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();
    console.log("XXX");
    const newPost = {
      //id: uuid(),
      title: title,
      rant: rant,
      author: "K"
    };
    // add item via addItem action
    props.addPost(newPost);
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
        New Post
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Form onSubmit={onSubmit}>
          <Modal.Header closeButton>
            <Modal.Title>Add New Post</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Add New Post!
            <Form.Group controlId="formItem">
              <Form.Label>Subject</Form.Label>
              <Form.Control
                type="text"
                placeholder="Subject"
                onChange={handleTitleChange}
              />
              <Form.Control
                as="textarea"
                type="textarea"
                placeholder="Rant"
                rows="5"
                onChange={handleRantChange}
              />
              <Form.Text className="text-muted">add new item....</Form.Text>
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="primary" type="submit">
              Add Post
            </Button>
          </Modal.Footer>{" "}
        </Form>
      </Modal>
    </>
  );
};

const mapStateToProps = () => {};

const mapDispatchToProps = dispatch => {
  return {
    addPost: post => {
      dispatch(addPost(post));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(PostModal);
