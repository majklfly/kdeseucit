import React from "react";
import "./screenstyles.css";

import { Layout } from "./Layout/Layout";
import { Prijimacky } from "../Components/Prijimacky";

export const PrijimackyScreen = () => {
  return <Layout contentComponent={<Prijimacky />} />;
};