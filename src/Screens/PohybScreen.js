import React from "react";
import "./screenstyles.css";

import { Layout } from "../Screens/Layout/Layout";
import { Pohyb } from "../Components/Pohyb";

export const PohybScreen = () => {
  return <Layout contentComponent={<Pohyb />} />;
};