import React from "react";
import "./screenstyles.css";

import { Layout } from "./Layout/Layout";
import { Ucitele } from "../Components/Ucitele";

export const UciteleScreen = () => {
  return <Layout contentComponent={<Ucitele />} />;
};