import React, { useState, useEffect } from "react";
import { Button, Container, ListGroup } from "react-bootstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { faUserInjured } from "@fortawesome/free-solid-svg-icons";
import uuid from "uuid";
import "./shoppingList.css";
import { connect } from "react-redux";
//actions
import { getItems, deleteItem } from "../../store/actions/itemActions";
import ItemModal from "./ItemModal";

import PropTypes from "prop-types";

function ShoppingList(props) {
  const [state, setState] = useState({
    items: [
      { id: uuid(), name: "Eggs" },
      { id: uuid(), name: "Milk" },
      { id: uuid(), name: "Steak" },
      { id: uuid(), name: "Water" }
    ]
  });

  const [items, setItems] = useState([
    { id: uuid(), name: "EGGs" },
    { id: uuid(), name: "MilK" },
    { id: uuid(), name: "SteaK" },
    { id: uuid(), name: "WaTe" }
  ]);

  useEffect(() => {
    //console.log("+>");
    //console.log(props);
    props.getItems();
    //console.log(props.getItems);
  }, []);

  const onDeleteClick = id => {
    //console.log("---->", id);
    props.deleteItem(id);
  };

  //  const { items } = items;
  console.log("-----");
  console.log(state);
  console.log(props);
  return (
    <div style={{ color: "black" }}>
      ShopppingList
      <hr />
      <Container>
        <ItemModal />

        <ListGroup>
          <TransitionGroup className="shopping-list">
            {props.item.items.map(({ id, name }) => (
              <CSSTransition key={id} timeout={500} classNames="fade">
                <ListGroup.Item>
                  <Button
                    className="remove-btn"
                    color="danger"
                    size="sm"
                    onClick={
                      onDeleteClick.bind(this, id)
                      //() => {
                      // this.setState(state=>({
                      // items: state.items.filter(item => item.id!==id )}))
                      //*
                      //   setItems(items => items.filter(item => item.id !== id));
                      // }
                    }
                  >
                    &times;
                  </Button>
                  {name} - {id}
                </ListGroup.Item>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </ListGroup>
      </Container>
    </div>
  );
}

ShoppingList.propTypes = {
  getItems: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  item: state.item
});

const mapDispatchToProps = dispatch => {
  return {
    getItems: () => dispatch(getItems()),
    deleteItem: id => dispatch(deleteItem(id))
  };
};

//  { getItems }
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShoppingList);
