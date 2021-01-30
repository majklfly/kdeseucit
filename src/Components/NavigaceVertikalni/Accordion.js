import { useState, useEffect } from "react";

import { motion, AnimatePresence } from "framer-motion";
import { ContentPlaceholder } from "./ContentPlaceholder";

export const Accordion = ({
  i,
  expanded,
  setExpanded,
  title,
  buttons,
  closeTabs,
}) => {
  let isOpen = i === expanded;
  const [btnArray, setBtnArray] = useState([]);

  useEffect(() => {
    if (buttons && btnArray.length === 0) {
      Object.keys(buttons).forEach((key) => {
        setBtnArray((arr) => [...arr, [key, buttons[key]]]);
      });
    }
  }, [buttons, btnArray]);

  if (closeTabs) {
    isOpen = false;
  }

  return (
    <>
      <motion.header
        initial={false}
        className="buttonHeader"
        animate={{ backgroundColor: "#000000" }}
        onClick={() => {
          setExpanded(isOpen ? false : i);
          window.scrollTo(0, 0);
        }}
      >
        {title}
      </motion.header>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.section
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "fit-content" },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.4, linear: [0.04, 0.62, 0.23, 0.98] }}
          >
            {btnArray.map((btn) => {
              return (
                <ContentPlaceholder
                  link={btn[0]}
                  title={btn[1]}
                  i={i}
                  setExpanded={setExpanded}
                />
              );
            })}
          </motion.section>
        )}
      </AnimatePresence>
    </>
  );
};
