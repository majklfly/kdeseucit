import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

import { NavigaceHorizontalni } from "./NavigaceHorizontalni";

export const SideSliderHorizontalni = ({ width = 200 }) => {
  const [isActive, setIsActive] = useState(false);
  const constrols = useAnimation();

  useEffect(() => {
    constrols.start(isActive ? "active" : "inactive");
  }, [isActive, constrols]);

  const sidekickBodyStyles = {
    active: {
      x: 0,
    },
    inactive: {
      x: width + 120,
    },
  };

  const menuHandlerStyles = {
    active: {
      x: 0,
      backgroundColor: "white",
      color: "#000",
    },
    inactive: {
      x: -220,
      backgroundColor: "black",
      color: "white",
    },
  };

  return (
    <div className="sideKickWrapperRight">
      <div className="sideKickOverLayRight" />
      <motion.div
        width={width}
        className="sideKickBodyRight"
        drag="x"
        dragElastic={0.1}
        dragConstraints={{
          left: -width,
          right: 0,
        }}
        dragMomentum={false}
        onDragEnd={(_event, info) => {
          const isDraggingLeft = info.offset.x < 0;
          const multiplier = isDraggingLeft ? 1 / 4 : 2 / 3;
          const threshold = width * multiplier;

          if (Math.abs(info.point.x) > threshold && isActive) {
            setIsActive(false);
          } else if (Math.abs(info.point.x) < threshold && !isActive) {
            setIsActive(true);
          } else {
            constrols.start(isActive ? "active" : "inactive");
          }
        }}
        animate={constrols}
        variants={sidekickBodyStyles}
        transition={{ type: "spring", damping: 60, stiffness: 180 }}
      >
        <motion.button
          onTap={() => setIsActive((s) => !s)}
          variants={menuHandlerStyles}
          className="MenuHandlerRight"
          transition={{ type: "spring", damping: 60, stiffness: 180 }}
        >
          {isActive ? "Zavřít >" : "< Třídy"}
        </motion.button>
        <div className="sideKickContent">
          <NavigaceHorizontalni />
        </div>
      </motion.div>
    </div>
  );
};
