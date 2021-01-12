import React from "react";
import "./screenstyles.css";

import { Layout } from "./Layout/Layout";
import { Dejepis } from "../Components/Dejepis";

export const DejepisScreen = () => {
  return <Layout contentComponent={<Dejepis />} />;
};