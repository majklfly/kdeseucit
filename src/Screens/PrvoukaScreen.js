import React from "react";
import "./screenstyles.css";

import { Layout } from "./Layout/Layout";
import { Prvouka } from "../Components/Prvouka";

export const PrvoukaScreen = () => {
  return <Layout contentComponent={<Prvouka />} />;
};