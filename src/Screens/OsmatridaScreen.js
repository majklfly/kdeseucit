import React from "react";
import "./screenstyles.css";

import { Layout } from "./Layout/Layout";
import { Osmatrida } from "../Components/Osmatrida";

export const OsmatridaScreen = () => {
  return <Layout contentComponent={<Osmatrida />} />;
};
