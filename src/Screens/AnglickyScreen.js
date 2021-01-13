import React from "react";
import "./screenstyles.css";

import { Layout } from "./Layout/Layout";
import { Anglicky } from "../Components/Anglicky";

export const AnglickyScreen = () => {
  return <Layout contentComponent={<Anglicky />} />;
};