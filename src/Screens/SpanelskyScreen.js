import React from "react";
import "./screenstyles.css";

import { Layout } from "./Layout/Layout";
import { Spanelsky } from "../Components/Spanelsky";

export const SpanelskyScreen = () => {
  return <Layout contentComponent={<Spanelsky />} />;
};