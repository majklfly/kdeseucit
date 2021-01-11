import React from "react";
import "./screenstyles.css";

import { Layout } from "./Layout/Layout";
import { Stredni } from "../Components/Stredni";

export const StredniScreen = () => {
  return <Layout contentComponent={<Stredni />} />;
};
