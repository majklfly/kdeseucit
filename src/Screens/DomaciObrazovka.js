import { Layout } from "./Layout/Layout";

import hlavni from "../Pics/hlavni.jpg";

export const DomaciObrazovka = () => {
  return (
    <>
      <Layout />
      <img className="hlavniPic" src={hlavni} alt="hlavni" />
    </>
  );
};
