import React from "react";
import "./screenstyles.css";

import { Layout } from "./Layout/Layout";
import { Ctvrtatrida } from "../Components/Ctvrtatrida";

export const CtvrtatridaScreen = () => {
  return <Layout contentComponent={<Ctvrtatrida />} />;
};
