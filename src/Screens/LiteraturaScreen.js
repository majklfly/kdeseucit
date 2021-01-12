import React from "react";
import "./screenstyles.css";

import { Layout } from "./Layout/Layout";
import { Literatura } from "../Components/Literatura";

export const LiteraturaScreen = () => {
  return <Layout contentComponent={<Literatura />} />;
};