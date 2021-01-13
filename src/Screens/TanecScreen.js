import React from "react";
import "./screenstyles.css";

import { Layout } from "./Layout/Layout";
import { Tanec } from "../Components/Tanec";

export const TanecScreen = () => {
  return <Layout contentComponent={<Tanec />} />;
};