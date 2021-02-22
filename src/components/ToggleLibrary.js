import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";

const ToggleLibrary = ({ seeLibrary, setSeeLibrary }) => {
  const toggleHandler = () => {
    setSeeLibrary(!seeLibrary);
  };

  return (
    <div className="toggle-library" onClick={toggleHandler}>
      {!seeLibrary && <h2>Library</h2>}
      <FontAwesomeIcon className="music-icon" icon={faMusic} size="2x" />
    </div>
  );
};

export default ToggleLibrary;
