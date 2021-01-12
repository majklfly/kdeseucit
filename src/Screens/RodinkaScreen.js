import React from "react";
import "./screenstyles.css";

import { Layout } from "./Layout/Layout";
import { Rodinka } from "../Components/Rodinka";

export const RodinkaScreen = () => {
  return <Layout contentComponent={<Rodinka />} />;
};