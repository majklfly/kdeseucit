import React from "react";
import "./screenstyles.css";

import { Layout } from "./Layout/Layout";
import { Jazyky } from "../Components/Jazyky";

export const JazykyScreen = () => {
  return <Layout contentComponent={<Jazyky />} />;
};