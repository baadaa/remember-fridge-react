import React from "react";
import styled from "styled-components";
import { CloseButton } from "../UIElements/ModalButtons";
import addToList from "../../img/add-to-list.svg";
const ListModal = styled.div`
  position: absolute;
  padding: 20px;
  background: var(--settingOverlayBg);
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  transition: transform 0.3s, opacity 0.3s;
  z-index: 999;
  transform: ${props =>
    props.isOpen ? "translateX(0)" : "translateX(-100vw)"};
  opacity: ${props => (props.isOpen ? 1 : 0)};
  .wrapper {
    max-width: 350px;
    margin: 0 auto;
    position: relative;
    width: 100%;
    box-sizing: border-box;
    h2 {
      width: 100%;
      margin: 0;
      margin-bottom: 1.5em;
      text-align: center;
      color: var(--overlayHeading);
      transition: color 0.3s;
    }
  }
  button {
    margin: 0;
    padding: 0;
    border: 0;
    background: transparent;
    font-size: 100%;
    vertical-align: baseline;
    font-family: inherit;
    font-weight: inherit;
    color: inherit;
    -webkit-appearance: none;
    appearance: none;
  }

  button,
  input[type="checkbox"] {
    outline: none;
  }

  .listapp {
    background: var(--shoppingListBg);
    width: 100%;
    max-width: 550px;
    position: relative;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
  }

  .listapp input::input-placeholder {
    font-weight: 300;
    color: var(--uncheckedIconLabel);
  }

  .new-todo,
  .edit {
    position: relative;
    margin: 0;
    width: 100%;
    font-size: 1.1rem;
    font-weight: inherit;
    line-height: 1.3em;
    border: 0;
    outline: none;
    color: inherit;
    padding: 3px;
    border: 1px solid var(--shoppingListBorder);
    box-shadow: inset 0 -1px 5px 0 rgba(0, 0, 0, 0.2);
    box-sizing: border-box;
  }

  .new-todo {
    padding: 16px 40px 16px 48px;
    border: none;
    background: rgba(0, 0, 0, 0.003);
    box-shadow: inset 0 -2px 1px rgba(0, 0, 0, 0.03);
  }
  .add-todo-btn {
    border: none;
    outline: none;
    img {
      width: 30px;
      height: 30px;
    }
    position: absolute;
    top: 15px;
    right: 10px;
    cursor: pointer;
  }

  .main-list {
    position: relative;
    z-index: 2;
    border-top: 1px solid var(--shoppingListBorder);
  }

  label[for="toggle-all"] {
    display: none;
  }

  .toggle-all {
    position: absolute;
    top: -55px;
    left: -8px;
    width: 60px;
    height: 34px;
    text-align: center;
    border: none; /* Mobile Safari */
  }

  .toggle-all::before {
    content: "❯";
    font-size: 1.7rem;
    color: #e6e6e6;
    box-sizing: border-box;
    padding: 2rem;
  }

  .toggle-all:checked::before {
    color: #737373;
  }

  .todo-list {
    margin: 0;
    padding: 0;
    list-style: none;

    li {
      position: relative;
      border-bottom: 1px solid var(--shoppingListBorder);
      .toggle {
        text-align: center;
        width: 40px;
        /* auto, since non-WebKit browsers doesn't support input styling */
        height: auto;
        position: absolute;
        // width: 0;
        top: 0;
        bottom: 0;
        margin: auto 0;
        border: none; /* Mobile Safari */
        -webkit-appearance: none;
        appearance: none;
      }
      &:last-child {
        border-bottom: none;
      }

      &.editing {
        border-bottom: none;
        padding: 0;

        & .edit {
          display: block;
          width: 506px;
          padding: 13px 17px 12px 17px;
          margin: 0 0 0 43px;
        }

        & .view {
          display: none;
        }
      }
    }
  }

  .todo-list li .toggle::after {
    background: red;
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
  }

  .todo-list li .toggle:checked::after {
    position: absolute;
    background: red;
    border-radius: 30px;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
  }

  .todo-list li label {
    white-space: pre-line;
    word-break: break-all;
    padding: 15px 60px 15px 15px;
    margin-left: 35px;
    display: block;
    line-height: 1.2;
    // transition: color 0.4s;
    font-size: 1rem;
    font-weight: 200;
  }

  .todo-list li.completed label {
    color: #d9d9d9;
    text-decoration: line-through;
  }

  .todo-list li .destroy {
    position: absolute;
    top: 0;
    right: 10px;
    bottom: 0;
    width: 40px;
    height: 40px;
    margin: auto 0;
    font-size: 2rem;
    color: #cc9a9a;
    margin-bottom: 11px;
    transition: color 0.2s ease-out;
  }

  .todo-list li:hover .destroy {
    display: block;
  }

  .todo-list li .edit {
    display: none;
  }

  .todo-list li.editing:last-child {
    margin-bottom: -1px;
  }

  footer.shoplist {
    font-size: 0.8rem;
    color: #777;
    padding: 10px 15px;
    height: 20px;
    text-align: center;
    border-top: 1px solid var(--shoppingListBorder);
  }

  footer.shoplist::before {
    content: "";
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    height: 50px;
    overflow: hidden;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2), 0 8px 0 -3px var(--shoppingListBg),
      0 9px 1px -3px rgba(0, 0, 0, 0.2), 0 16px 0 -6px var(--shoppingListBg),
      0 17px 2px -6px rgba(0, 0, 0, 0.2);
  }

  .list-count {
    float: left;
    text-align: left;
  }

  .list-count strong {
    font-weight: 300;
  }

  .clear-completed,
  html .clear-completed:active {
    float: right;
    position: relative;
    line-height: 20px;
    text-decoration: none;
    cursor: pointer;
    position: relative;
  }

  .clear-completed:hover {
    text-decoration: underline;
  }

  .info {
    margin: 65px auto 0;
    color: #bfbfbf;
    font-size: 10px;
    text-shadow: 0 1px 0 rgba(255, 255, 255, 0.5);
    text-align: center;
  }

  .info p {
    line-height: 1;
  }

  .info a {
    color: inherit;
    text-decoration: none;
    font-weight: 400;
  }

  .info a:hover {
    text-decoration: underline;
  }

  /*
    Hack to remove background from Mobile Safari.
    Can't use it globally since it destroys checkboxes in Firefox
  */
  @media screen and (-webkit-min-device-pixel-ratio: 0) {
    .toggle-all,
    .todo-list li .toggle {
      background: none;
    }

    .todo-list li .toggle {
      height: 40px;
    }

    .toggle-all {
      -webkit-transform: rotate(90deg);
      transform: rotate(90deg);
      -webkit-appearance: none;
      appearance: none;
    }
  }

  @media (max-width: 430px) {
    footer.shoplist {
      height: 50px;
    }

    .filters {
      bottom: 10px;
    }
  }
`;
class ShoppingList extends React.Component {
  state = {
    newItem: "",
    items: [
      {
        id: "123124",
        content: "Avocado",
        completed: false
      },
      {
        id: "125434",
        content: "Apple",
        completed: true
      },
      {
        id: "2131233124",
        content: "Avocado",
        completed: false
      },
      {
        id: "154524",
        content: "Avocado",
        completed: true
      }
    ]
  };
  addItem = () => {
    if (!this.state.newItem) return;
    const currentList = this.state.items;
    const newItem = {
      id: `todo-${new Date().getTime()}`,
      content: this.state.newItem,
      completed: false
    };
    this.setState({ items: [...currentList, newItem], newItem: "" });
  };
  editIconContent = id => {
    console.log(id);
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
    const updatedList = this.state.items.filter(item => item.id !== id);
    this.setState({ items: updatedList });
  };
  toggleCheck = id => {
    const updatedList = this.state.items.map(item => {
      return {
        id: item.id,
        content: item.content,
        completed: item.id === id ? !item.completed : item.completed
      };
    });
    this.setState({ items: updatedList });
  };
  clearCompleted = () => {
    const filteredList = this.state.items.filter(item => !item.completed);
    this.setState({ items: filteredList });
  };
  render() {
    const { isOpen, isDark, closeList } = this.props;
    return (
      <ListModal isOpen={isOpen}>
        <div className="wrapper">
          <h2>Shopping List</h2>
          <CloseButton click={closeList} isDark={isDark} />

          <section className="listapp">
            <header className="header">
              <input
                className="new-todo"
                placeholder="What do you need to buy?"
                type="text"
                value={this.state.newItem}
                onChange={this.changeHandler}
                onKeyUp={this.checkForKey}
              />
              <button className="add-todo-btn" onClick={this.addItem}>
                <img src={addToList} alt="" />
              </button>
            </header>
            <section className="main-list">
              <input className="toggle-all" type="checkbox" />
              <label htmlFor="toggle-all">Mark all as complete</label>
              <ul className="todo-list">
                {this.state.items.map(item => (
                  <li
                    className={item.completed ? "completed" : ""}
                    key={item.id}
                  >
                    <div className="view">
                      <input
                        type="checkbox"
                        checked={item.completed}
                        className="toggle"
                        name={item.id}
                        onChange={() => this.toggleCheck(item.id)}
                      />
                      <label
                        htmlFor={item.id}
                        onDoubleClick={() => console.log("attempting to edit")}
                      >
                        {item.content}
                      </label>
                      <button
                        className="destroy"
                        onClick={() => this.deleteItem(item.id)}
                      >
                        &times;
                      </button>
                      <input
                        className="edit"
                        value={item.content}
                        onChange={() => this.editItemContent(item.id)}
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </section>
            <footer className="shoplist">
              <span className="list-count">
                <strong>
                  {this.state.items.filter(item => !item.completed).length}
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
