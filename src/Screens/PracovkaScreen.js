import React from "react";
import "./screenstyles.css";

import { Layout } from "./Layout/Layout";
import { Pracovka } from "../Components/Pracovka";

export const PracovkaScreen = () => {
  return <Layout contentComponent={<Pracovka />} />;
};