import React from "react";
import "./screenstyles.css";

import { Layout } from "../Screens/Layout/Layout";
import { Predskolaci } from "../Components/Predskolaci";

export const PredskolaciScreen = () => {
  return <Layout contentComponent={<Predskolaci />} />;
};
