import React from "react";
import "./screenstyles.css";

import { Layout } from "./Layout/Layout";
import { Pozemky } from "../Components/Pozemky";

export const PozemkyScreen = () => {
  return <Layout contentComponent={<Pozemky />} />;
};