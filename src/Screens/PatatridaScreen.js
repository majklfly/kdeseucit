import React from "react";
import "./screenstyles.css";

import { Layout } from "./Layout/Layout";
import { Patatrida } from "../Components/Patatrida";

export const PatatridaScreen = () => {
  return <Layout contentComponent={<Patatrida />} />;
};
