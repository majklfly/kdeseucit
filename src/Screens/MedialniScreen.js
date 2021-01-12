import React from "react";
import "./screenstyles.css";

import { Layout } from "./Layout/Layout";
import { Medialni } from "../Components/Medialni";

export const MedialniScreen = () => {
  return <Layout contentComponent={<Medialni />} />;
};