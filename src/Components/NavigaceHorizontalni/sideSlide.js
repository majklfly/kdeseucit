import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion, useAnimation } from "framer-motion";

import { NavigaceHorizontalni } from "./NavigaceHorizontalni";

const SidekickWrapper = styled.div`
  position: absolute;
  width: 45%;
  height: auto;
  top: 14%;
  right: 5%;
  pointer-events: none;
  z-index: 1;
`;
const SidekickOverlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: ${({ overlayColor }) => overlayColor};
  pointer-events: all;
  z-index: 0;
`;

const SidekickBody = styled(motion.div)`
  position: relative;
  z-index: 1;
  pointer-events: all;
  background-color: #fff;
  padding: 40px 60px 30px 30px;
  height: 100%;
  max-width: ${({ width }) => `${width}px`};
  position: relative;
  box-sizing: border-box;
`;

const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MenuHandler = styled(motion.button)`
  border: none;
  background: transparent;
  border-radius: 0;
  position: absolute;
  top: 10px;
  left: 0px;
  outline: none;
  z-index: 5;
`;

export const SideSliderHorizontalni = ({
  overlayColor = "transparent",
  width = 200,
}) => {
  const [isActive, setIsActive] = useState(false);
  const constrols = useAnimation();

  console.log(isActive);

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
      color: "#000",
    },
    inactive: {
      x: -220,
      color: "#000",
    },
  };

  return (
    <SidekickWrapper>
      <SidekickOverlay overlayColor={overlayColor} />
      <SidekickBody
        width={width}
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
        <MenuHandler
          onTap={() => setIsActive((s) => !s)}
          variants={menuHandlerStyles}
          transition={{ type: "spring", damping: 60, stiffness: 180 }}
        >
          {isActive ? "Zavřít" : "Třídy"}
        </MenuHandler>
        <Content>
          <NavigaceHorizontalni />
        </Content>
      </SidekickBody>
    </SidekickWrapper>
  );
};
