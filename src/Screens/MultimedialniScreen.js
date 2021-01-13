import React from "react";
import "./screenstyles.css";

import { Layout } from "./Layout/Layout";
import { Multimedia } from "../Components/Multimedia";

export const MultimedialniScreen = () => {
  return <Layout contentComponent={<Multimedia />} />;
};