import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Container, ListGroup } from "react-bootstrap";
//import uuid from "uuid";
import PostModal from "./PostModal";
import PropTypes from "prop-types";
import { getPosts } from "../../store/actions/postActions";

function BlogPanel(props) {
  //posts
  // const [blogs, setBlogs] = useState([
  //   { id: uuid(), title: "ABC", rant: "uno", date: Date.now() },
  //   { id: uuid(), title: "DEF", rant: "doz", date: Date.now() },
  //   { id: uuid(), title: "GHI", rant: "tres", date: Date.now() }
  // ]);

  useEffect(() => {
    props.getPosts();
  }, []);

  //console.log(blogs);
  console.log(props);
  return (
    <div>
      Panel
      <hr />
      <PostModal />
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

const mapDispatchToProps = dispatch => ({
  getPosts: () => dispatch(getPosts())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BlogPanel);
