import React from "react";
import "./screenstyles.css";

import { Layout } from "./Layout/Layout";
import { ZdrojeUkrajina } from "../Components/ZdrojeUkrajina";

export const ZdrojeUkrajinaScreen = () => {
  return <Layout contentComponent={<ZdrojeUkrajina />} />;
};
