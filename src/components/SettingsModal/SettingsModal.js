import React from "react";
import styled from "styled-components";
import closeBlack from "../../img/close-black.svg";
import closeWhite from "../../img/close-white.svg";

const CloseBtn = ({ isDark }) =>
  isDark ? <img src={closeWhite} alt="" /> : <img src={closeBlack} alt="" />;

const SettingOverlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  padding: 20px;
  bottom: 0;
  left: 0;
  z-index: 100;
  display: flex;
  justify-content: center;
  background: var(--settingOverlayBg);
  color: var(--settingsContent);
  transform: ${props => (props.isOpen ? "translateY(0)" : "translateY(100vh)")};
  opacity: ${props => (props.isOpen ? "1" : "0")};
  transition: all 0.3s;
  div {
    max-width: 350px;
    margin: 0 auto;
    position: relative;
    width: 100%;
    h2 {
      width: 100%;
      margin: 0;
      margin-bottom: 0.6em;
      text-align: center;
      color: var(--overlayHeading);
      span {
        text-transform: capitalize;
      }
    }
  }
  button {
    position: absolute;
    top: 0px;
    right: 0px;
  }
  input[type="radio"] {
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
      .circle {
        background: var(--checkIconColor);
        border-color: var(--checkIconColor);
      }
    }
    &:checked + label .circle {
      background-image: url("data:image/svg+xml,%3Csvg width='13' height='9' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1l5.5 7L12 1' stroke='%23FFF' stroke-width='2' fill='none' fill-rule='evenodd'/%3E%3C/svg%3E");
      background-size: 11px;
      background-position: center;
      background-repeat: no-repeat;
      border-color: #39b3ca;
      overflow: visible;
    }
  }
  .circle {
    background: #fff;
    width: 15px;
    height: 15px;
    border-radius: 15px;
    margin-right: 7px;
    display: inline-block;
    border: 1px solid #bbb;
  }
  .fieldRow,
  label {
    display: flex;
    align-items: center;
  }
  form.colors {
    display: flex;
  }
  h3 {
    font-size: 15px;
    font-weight: 700;
  }
`;
const SettingsModal = ({ isOpen, closeModal, darkMode, changeColor }) => (
  <SettingOverlay isOpen={isOpen}>
    <div>
      <h2>Settings</h2>
      <button onClick={closeModal}>
        <CloseBtn isDark={darkMode} />
      </button>
      <form onSubmit={e => e.preventDefault} className="colors">
        <div className="fieldRow">
          <h3>Color Mode</h3>
          <span>
            <input
              type="radio"
              id="light"
              name="colorMode"
              value="light"
              checked={!darkMode}
              onChange={changeColor}
            />
            <label htmlFor="light">
              <span className="circle"></span>
              Light
            </label>
          </span>
          <span>
            <input
              type="radio"
              id="dark"
              name="colorMode"
              value="dark"
              checked={darkMode}
              onChange={changeColor}
            />
            <label htmlFor="dark">
              <span className="circle"></span>
              Dark
            </label>
          </span>
        </div>
      </form>
    </div>
  </SettingOverlay>
);

export default SettingsModal;
