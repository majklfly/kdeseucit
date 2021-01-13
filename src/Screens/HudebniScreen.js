import React from "react";
import "./screenstyles.css";

import { Layout } from "./Layout/Layout";
import { Hudebni } from "../Components/Hudebni";

export const HudebniScreen = () => {
  return <Layout contentComponent={<Hudebni />} />;
};