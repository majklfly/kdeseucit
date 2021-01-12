import React from "react";
import "./screenstyles.css";

import { Layout } from "./Layout/Layout";
import { Cestina } from "../Components/Cestina";

export const CestinaScreen = () => {
  return <Layout contentComponent={<Cestina />} />;
};