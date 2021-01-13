import React from "react";
import "./screenstyles.css";

import { Layout } from "./Layout/Layout";
import { Turistika } from "../Components/Turistika";

export const TuristikaScreen = () => {
  return <Layout contentComponent={<Turistika />} />;
};