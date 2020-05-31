import React from "react";
import fridgeIcon from "../../img/fridge_icon.svg";
import freezerIcon from "../../img/freezer_icon.svg";
import listIcon from "../../img/list_icon.svg";
import settingsIcon from "../../img/settings_icon.svg";
import { SideNav, BottomNav } from "./styledForNavBar";

const BottomNavBar = ({
  currentSection,
  sectionChange,
  toggleSettings,
  toggleList
}) => (
  <BottomNav>
    <div>
      <button
        data-id="fridge"
        className={currentSection === "fridge" ? "active" : ""}
        onClick={sectionChange}
      >
        <img
          style={{ width: "24px", height: "34px" }}
          src={fridgeIcon}
          alt=""
        />
        Fridge
      </button>
      <button
        data-id="freezer"
        className={currentSection === "freezer" ? "active" : ""}
        onClick={sectionChange}
      >
        <img
          style={{ width: "25px", height: "34px" }}
          src={freezerIcon}
          alt=""
        />
        Freezer
      </button>
      <button onClick={toggleList}>
        <img style={{ width: "30px", height: "34px" }} src={listIcon} alt="" />
        Shopping List
      </button>
      <button onClick={toggleSettings}>
        <img
          style={{ width: "32px", height: "34px" }}
          src={settingsIcon}
          alt=""
        />
        Settings
      </button>
    </div>
  </BottomNav>
);
const SideNavBar = ({
  currentSection,
  sectionChange,
  toggleSettings,
  toggleList
}) => {
  return (
    <SideNav>
      <button
        data-id="fridge"
        className={currentSection === "fridge" ? "active" : ""}
        onClick={sectionChange}
      >
        <img
          style={{ width: "24px", height: "34px" }}
          src={fridgeIcon}
          alt=""
        />
        Fridge
      </button>
      <button
        data-id="freezer"
        className={currentSection === "freezer" ? "active" : ""}
        onClick={sectionChange}
      >
        <img
          style={{ width: "25px", height: "34px" }}
          src={freezerIcon}
          alt=""
        />
        Freezer
      </button>
      <button onClick={e => toggleList(e)}>
        <img style={{ width: "30px", height: "34px" }} src={listIcon} alt="" />
        Shopping List
      </button>
      <button onClick={e => toggleSettings(e)}>
        <img
          style={{ width: "32px", height: "34px" }}
          src={settingsIcon}
          alt=""
        />
        Settings
      </button>
    </SideNav>
  );
};

export { BottomNavBar, SideNavBar };
