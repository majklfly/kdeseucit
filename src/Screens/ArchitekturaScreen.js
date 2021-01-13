import React from "react";
import "./screenstyles.css";

import { Layout } from "./Layout/Layout";
import { Architektura } from "../Components/Architektura";

export const ArchitekturaScreen = () => {
  return <Layout contentComponent={<Architektura />} />;
};