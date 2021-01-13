import React from 'react';

import onlineknihovny from "../Pics/onlineknihovny.jpg";
import manuscriptorium from "../Pics/manuscriptorium.jpg";
import knihovny from "../Pics/knihovny.jpg";
import mestskaknihovna from "../Pics/mestskaknihovna.jpg";
import rozhlasctenar from "../Pics/rozhlasctenar.jpg";
import vedanadoma from "../Pics/vedanadoma.jpg";
import kav from "../Pics/kav.jpg";
import portal from "../Pics/portal.jpg";
import databazeknih from "../Pics/databazeknih.jpg";
import bejvavalo from "../Pics/bejvavalo.jpg";

export const Knihovny = () => {
    return (
        <div className="BoxProKarty">
            <a href="https://online.knihovny.cz/" target="_blank" rel="noreferrer">
                <img className="obrazekKarty" src={onlineknihovny} alt="onlineknihovny" />
            </a>
            <a href="http://www.manuscriptorium.com/cs" target="_blank" rel="noreferrer">
                <img className="obrazekKarty" src={manuscriptorium} alt="manuscriptorium" />
            </a>
            <a href="https://www.knihovny.cz/Search/Results/?type0%5B%5D=AllFields&bool0%5B%5D=AND&filter=JYOwzgDsBOCGAuwD2IBcAiApgWgEZKQGswB9YMJAGwWRHSA.&daterange=&publishDatefrom=&publishDateto=&limit=10&sort=relevance&page=1&searchTypeTemplate=basic&database=Solr&keepFacetsEnabled=true&join=AND" target="_blank" rel="noreferrer">
                <img className="obrazekKarty" src={knihovny} alt="knihovny" />
            </a>
            <a href="https://www.mlp.cz/cz/katalog-on-line/eknihy/" target="_blank" rel="noreferrer">
                <img className="obrazekKarty" src={mestskaknihovna} alt="mestskaknihovna" />
            </a>
            <a href="https://temata.rozhlas.cz/ctenarskydenik" target="_blank" rel="noreferrer">
                <img className="obrazekKarty" src={rozhlasctenar} alt="rozhlasctenar" />
            </a>
            <a href="https://temata.rozhlas.cz/ctenarskydenik" target="_blank" rel="noreferrer">
                <img className="obrazekKarty" src={rozhlasctenar} alt="rozhlasctenar" />
            </a>
            <a href="http://www.avcr.cz/cs/pro-verejnost/casopisy/#alfaomega" target="_blank" rel="noreferrer">
                <img className="obrazekKarty" src={vedanadoma} alt="vedanadoma" />
            </a>
            <a href="https://www.lib.cas.cz/sluzby/vypujcni-sluzby/registrace/online-registrace/" target="_blank" rel="noreferrer">
                <img className="obrazekKarty" src={kav} alt="kav" />
            </a>
            <a href="https://obchod.portal.cz/dokument/pracovni-listy-ke-stazeni/?fbclid=IwAR18-mzhvp9o9fsNKPBcYrTfNUv-ecBuJLXEYRiNQsImOWkruWzdobxxLT0" target="_blank" rel="noreferrer">
                <img className="obrazekKarty" src={portal} alt="portal" />
            </a>
            <a href="https://www.databazeknih.cz/eknihy-zdarma-ke-stazeni?dle=&gid=&id=2" target="_blank" rel="noreferrer">
                <img className="obrazekKarty" src={databazeknih} alt="databazeknih" />
            </a>
            <a href="https://www.bejvavalo.cz/" target="_blank" rel="noreferrer">
                <img className="obrazekKarty" src={bejvavalo} alt="bejvavalo" />
            </a>
        </div>
    )
}