import React from "react";
import "./screenstyles.css";

import { Layout } from "./Layout/Layout";
import { Druhatrida } from "../Components/Druhatrida";

export const DruhatridaScreen = () => {
  return <Layout contentComponent={<Druhatrida />} />;
};
