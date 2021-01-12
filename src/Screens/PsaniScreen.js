import React from "react";
import "./screenstyles.css";

import { Layout } from "./Layout/Layout";
import { Psani } from "../Components/Psani";

export const PsaniScreen = () => {
  return <Layout contentComponent={<Psani />} />;
};