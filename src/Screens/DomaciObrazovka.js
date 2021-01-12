import { Layout } from "./Layout/Layout";

import { Uvod } from '../Components/Uvod'

export const DomaciObrazovka = () => {
  return (
    <div>
      <Layout contentComponent={<Uvod />} />;
    </div>
  );
};
