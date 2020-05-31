import styled from "styled-components";

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
    appearance: none;
  }

  button,
  input[type="checkbox"] {
    outline: none;
  }

  .outer {
    background: var(--shoppingListBg);
    width: 100%;
    border-radius: 5px;
    max-width: 550px;
    position: relative;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
    input::input-placeholder {
      font-weight: 300;
      color: var(--uncheckedIconLabel);
    }
    & > button {
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
  }

  input[type="text"] {
    position: relative;
    margin: 0;
    width: 100%;
    font-size: 1.1rem;
    font-weight: inherit;
    line-height: 1.3em;
    border: 0;
    outline: none;
    color: inherit;
    border: 1px solid var(--shoppingListBorder);
    box-sizing: border-box;
    padding: 16px 40px 16px 16px;
    background: rgba(0, 0, 0, 0.003);
    box-shadow: inset 0 -2px 1px rgba(0, 0, 0, 0.03);
  }

  .listWrapper {
    position: relative;
    z-index: 2;
    border-top: 1px solid var(--shoppingListBorder);
  }

  ul {
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
        appearance: none;
      }
      &:last-child {
        border-bottom: none;
      }
      label {
        white-space: pre-line;
        word-break: break-all;
        padding: 15px 60px 15px 15px;
        display: flex;
        line-height: 1.2;
        font-size: 1rem;
        font-weight: 200;
      }
    }
  }

  ul li.completed label {
    color: var(--uncheckedIconLabel) !important;
    text-decoration: line-through;
  }

  ul li .destroy {
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

  ul li:hover .destroy {
    display: block;
  }

  footer {
    font-size: 0.8rem;
    color: #777;
    padding: 10px 15px;
    height: 20px;
    display: flex;
    justify-content: space-between;
    border-top: 1px solid var(--shoppingListBorder);
    &::before {
      content: "";
      position: absolute;
      right: 0;
      bottom: 0;
      left: 0;
      height: 50px;
      overflow: hidden;
      box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2),
        0 8px 0 -3px var(--shoppingListBg), 0 9px 1px -3px rgba(0, 0, 0, 0.2),
        0 16px 0 -6px var(--shoppingListBg), 0 17px 2px -6px rgba(0, 0, 0, 0.2);
    }
  }

  .clear-completed {
    position: relative;
    line-height: 20px;
    text-decoration: none;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }

  /*
    Hack to remove background from Mobile Safari.
    Can't use it globally since it destroys checkboxes in Firefox
  */
  @media screen and (-webkit-min-device-pixel-ratio: 0) {
    ul li .toggle {
      background: none;
    }

    ul li .toggle {
      height: 40px;
    }
  }

  @media (max-width: 430px) {
    footer {
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

export { ListModal };
