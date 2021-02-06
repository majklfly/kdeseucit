import { useState, useEffect } from "react";

import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";

import { ContentPlaceholder } from "./ContentPlaceholder";

export const CustomAccordion = ({
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
    <Accordion expanded={isOpen}>
      <AccordionSummary
        initial="false"
        className="buttonHeader"
        onClick={() => {
          setExpanded(isOpen ? false : i);
          window.scrollTo(0, 0);
        }}
      >
        <div>{title}</div>
      </AccordionSummary>
      {isOpen && (
        <AccordionDetails key="content" className="AccordionDetails">
          {btnArray.map((btn, i) => {
            return (
              <ContentPlaceholder
                link={btn[0]}
                title={btn[1]}
                i={i}
                key={i}
                setExpanded={setExpanded}
              />
            );
          })}
        </AccordionDetails>
      )}
    </Accordion>
  );
};
