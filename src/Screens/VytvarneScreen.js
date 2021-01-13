import React from "react";
import "./screenstyles.css";

import { Layout } from "./Layout/Layout";
import { Vytvarne } from "../Components/Vytvarne";

export const VytvarneScreen = () => {
  return <Layout contentComponent={<Vytvarne />} />;
};