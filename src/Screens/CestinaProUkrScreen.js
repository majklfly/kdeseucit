import React from "react";
import "./screenstyles.css";

import { Layout } from "./Layout/Layout";
import { CestinaProUkr } from "../Components/CestinaProUkr";

export const CestinaProUkrScreen = () => {
  return <Layout contentComponent={<CestinaProUkr />} />;
};
