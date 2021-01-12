import React from "react";
import "./screenstyles.css";

import { Layout } from "./Layout/Layout";
import { Prirodoveda } from "../Components/Prirodoveda";

export const PrirodovedaScreen = () => {
  return <Layout contentComponent={<Prirodoveda />} />;
};