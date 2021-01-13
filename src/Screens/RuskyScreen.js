import React from "react";
import "./screenstyles.css";

import { Layout } from "./Layout/Layout";
import { Rusky } from "../Components/Rusky";

export const RuskyScreen = () => {
  return <Layout contentComponent={<Rusky />} />;
};