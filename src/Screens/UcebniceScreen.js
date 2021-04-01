import React from "react";
import "./screenstyles.css";

import { Layout } from "./Layout/Layout";
import { Ucebnice } from "../Components/Ucebnice";

export const UcebniceScreen = () => {
  return <Layout contentComponent={<Ucebnice />} />;
};
