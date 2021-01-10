import React from "react";
import "./screenstyles.css";

import { Layout } from "./Layout/Layout";
import { Prvnitrida } from "../Components/Prvnitrida";

export const PrvnitridaScreen = () => {
  return <Layout contentComponent={<Prvnitrida />} />;
};
