import React from "react";
import "./screenstyles.css";

import { Layout } from "./Layout/Layout";
import { Sestatrida } from "../Components/Sestatrida";

export const SestatridaScreen = () => {
  return <Layout contentComponent={<Sestatrida />} />;
};
