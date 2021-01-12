import React from "react";
import "./screenstyles.css";

import { Layout } from "./Layout/Layout";
import { Zemepis } from "../Components/Zemepis";

export const ZemepisScreen = () => {
  return <Layout contentComponent={<Zemepis />} />;
};