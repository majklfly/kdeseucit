import React from "react";
import "./screenstyles.css";

import { Layout } from "./Layout/Layout";
import { Matematika } from "../Components/Matematika";

export const MatematikaScreen = () => {
  return <Layout contentComponent={<Matematika />} />;
};