import React from "react";
import "./screenstyles.css";

import { Layout } from "./Layout/Layout";
import { Tretitrida } from "../Components/Tretitrida";

export const TretitridaScreen = () => {
  return <Layout contentComponent={<Tretitrida />} />;
};
