import React from "react";
import closeBlack from "../../img/close-black.svg";
import closeWhite from "../../img/close-white.svg";
const CloseButton = ({ isDark }) =>
  isDark ? <img src={closeWhite} alt="" /> : <img src={closeBlack} alt="" />;

export default CloseButton;
