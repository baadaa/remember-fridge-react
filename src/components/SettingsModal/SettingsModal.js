import React from "react";
import styled from "styled-components";
import CloseButton from "../UIElements/CloseButton";
import googleG from "../../img/google-g.svg";

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
  .wrapper {
    font-size: 0.75rem;
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
      span {
        text-transform: capitalize;
      }
    }
  }
  button.closeModal {
    position: absolute;
    top: 0px;
    right: 0px;
  }

  input[type="radio"],
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
      .circle,
      .square {
        background: var(--checkIconColor);
        border-color: var(--checkIconColor);
      }
    }
    &:checked + label .circle,
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
    }
  }

  .square,
  .circle {
    background: #fff;
    width: 15px;
    height: 15px;
    border-radius: 15px;
    margin-right: 7px;
    display: inline-block;
    border: 1px solid #bbb;
  }
  .square {
    border-radius: 3px;
  }
  .fieldRow,
  label {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: flex-start;
  }
  .fieldRow {
    flex-wrap: wrap;
    align-items: flex-start;
  }
  .fieldRow + .fieldRow {
    margin-top: 10px;
  }
  h3 {
    margin: 0;
    font-size: 1em;
    padding-top: 1em;
    flex: 0 0 90px;
    font-weight: 700;
    color: var(--formLabelText);
  }
  .option,
  .singleOption {
    border-radius: 4px 0 0 4px;
    flex: 1;
    // text-align: center;
    background: var(--formFieldBg);
    padding: 10px 0 10px 20px;
    &:nth-of-type(2) {
      border-radius: 0 4px 4px 0;
      padding-left: 0;
    }
  }

  .singleOption {
    flex: 1;
    border-radius: 4px;
    padding: 10px 20px;
    flex-wrap: wrap;
    .dev-note {
      color: var(--missingField);
    }
  }
  .google {
    margin: 10px 0px;
    background: white;
    border: none;
    padding: 10px;
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    line-height: 1;
    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.2);
    color: #202020;
    border-radius: 10px;
    font-size: 14px;
    img {
      width: 15px;
      height: 15px;
      margin-right: 10px;
    }
    &[disabled] {
      opacity: 0.6;
      color: var(--disabledButtonColor);
    }
  }
  .data-reset {
    margin-top: 30px;
    background: var(--modalSubsectionBg);
    border: 1px solid var(--modalSubsectionBorder);
    padding: 20px;
    color: var(--modalSubsectionText);
    transition: all 0.3s;
    border-radius: 4px;
    h4 {
      margin: 0;
      font-size: 14px;
    }
    p {
      margin: 10px 0 10px;
      font-size: 12px;
      font-weight: 700;
    }
    .buttons {
      display: flex;
      justify-content: space-between;
      .loadSamples {
        color: var(--removeButton);
        background: #fff;
      }
      .removeAll {
        color: #fff;
        background: var(--removeButton);
      }
    }
  }
  button.big {
    border: none;
    outline: none;
    border-radius: 30px;
    padding: 10px 20px;
    height: 45px;
    font-size: 14px;
    font-weight: 700;
    flex-basis: 48%;
    transition: opacity 0.3s, transform 0.3s;
    background: var(--saveButton);
    color: #fff;
    margin-left: 90px;
    width: calc(100% - 90px);
    margin-top: 15px;
  }
  button.small {
    flex-basis: 48%;
    border-radius: 5px;
    font-weight: 700;
    font-size: 13px;
    padding: 10px;
    border: 1px solid var(--removeButton);
  }
`;
const SettingsModal = ({ isOpen, closeModal, darkMode, changeColor }) => (
  <SettingOverlay isOpen={isOpen}>
    <div className="wrapper">
      <h2>Settings</h2>
      <button
        className="closeModal"
        onClick={closeModal}
        style={{ background: "transparent", border: "none" }}
      >
        <CloseButton isDark={darkMode} />
      </button>
      <form onSubmit={e => e.preventDefault} className="settings">
        <div className="fieldRow">
          <h3>Color Mode</h3>
          <span className="option">
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
          <span className="option">
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
        <div className="fieldRow">
          <h3>Data Storage</h3>
          <span className="singleOption">
            <input
              type="checkbox"
              id="cloud"
              name="dataStorage"
              value="cloud"
              disabled={true}
              // checked={!darkMode}
              // onChange={changeColor}
            />
            <label htmlFor="cloud">
              <span className="square"></span>
              Enable Cloud Storage
            </label>
            <button className="google" disabled={true}>
              <img src={googleG} alt="" />
              Sign in with Google
            </button>
            <span className="dev-note">Development in progress</span>
          </span>
        </div>
      </form>
      <button className="big" onClick={closeModal}>
        Save and close
      </button>
      <div className="data-reset">
        <h4>Reset your data</h4>
        <p>
          These actions will overwrite your existing data, and cannot be undone.
        </p>
        <div className="buttons">
          <button className="small loadSamples">Load sample data</button>
          <button className="small removeAll">Delete everything</button>
        </div>
      </div>
    </div>
  </SettingOverlay>
);

export default SettingsModal;
