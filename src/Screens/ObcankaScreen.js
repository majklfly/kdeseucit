import React from "react";
import "./screenstyles.css";

import { Layout } from "./Layout/Layout";
import { Obcanka } from "../Components/Obcanka";

export const ObcankaScreen = () => {
  return <Layout contentComponent={<Obcanka />} />;
};