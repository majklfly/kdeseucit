import React from "react";
import "./screenstyles.css";

import { Layout } from "./Layout/Layout";
import { Knihovny } from "../Components/Knihovny";

export const KnihovnyScreen = () => {
  return <Layout contentComponent={<Knihovny />} />;
};