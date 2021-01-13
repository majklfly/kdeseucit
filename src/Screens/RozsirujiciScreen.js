import React from "react";
import "./screenstyles.css";

import { Layout } from "./Layout/Layout";
import { Rozsirujici } from "../Components/Rozsirujici";

export const RozsirujiciScreen = () => {
  return <Layout contentComponent={<Rozsirujici />} />;
};