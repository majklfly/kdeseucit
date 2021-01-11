import React from "react";
import "./screenstyles.css";

import { Layout } from "./Layout/Layout";
import { Celozivotnivzdelavani } from "../Components/Celozivotnivzdelavani";

export const CelozivotnivzdelavaniScreen = () => {
  return <Layout contentComponent={<Celozivotnivzdelavani />} />;
};
