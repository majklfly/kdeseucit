import React from "react";
import "./screenstyles.css";

import { Layout } from "./Layout/Layout";
import { Nemecky } from "../Components/Nemecky";

export const NemeckyScreen = () => {
  return <Layout contentComponent={<Nemecky />} />;
};