import React from "react";
import "./screenstyles.css";

import { Layout } from "./Layout/Layout";
import { Vlastiveda } from "../Components/Vlastiveda";

export const VlastivedaScreen = () => {
  return <Layout contentComponent={<Vlastiveda />} />;
};