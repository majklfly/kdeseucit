import React from "react";
import "./screenstyles.css";

import { Layout } from "./Layout/Layout";
import { Fyzika } from "../Components/Fyzika";

export const FyzikaScreen = () => {
  return <Layout contentComponent={<Fyzika />} />;
};