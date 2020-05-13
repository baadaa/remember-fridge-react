import React from "react";
import styled from "styled-components";

const SettingOverlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 9;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--settingOverlayBg);
  color: var(--settingsContent);
  transform: ${props => (props.isOpen ? "translateY(0)" : "translateY(100vh)")};
  transition: all 0.3s;
`;
const SettingsModal = ({ isOpen, closeModal, darkMode, changeColor }) => (
  <SettingOverlay isOpen={isOpen}>
    <div>
      MODAL
      <button onClick={closeModal}>CLOSE</button>
      <form>
        <input
          type="radio"
          id="light"
          name="colorMode"
          value="light"
          checked={!darkMode}
          onChange={changeColor}
        />
        <label htmlFor="light">Light</label>
        <input
          type="radio"
          id="dark"
          name="colorMode"
          value="dark"
          checked={darkMode}
          onChange={changeColor}
        />
        <label htmlFor="dark">Dark</label>
      </form>
    </div>
  </SettingOverlay>
);

export default SettingsModal;
