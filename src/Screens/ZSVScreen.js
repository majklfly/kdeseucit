import React from "react";
import "./screenstyles.css";

import { Layout } from "./Layout/Layout";
import { ZSV } from "../Components/ZSV";

export const ZSVScreen = () => {
  return <Layout contentComponent={<ZSV />} />;
};