import React from "react";
import "./screenstyles.css";

import { Layout } from "./Layout/Layout";
import { Vyssistupne } from "../Components/Vyssistupne";

export const VyssistupneScreen = () => {
  return <Layout contentComponent={<Vyssistupne />} />;
};
