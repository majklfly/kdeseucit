import React from "react";
import "./screenstyles.css";

import { Layout } from "./Layout/Layout";
import { Design } from "../Components/Design";

export const DesignScreen = () => {
  return <Layout contentComponent={<Design />} />;
};