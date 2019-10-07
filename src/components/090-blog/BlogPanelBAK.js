import React, { useState } from "react";

import { Container, ListGroup } from "react-bootstrap";
import uuid from "uuid";

export default function BlogPanel() {
  //posts
  const [blogs, setBlogs] = useState([
    { id: uuid(), title: "ABC", rant: "uno", date: Date.now() },
    { id: uuid(), title: "DEF", rant: "doz", date: Date.now() },
    { id: uuid(), title: "GHI", rant: "tres", date: Date.now() }
  ]);
  console.log(blogs);
  return (
    <div>
      Panel
      <hr />
      <ListGroup>
        {blogs.map(({ title, date }) => (
          <ListGroup.Item>
            {title} - {date}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
}
