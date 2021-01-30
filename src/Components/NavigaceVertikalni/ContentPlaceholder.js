import * as React from "react";
import { motion } from "framer-motion";

import { Link } from "react-router-dom";

const Paragraph = ({ link, title, i, setExpanded }) => (
  <motion.div
    onClick={() => {
      setExpanded(i);
      window.location.reload();
      window.scrollTo(0, 0);
    }}
  >
    <Link to={"/" + link} className="paragraph">
      <h5>{title}</h5>
    </Link>
  </motion.div>
);

export const ContentPlaceholder = ({ link, title, i, setExpanded }) => (
  <motion.div
    variants={{ collapsed: { scale: 0.8 }, open: { scale: 1 } }}
    transition={{ duration: 0.8 }}
    className="content-placeholder"
  >
    <Paragraph link={link} title={title} i={i} setExpanded={setExpanded} />
  </motion.div>
);
