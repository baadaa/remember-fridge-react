import React from "react";
import styled from "styled-components";
import { CloseButton } from "../UIElements/ModalButtons";
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
    border-radius: 5px;
    max-width: 550px;
    position: relative;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
  }

  .listapp input::input-placeholder {
    font-weight: 300;
    color: var(--uncheckedIconLabel);
  }

  .new-todo {
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
    padding: 16px 40px 16px 16px;
    border: none;
    background: rgba(0, 0, 0, 0.003);
    box-shadow: inset 0 -2px 1px rgba(0, 0, 0, 0.03);
  }
  .add-todo-btn {
    border: none;
    outline: none;
    svg {
      width: 30px;
      height: 30px;
      fill: var(--settingsContent);
    }
    position: absolute;
    top: 15px;
    right: 10px;
    cursor: pointer;
    opacity: 0.4;
    transition: opacity 0.3s;
    &:hover {
      opacity: 1;
    }
  }

  .main-list {
    position: relative;
    z-index: 2;
    border-top: 1px solid var(--shoppingListBorder);
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
    }
  }

  .todo-list li label {
    white-space: pre-line;
    word-break: break-all;
    padding: 15px 60px 15px 15px;
    display: flex;
    line-height: 1.2;
    font-size: 1rem;
    font-weight: 200;
  }

  .todo-list li.completed label {
    color: var(--uncheckedIconLabel) !important;
    text-decoration: line-through;
  }

  .todo-list li .destroy {
    position: absolute;
    top: 0;
    right: 5px;
    bottom: 0;
    width: 40px;
    height: 40px;
    margin: auto 0;
    font-size: 2rem;
    opacity: 0.3;
    color: var(--formLabelText);
    margin-bottom: 11px;
    transition: all 0.2s ease-out;
    &:hover {
      opacity: 1;
    }
  }

  .todo-list li:hover .destroy {
    display: block;
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
    .todo-list li .toggle {
      background: none;
    }

    .todo-list li .toggle {
      height: 40px;
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
  input[type="checkbox"] {
    opacity: 0;
    position: fixed;
    width: 0;
    &:focus + label {
      border-color: var(--checkIconColor);
      color: var(--checkIconLabel);
    }
    &:checked + label {
      border-color: var(--checkIconColor);
      color: var(--checkIconLabel);
      .square {
        background: var(--checkIconColor);
        border-color: var(--checkIconColor);
      }
    }
    &:checked + label .square {
      background-image: url("data:image/svg+xml,%3Csvg width='13' height='9' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1l5.5 7L12 1' stroke='%23FFF' stroke-width='2' fill='none' fill-rule='evenodd'/%3E%3C/svg%3E");
      background-size: 11px;
      background-position: center;
      background-repeat: no-repeat;
      border-color: #39b3ca;
      overflow: visible;
    }
    &[disabled] + label {
      color: #999;
      cursor: default;
    }
  }
  .square {
    background: var(--settingOverlaydBg);
    width: 15px;
    height: 15px;
    border-radius: 3px;
    margin-right: 15px;
    display: inline-block;
    border: 1px solid #bbb;
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
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 30">
                  <path d="M20 7v6a1 1 0 01-1 1H6.4l1.8 1.8a1 1 0 010 1.4 1 1 0 01-1.4 0l-3.5-3.5a1 1 0 01-.2-.3 1 1 0 010-.8 1 1 0 01.2-.3l3.5-3.5a1 1 0 011.4 1.4L6.4 12H18V7a1 1 0 012 0z" />
                </svg>
              </button>
            </header>
            <section className="main-list">
              {/* <input
                className="toggle-all"
                type="checkbox"
                value={this.state.items.every(item => item.completed === true)}
              />
              <label htmlFor="toggle-all">Mark all as complete</label> */}
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
                      <label htmlFor={item.id}>
                        <span className="square"></span>
                        {item.content}
                      </label>
                      <button
                        className="destroy"
                        onClick={() => this.deleteItem(item.id)}
                      >
                        &times;
                      </button>
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
