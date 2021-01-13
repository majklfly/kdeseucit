import React from "react";
import "./screenstyles.css";

import { Layout } from "./Layout/Layout";
import { Divadlo } from "../Components/Divadlo";

export const DivadloScreen = () => {
  return <Layout contentComponent={<Divadlo />} />;
};