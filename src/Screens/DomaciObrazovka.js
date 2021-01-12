import { Layout } from "./Layout/Layout";

import { Uvod } from '../Components/Uvod'

export const DomaciObrazovka = () => {
  return (
    <div className="BoxProKarty">
      <Layout contentComponent={<Uvod />} />;
    </div>
  );
};
