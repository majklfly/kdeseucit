import React from "react";
import "./screenstyles.css";

import { Layout } from "./Layout/Layout";
import { Tabornici } from "../Components/Tabornici";

export const TaborniciScreen = () => {
  return <Layout contentComponent={<Tabornici />} />;
};