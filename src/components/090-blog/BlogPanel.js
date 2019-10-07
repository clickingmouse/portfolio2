import React, { useState } from "react";
import { connect } from "react-redux";
import { Container, ListGroup } from "react-bootstrap";
import uuid from "uuid";
import ItemModal from "./ItemModal";
import PropTypes from "prop-types";
function BlogPanel(props) {
  //posts
  const [blogs, setBlogs] = useState([
    { id: uuid(), title: "ABC", rant: "uno", date: Date.now() },
    { id: uuid(), title: "DEF", rant: "doz", date: Date.now() },
    { id: uuid(), title: "GHI", rant: "tres", date: Date.now() }
  ]);
  console.log(blogs);
  console.log(props);
  return (
    <div>
      Panel
      <hr />
      <ListGroup>
        {props.blogs.posts.map(({ title, date }) => (
          <ListGroup.Item>
            {title} - {date}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
}

BlogPanel.propTypes = {
  //  getItems: PropTypes.func.isRequired,
  blogs: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  blogs: state.post
});

export default connect(
  mapStateToProps,
  null
)(BlogPanel);
