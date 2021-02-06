import * as React from "react";

import { Link } from "react-router-dom";

const Paragraph = ({ link, title, i, setExpanded }) => (
  <div
    className="paragraph"
    onClick={() => {
      setExpanded(i);
      window.scrollTo(0, 0);
    }}
  >
    <Link to={"/" + link}>
      <h5>{title}</h5>
    </Link>
  </div>
);

export const ContentPlaceholder = ({ link, title, i, setExpanded }) => (
  <div
    variants={{ collapsed: { scale: 0.8 }, open: { scale: 1 } }}
    transition={{ duration: 0.8 }}
    className="content-placeholder"
  >
    <Paragraph link={link} title={title} i={i} setExpanded={setExpanded} />
  </div>
);
