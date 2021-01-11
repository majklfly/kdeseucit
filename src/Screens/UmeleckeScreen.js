import React from "react";
import "./screenstyles.css";

import { Layout } from "./Layout/Layout";
import { Umelecke } from "../Components/Umelecke";

export const UmeleckeScreen = () => {
  return <Layout contentComponent={<Umelecke />} />;
};