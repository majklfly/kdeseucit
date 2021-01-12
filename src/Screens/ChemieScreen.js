import React from "react";
import "./screenstyles.css";

import { Layout } from "./Layout/Layout";
import { Chemie } from "../Components/Chemie";

export const ChemieScreen = () => {
  return <Layout contentComponent={<Chemie />} />;
};