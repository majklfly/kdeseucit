import React, { useEffect, useState } from "react";
import { BrowserRouter as HashRouter, Switch, Route } from "react-router-dom";
import ReactGA from "react-ga";

import { Context } from "./Screens/Layout/Context";

import { DomaciObrazovka } from "./Screens/DomaciObrazovka";
import { PredskolaciScreen } from "./Screens/PredskolaciScreen";
import { PrvnitridaScreen } from "./Screens/PrvnitridaScreen";
import { DruhatridaScreen } from "./Screens/DruhatridaScreen";
import { TretitridaScreen } from "./Screens/TretitridaScreen";
import { CtvrtatridaScreen } from "./Screens/CtvrtatridaScreen";
import { PatatridaScreen } from "./Screens/PatatridaScreen";
import { SestatridaScreen } from "./Screens/SestatridaScreen";
import { SedmatridaScreen } from "./Screens/SedmatridaScreen";
import { OsmatridaScreen } from "./Screens/OsmatridaScreen";
import { DevatatridaScreen } from "./Screens/DevatatridaScreen";
import { StredniScreen } from "./Screens/StredniScreen";
import { VyssistupneScreen } from "./Screens/VyssistupneScreen";
import { CelozivotnivzdelavaniScreen } from "./Screens/CelozivotnivzdelavaniScreen";
import { PrijimackyScreen } from "./Screens/PrijimackyScreen";
import { MaturitaScreen } from "./Screens/MaturitaScreen";
import { PredmetyScreen } from "./Screens/PredmetyScreen";
import { JazykyScreen } from "./Screens/JazykyScreen";
import { UmeleckeScreen } from "./Screens/UmeleckeScreen";
import { PohybScreen } from "./Screens/PohybScreen";
import { CestinaScreen } from "./Screens/CestinaScreen";
import { LiteraturaScreen } from "./Screens/LiteraturaScreen";
import { PsaniScreen } from "./Screens/PsaniScreen";
import { MatematikaScreen } from "./Screens/MatematikaScreen";
import { PrvoukaScreen } from "./Screens/PrvoukaScreen";
import { VlastivedaScreen } from "./Screens/VlastivedaScreen";
import { PrirodovedaScreen } from "./Screens/PrirodovedaScreen";
import { InformatikaScreen } from "./Screens/InformatikaScreen";
import { ZemepisScreen } from "./Screens/ZemepisScreen";
import { PrirodopisScreen } from "./Screens/PrirodopisScreen";
import { DejepisScreen } from "./Screens/DejepisScreen";
import { ChemieScreen } from "./Screens/ChemieScreen";
import { FyzikaScreen } from "./Screens/FyzikaScreen";
import { EkologieScreen } from "./Screens/EkologieScreen";
import { ObcankaScreen } from "./Screens/ObcankaScreen";
import { RodinkaScreen } from "./Screens/RodinkaScreen";
import { PracovkaScreen } from "./Screens/PracovkaScreen";
import { PozemkyScreen } from "./Screens/PozemkyScreen";
import { ZSVScreen } from "./Screens/ZSVScreen";
import { MedialniScreen } from "./Screens/MedialniScreen";
import { AnglickyScreen } from "./Screens/AnglickyScreen";
import { NemeckyScreen } from "./Screens/NemeckyScreen";
import { FrancouzskyScreen } from "./Screens/FrancouzskyScreen";
import { SpanelskyScreen } from "./Screens/SpanelskyScreen";
import { RuskyScreen } from "./Screens/RuskyScreen";
import { HudebniScreen } from "./Screens/HudebniScreen";
import { VytvarneScreen } from "./Screens/VytvarneScreen";
import { MultimedialniScreen } from "./Screens/MultimedialniScreen";
import { ArchitekturaScreen } from "./Screens/ArchitekturaScreen";
import { RemeslaScreen } from "./Screens/RemeslaScreen";
import { SportScreen } from "./Screens/SportScreen";
import { TanecScreen } from "./Screens/TanecScreen";
import { DivadloScreen } from "./Screens/DivadloScreen";
import { TaborniciScreen } from "./Screens/TaborniciScreen";
import { TuristikaScreen } from "./Screens/TuristikaScreen";
import { AlternativniScreen } from "./Screens/AlternativniScreen";
import { RozsirujiciScreen } from "./Screens/RozsirujiciScreen";
import { KnihovnyScreen } from "./Screens/KnihovnyScreen";
import { KulturniScreen } from "./Screens/KulturniScreen";
import { UciteleScreen } from "./Screens/UciteleScreen";
import { DesignScreen } from "./Screens/DesignScreen";
import { SlohScreen } from "./Screens/SlohScreen";
import { UcebniceScreen } from "./Screens/UcebniceScreen";
import { ZdrojeUkrajinaScreen } from "./Screens/ZdrojeUkrajinaScreen";
import { CestinaProUkrScreen } from "./Screens/CestinaProUkrScreen";

