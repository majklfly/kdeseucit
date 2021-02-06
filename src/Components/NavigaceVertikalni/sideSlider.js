import React, { useState } from "react";
import Slide from "@material-ui/core/Slide";

import { NavigaceVertikalni } from "./NavigaceVertikalni";

export const SideSlider = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="sideKickWrapper">
      <div className="sideKickOverLay" />
      <button
        onClick={() => setIsActive((s) => !s)}
        className="MenuHandlerLeft"
        style={
          isActive
            ? { backgroundColor: "white", color: "black" }
            : { backgroundColor: "black", color: "white" }
        }
      >
        {isActive ? "Zavřít >" : "Předměty >"}
      </button>
      {isActive ? (
        <Slide direction="right" in={isActive} mountOnEnter unmountOnExit>
          <div className="sideKickContentLeft">
            <NavigaceVertikalni sideSlideSetActive={setIsActive} />
          </div>
        </Slide>
      ) : null}
    </div>
  );
};
