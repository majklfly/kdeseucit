import React, { useState } from "react";
import Slide from "@material-ui/core/Slide";
import { NavigaceHorizontalni } from "./NavigaceHorizontalni";

export const SideSliderHorizontalni = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="sideKickWrapper">
      <div className="sideKickOverLay" />
      <button
        onClick={() => setIsActive((s) => !s)}
        className="MenuHandlerRight"
        style={
          isActive
            ? { backgroundColor: "white", color: "black" }
            : { backgroundColor: "black", color: "white" }
        }
      >
        {isActive ? "Zavřít >" : "< Třídy"}
      </button>
      {isActive ? (
        <Slide direction="left" in={isActive} mountOnEnter unmountOnExit>
          <div className="sideKickContentRight">
            <NavigaceHorizontalni sideSlideSetActive={setIsActive} />
          </div>
        </Slide>
      ) : null}
    </div>
  );
};
