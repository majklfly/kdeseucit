import React from "react";
import "./screenstyles.css";

import { Layout } from "./Layout/Layout";
import { Ekologie } from "../Components/Ekologie";

export const EkologieScreen = () => {
  return <Layout contentComponent={<Ekologie />} />;
};