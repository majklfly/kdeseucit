import React from "react";
import "./screenstyles.css";

import { Layout } from "./Layout/Layout";
import { Devatatrida } from "../Components/Devatatrida";

export const DevatatridaScreen = () => {
  return <Layout contentComponent={<Devatatrida />} />;
};
