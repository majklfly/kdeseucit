import React from "react";
import "./screenstyles.css";

import { Layout } from "../Screens/Layout/Layout";
import { Predmety } from "../Components/Predmety";

export const PredmetyScreen = () => {
  return <Layout contentComponent={<Predmety />} />;
};
