import React from "react";
import "./screenstyles.css";

import { Layout } from "./Layout/Layout";
import { Maturita } from "../Components/Maturita";

export const MaturitaScreen = () => {
  return <Layout contentComponent={<Maturita />} />;
};