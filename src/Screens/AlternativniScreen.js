import React from "react";
import "./screenstyles.css";

import { Layout } from "./Layout/Layout";
import { Alternativni } from "../Components/Alternativni";

export const AlternativniScreen = () => {
  return <Layout contentComponent={<Alternativni />} />;
};