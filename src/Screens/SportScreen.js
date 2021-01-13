import React from "react";
import "./screenstyles.css";

import { Layout } from "./Layout/Layout";
import { Sport } from "../Components/Sport";

export const SportScreen = () => {
  return <Layout contentComponent={<Sport />} />;
};