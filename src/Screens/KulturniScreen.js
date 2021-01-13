import React from "react";
import "./screenstyles.css";

import { Layout } from "./Layout/Layout";
import { Kulturni } from "../Components/Kulturni";

export const KulturniScreen = () => {
  return <Layout contentComponent={<Kulturni />} />;
};