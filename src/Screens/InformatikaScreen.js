import React from "react";
import "./screenstyles.css";

import { Layout } from "./Layout/Layout";
import { Informatika } from "../Components/Informatika";

export const InformatikaScreen = () => {
  return <Layout contentComponent={<Informatika />} />;
};