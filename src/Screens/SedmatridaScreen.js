import React from "react";
import "./screenstyles.css";

import { Layout } from "./Layout/Layout";
import { Sedmatrida } from "../Components/Sedmatrida";

export const SedmatridaScreen = () => {
  return <Layout contentComponent={<Sedmatrida />} />;
};
