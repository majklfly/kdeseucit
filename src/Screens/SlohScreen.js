import React from "react";
import "./screenstyles.css";

import { Layout } from "./Layout/Layout";
import { Sloh } from "../Components/Sloh";

export const SlohScreen = () => {
  return <Layout contentComponent={<Sloh />} />;
};