function App() {
  const [expanded, setExpanded] = useState();

  useEffect(() => {
    ReactGA.initialize("UA-187295571-1", {
      debug: true,
      titleCase: false,
      gaOptions: {
        userId: 187295571,
      },
    });
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <div className="App">
      <HashRouter basename="/#">
        <Context.Provider value={{ expanded, setExpanded }}>
          <Switch>
            <Route path="/zdrojeukr">
              <ZdrojeUkrajinaScreen />
            </Route>
            <Route path="/cestinaukr">
              <CestinaProUkrScreen />
            </Route>
            <Route path="/sloh">
              <SlohScreen />
            </Route>
            <Route path="/design">
              <DesignScreen />
            </Route>
            <Route path="/ucitele">
              <UciteleScreen />
            </Route>
            <Route path="/kulturni">
              <KulturniScreen />
            </Route>
            <Route path="/knihovny">
              <KnihovnyScreen />
            </Route>
            <Route path="/rozsirujici">
              <RozsirujiciScreen />
            </Route>
            <Route path="/alternativni">
              <AlternativniScreen />
            </Route>
            <Route path="/turistika">
              <TuristikaScreen />
            </Route>
            <Route path="/tabornici">
              <TaborniciScreen />
            </Route>
            <Route path="/divadlo">
              <DivadloScreen />
            </Route>
            <Route path="/tanec">
              <TanecScreen />
            </Route>
            <Route path="/sport">
              <SportScreen />
            </Route>
            <Route path="/remesla">
              <RemeslaScreen />
            </Route>
            <Route path="/architektura">
              <ArchitekturaScreen />
            </Route>
            <Route path="/multimedialni">
              <MultimedialniScreen />
            </Route>
            <Route path="/vytvarne">
              <VytvarneScreen />
            </Route>
            <Route path="/hudebni">
              <HudebniScreen />
            </Route>
            <Route path="/rusky">
              <RuskyScreen />
            </Route>
            <Route path="/spanelsky">
              <SpanelskyScreen />
            </Route>
            <Route path="/francouzsky">
              <FrancouzskyScreen />
            </Route>
            <Route path="/nemecky">
              <NemeckyScreen />
            </Route>
            <Route path="/anglicky">
              <AnglickyScreen />
            </Route>
            <Route path="/medialni">
              <MedialniScreen />
            </Route>
            <Route path="/zsv">
              <ZSVScreen />
            </Route>
            <Route path="/pozemky">
              <PozemkyScreen />
            </Route>
            <Route path="/pracovka">
              <PracovkaScreen />
            </Route>
            <Route path="/rodinka">
              <RodinkaScreen />
            </Route>
            <Route path="/obcanka">
              <ObcankaScreen />
            </Route>
            <Route path="/ekologie">
              <EkologieScreen />
            </Route>
            <Route path="/fyzika">
              <FyzikaScreen />
            </Route>
            <Route path="/chemie">
              <ChemieScreen />
            </Route>
            <Route path="/dejepis">
              <DejepisScreen />
            </Route>
            <Route path="/prirodopis">
              <PrirodopisScreen />
            </Route>
            <Route path="/zemepis">
              <ZemepisScreen />
            </Route>
            <Route path="/informatika">
              <InformatikaScreen />
            </Route>
            <Route path="/prirodoveda">
              <PrirodovedaScreen />
            </Route>
            <Route path="/vlastiveda">
              <VlastivedaScreen />
            </Route>
            <Route path="/prvouka">
              <PrvoukaScreen />
            </Route>
            <Route path="/matematika">
              <MatematikaScreen />
            </Route>
            <Route path="/psani">
              <PsaniScreen />
            </Route>
            <Route path="/literatura">
              <LiteraturaScreen />
            </Route>
            <Route path="/cestina">
              <CestinaScreen />
            </Route>
            <Route path="/pohyb">
              <PohybScreen />
            </Route>
            <Route path="/umelecke">
              <UmeleckeScreen />
            </Route>
            <Route path="/jazyky">
              <JazykyScreen />
            </Route>
            <Route path="/predmety">
              <PredmetyScreen />
            </Route>
            <Route path="/maturita">
              <MaturitaScreen />
            </Route>
            <Route path="/prijimacky">
              <PrijimackyScreen />
            </Route>
            <Route path="/celozivotnivzdelavani">
              <CelozivotnivzdelavaniScreen />
            </Route>
            <Route path="/vyssistupne">
              <VyssistupneScreen />
            </Route>
            <Route path="/stredni">
              <StredniScreen />
            </Route>
            <Route path="/devatatrida">
              <DevatatridaScreen />
            </Route>
            <Route path="/osmatrida">
              <OsmatridaScreen />
            </Route>
            <Route path="/sedmatrida">
              <SedmatridaScreen />
            </Route>
            <Route path="/sestatrida">
              <SestatridaScreen />
            </Route>
            <Route path="/patatrida">
              <PatatridaScreen />
            </Route>
            <Route path="/ctvrtatrida">
              <CtvrtatridaScreen />
            </Route>
            <Route path="/tretitrida">
              <TretitridaScreen />
            </Route>
            <Route path="/druhatrida">
              <DruhatridaScreen />
            </Route>
            <Route path="/predskolaci">
              <PredskolaciScreen />
            </Route>
            <Route path="/prvnitrida">
              <PrvnitridaScreen />
            </Route>
            <Route path="/ucebnice">
              <UcebniceScreen />
            </Route>
            <Route path="/">
              <DomaciObrazovka />
            </Route>
          </Switch>
        </Context.Provider>
      </HashRouter>
    </div>
  );
}

export default App;
