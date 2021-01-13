import React from "react";
import "./screenstyles.css";

import { Layout } from "./Layout/Layout";
import { Francouzsky } from "../Components/Francouzsky";

export const FrancouzskyScreen = () => {
  return <Layout contentComponent={<Francouzsky />} />;
};