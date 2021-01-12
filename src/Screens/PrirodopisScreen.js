import React from "react";
import "./screenstyles.css";

import { Layout } from "./Layout/Layout";
import { Prirodopis } from "../Components/Prirodopis";

export const PrirodopisScreen = () => {
  return <Layout contentComponent={<Prirodopis />} />;
};