import React from "react";
import { CloseButton } from "../UIElements/ModalButtons";
import { ListModal } from "./styledForShoppingList";

class ShoppingList extends React.Component {
  state = {
    newItem: ""
  };
  addItem = () => {
    if (!this.state.newItem) return;
    const currentList = this.props.shoppingList;
    const newItem = {
      id: `todo-${new Date().getTime()}`,
      content: this.state.newItem,
      completed: false
    };
    this.props.updateShoppingList([...currentList, newItem]);
    this.setState({ newItem: "" });
  };
  checkForKey = e => {
    if (e.keyCode !== 13) return;
    if (!this.state.newItem) return;
    this.addItem();
  };
  changeHandler = e => {
    this.setState({ newItem: e.target.value });
  };
  deleteItem = id => {
    const updatedList = this.props.shoppingList.filter(item => item.id !== id);
    this.props.updateShoppingList(updatedList);
  };
  toggleCheck = id => {
    const updatedList = this.props.shoppingList.map(item => {
      return {
        id: item.id,
        content: item.content,
        completed: item.id === id ? !item.completed : item.completed
      };
    });
    this.props.updateShoppingList(updatedList);
  };
  clearCompleted = () => {
    const filteredList = this.props.shoppingList.filter(
      item => !item.completed
    );

    this.props.updateShoppingList(filteredList);
  };
  renderList = list => {
    return list.map(item => (
      <li className={item.completed ? "completed" : ""} key={item.id}>
        <input
          type="checkbox"
          checked={item.completed}
          className="toggle"
          name={item.id}
          onChange={() => this.toggleCheck(item.id)}
        />
        <label htmlFor={item.id}>
          <span className="square"></span>
          {item.content}
        </label>
        <button className="destroy" onClick={() => this.deleteItem(item.id)}>
          &times;
        </button>
      </li>
    ));
  };
  render() {
    const { isOpen, isDark, closeList, shoppingList } = this.props;
    return (
      <ListModal isOpen={isOpen}>
        <div className="wrapper">
          <h2>Shopping List</h2>
          <CloseButton click={closeList} isDark={isDark} />

          <section className="outer">
            <input
              placeholder="What do you need to buy?"
              type="text"
              value={this.state.newItem}
              onChange={this.changeHandler}
              onKeyUp={this.checkForKey}
            />
            <button onClick={this.addItem}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 30">
                <path d="M20 7v6a1 1 0 01-1 1H6.4l1.8 1.8a1 1 0 010 1.4 1 1 0 01-1.4 0l-3.5-3.5a1 1 0 01-.2-.3 1 1 0 010-.8 1 1 0 01.2-.3l3.5-3.5a1 1 0 011.4 1.4L6.4 12H18V7a1 1 0 012 0z" />
              </svg>
            </button>
            <section className="listWrapper">
              <ul>{this.renderList(shoppingList)}</ul>
            </section>
            <footer>
              <span>
                <strong>
                  {shoppingList.filter(item => !item.completed).length}
                </strong>{" "}
                item left
              </span>
              <button className="clear-completed" onClick={this.clearCompleted}>
                Clear checked items
              </button>
            </footer>
          </section>
        </div>
      </ListModal>
    );
  }
}

export default ShoppingList;
