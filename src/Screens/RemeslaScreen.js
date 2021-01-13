import React from "react";
import "./screenstyles.css";

import { Layout } from "./Layout/Layout";
import { Remesla } from "../Components/Remesla";

export const RemeslaScreen = () => {
  return <Layout contentComponent={<Remesla />} />;
};